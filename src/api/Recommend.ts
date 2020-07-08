import { axiosInstance } from './axios';


export default class Recommend {

    private static _instance: Recommend;

    private constructor() { }

    static getInstance() {
        if (!Recommend._instance) {
            Recommend._instance = new Recommend();
        }
        return Recommend._instance;
    }

    /**
     * 获取 banner 数据
     */
    public getBannerRequest = () => {
        return axiosInstance.get<CloudMusicResponse.GetBannerResponse>('/banner');
    }

    /**
     * 获取推荐列表
     */
    public getRecommentListRequest = () => {
        return axiosInstance.get<CloudMusicResponse.GetRecommendResponse>('/personalized');
    }
}