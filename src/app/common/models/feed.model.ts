export interface FeedModel {
    id?: number;
    userId?: number;
    userName?: string;
    content?: string;
    createdAt?: string;
    tags?: string;
    reply?: any[];
    feedImage?: string;
    like?: number;
}
