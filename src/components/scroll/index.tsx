import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import BetterScrollCore from 'better-scroll';

import {
    ScrollContainer
} from './style'

export type DirectionType = 'vertical' | 'horizontal';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement>{
    direction?: DirectionType,// 滚动的方向
    click?: true,// 是否支持点击
    refresh?: boolean,// 是否刷新
    onScroll?: (scroll: any) => void,// 滑动触发的回调函数
    onPullUp?: () => void,// 上拉加载逻辑
    onPullDown?: () => void,// 下拉加载逻辑
    pullUpLoading?: boolean,// 是否显示上拉 loading 动画
    pullDownLoading?: boolean,// 是否显示下拉 loading 动画
    bounceTop?: boolean,// 是否支持向上吸顶
    bounceBottom?: boolean// 是否支持向下吸底
    className?: string;
};

const Scroll: React.FC<ScrollProps> = forwardRef((props, ref) => {
    console.log('component Scroll render ...');
    const {
        direction,
        click,
        refresh,
        onScroll,
        onPullUp,
        onPullDown,
        pullUpLoading,
        pullDownLoading,
        bounceTop,
        bounceBottom,
        className,
        ...resetProps
    } = props;
    const [bScroll, setBScroll] = useState<BetterScrollCore | null>(null);
    const scrollContaninerRef = useRef<HTMLDivElement>(null);

    // 创建better-scroll
    useEffect(() => {
        const scroll = new BetterScrollCore((scrollContaninerRef as any).current, {
            scrollX: direction === "horizontal",
            scrollY: direction === "vertical",
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        });
        setBScroll(scroll);
        return () => {
            setBScroll(null);
        }
    }, [bounceBottom, bounceTop, click, direction])

    // 每次渲染完成，刷新实例
    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    });

    // 给实例绑定 scroll 事件
    useEffect(() => {
        if (bScroll && onScroll) {
            bScroll.on('scroll', (scroll: any) => {
                // console.log(scroll);
                onScroll(scroll);
            })
            return () => {
                bScroll.off('scroll');
            }
        }
    }, [onScroll, bScroll]);

    // 添加上拉到底的判断，调用上拉函数
    useEffect(() => {
        if (bScroll && onPullUp) {
            bScroll.on('scrollEnd', () => {
                // 是否滑动到了底部
                if (bScroll.y <= bScroll.maxScrollY + 100) {
                    onPullUp();
                }
            })
            return () => {
                bScroll.off('scrollEnd');
            }
        }
    }, [bScroll, onPullUp, onScroll])

    // 进行下拉判断，调用下拉函数
    useEffect(() => {
        if (bScroll && onPullDown) {
            bScroll.on('touchEnd', (pos: any) => {
                // 判断用户下拉动作
                if (pos.y > 50) {
                    onPullDown()
                }
            })
            return () => {
                bScroll.off('touchEnd');
            }
        }
    }, [bScroll, onPullDown])

    useImperativeHandle(ref, () => {
        return {
            refresh() {
                if (bScroll) {
                    bScroll.refresh();
                    bScroll.scrollTo(0, 0);
                }
            },
            getBScroll() {
                if (bScroll) {
                    return bScroll;
                }
            }
        }
    })


    return (
        <ScrollContainer ref={scrollContaninerRef} className={className} {...resetProps}>
            {props.children}
        </ScrollContainer>
    )
});

Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    pullUpLoading: false,
    pullDownLoading: false,
    bounceTop: true,
    bounceBottom: true
};

export default React.memo(Scroll);