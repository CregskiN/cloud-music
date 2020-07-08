/// <reference types="cloud-music" />

declare namespace CloudMusicResponse {
    type StatusCode = 200;


    /**
     * 获取轮播图图片
     */
    interface GetBannerResponse {
        banners: CloudMusic.BannerType[];
        code: StatusCode;
    }

    /**
     * 获取推荐歌单
     */
    interface GetRecommendResponse {
        hasTaste: boolean;
        code: StatusCode;
        category: number;
        result: CloudMusic.RecommendType[];
    }

    
}