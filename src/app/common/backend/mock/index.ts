import { User, UserAuth } from '../models/user';
import { Feed } from '../models/feed';
import { Reply } from '../models/reply';

// feed를 구현하기 위한 mock data
export const userAuth: UserAuth[] = [
    {
        email: 'admin@admin.com',
        password: '1',
    },
    {
        email: 'kenneth@naver.com',
        password: '1',
    },
];

export const replys: Reply[] = [
    {
        id: 0,
        content: '그냥 바보가 아니고?',
        userId: 0,
        userNickName: '천하무적루피',
        feedId: 0,
        created: new Date('June 17, 2021 15:02:03').getTime()
    },
    {
        id: 1,
        content: '우와~ 바보다~',
        userId: 0,
        userNickName: '천하무적루피',
        feedId: 0,
        created: new Date('June 17, 2021 15:02:03').getTime()
    },
    {
        id: 1,
        content: '난 책 보면 졸려~~',
        userId: 0,
        userNickName: '천하무적루피',
        feedId: 1,
        created: new Date('June 17, 2021 17:21:01').getTime()
    },
];

export const feeds: Feed[] = [
    {
        id: 0,
        userId: 0,
        userName: '천하무적루피',
        userNickName: 'rupy',
        content: '개발밖에 모르는 바보...',
        created: new Date('June 10, 2021 17:21:01').getTime(),
        tags: '#HTML,#Javascript',
        reply: replys.filter((reply: Reply) => reply.feedId === 0),
        // reply: replys.filter((reply: Reply) => reply.feedId === 0),
        image: '/assets/images/img-dummy1.JPG',
        like: 0,
    },
    {
        id: 1,
        userId: 0,
        userName: '천하무적루피',
        userNickName: 'rupy',
        content: '미라클모닝에는 역시 독서가 빠질 수 없지',
        created: new Date('June 10, 2021 17:21:01').getTime(),
        tags: '#BOOK,#독서',
        reply: replys.filter((reply: Reply) => reply.feedId === 1),
        // reply: replys.filter((reply: Reply) => reply.feedId === 1),
        image: '/assets/images/img-dummy2.JPG',
        like: 3,
    },
    {
        id: 2,
        userId: 1,
        userName: 'Kenneth',
        userNickName: 'kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 11, 2021 17:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '/assets/images/img-dummy3.JPG',
        like: 1,
    },
    {
        id: 3,
        userId: 1,
        userName: 'Kenneth',
        userNickName: 'kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 12, 2021 18:11:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '/assets/images/img-dummy1.JPG',
        like: 1,
    },
    {
        id: 4,
        userId: 1,
        userName: 'Kenneth',
        userNickName: 'kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 11, 2021 17:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '/assets/images/img-dummy2.JPG',
        like: 1,
    },
    {
        id: 5,
        userId: 1,
        userName: 'Kenneth',
        userNickName: 'kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 15, 2021 18:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '/assets/images/img-dummy3.JPG',
        like: 1,
    },
    {
        id: 6,
        userId: 1,
        userName: 'Kenneth',
        userNickName: 'kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 15, 2021 19:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '/assets/images/img-dummy1.JPG',
        like: 1,
    },
];

export const users: User[] = [
    {
        id: 0,
        nickName: 'rupy',
        email: 'admin@admin.com',
        image: '',
        name: '천하무적루피',
        desciption: '안녕하세요? 개발 공부중인 루피입니다.\n열심히 공부해서 우주최강 개발자가 될거에요!\nI never GIVE UP!',
        feedCount: feeds.filter((feed: Feed) => feed.userId === 0).length,
        // 총 게시물 * 10 + 총 좋아요 개수*10
        passionIndex: feeds.filter((feed: Feed) => feed.userId === 0).length * 10,
        created: new Date('June 4, 2021 18:10:03').getTime(),
        likeFeeds: [],
        tags: ['마크업', 'CSS', '프론트엔드', 'Angular', 'React', 'Vue'],
        topTags: ['마크업', 'CSS']
    },
    {
        id: 1,
        nickName: 'kenneth',
        email: 'kenneth@kenneth.com',
        image: '',
        name: 'Kenneth',
        desciption: '최고가 되기 위하여~',
        feedCount: feeds.filter((feed: Feed) => feed.userId === 1).length,
        passionIndex: feeds.filter((feed: Feed) => feed.userId === 1).length * 10,
        created: new Date('May 1, 2021 21:05:01').getTime(),
        likeFeeds: [],
        tags: ['Frontend', 'Angular', 'Rxjs', 'Typescript'],
        topTags: ['Frontend', 'Angular']
    },
];
