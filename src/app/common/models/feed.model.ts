export interface FeedModel {
    id?: number;
    userId?: string;
    userName?: string;
    content?: string;
    createdAt?: string;
    tags?: string;
    reply?: any[];
    feedImage?: string;
    like?: number;
}
