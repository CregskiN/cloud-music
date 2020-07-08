import styled from 'styled-components';
import assetStyle from '../../assets/variables';

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    background: ${assetStyle["theme-color"]};
    &>span {
        line-height: 40px;
        color: #f1f1f1;
        font-size: 20px;
        &.iconfont {
        font-size: 25px;
        }
  }
`;

export const Tab = styled.div`
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${assetStyle['theme-color']};
    a {
        flex: 1;
        /* 
            flex-grow: 1;
            flex-basis: 0%;
            flex-shrink: 1; // 把item视为0尺寸
         */
        padding: 2px 0;
        font-size: 14px;
        color: #e4e4e4;
        &.selected {
            span {
                padding: 3px 0;
                font-weight: 700;
                color: #f1f1f1;
                border-bottom: 2px solid #f1f1f1;
            }
        }
    }
    
`;

export const TabItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;