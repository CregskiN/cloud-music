declare namespace CloudMusic {
    interface IAction {
        type: string;
        payload: any;
    }



    interface BannerType {
        imageUrl: string;
        targetId: number;
        adid: number | null;
        targetType: number;
        titleColor: string;
        typeTitle: string;
        url: string | null;
        exclusive: boolean;
        monitorImpress: null;
        monitorClick: null;
        monitorType: null;
        monitorImpressList: null;
        monitorClickList: null;
        monitorBlackList: null;
        extMonitor: null;
        extMonitorInfo: null;
        adSource: null;
        adLocation: null;
        adDispatchJson: null;
        encodeId: string;
        program: null;
        event: null;
        video: null;
        song: null;
        scm: string;
    }

    interface RecommendType {
        id: number;
        type: number;
        name: string;
        copywriter: string;
        picUrl: string;
        canDislike: boolean;
        trackNumberUpdateTime: number;
        playCount: number;
        trackCount: number;
        highQuality: boolean;
        alg: string;
    }


    interface RecommendState {
        bannerList: BannerType[];
        recommendList: any[];
        enterLoading: boolean;
    }

    interface CloudMusicRootState {
        recommend: RecommendState;
    }
}