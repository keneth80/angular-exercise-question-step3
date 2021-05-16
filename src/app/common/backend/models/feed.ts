export interface Feed {
    id: number;
    userId: number;
    userName: string;
    content: string;
    created: number;
    tags: string;
    reply: any[];
    image: string;
    like: number;
}
