import { User, UserAuth } from '../models/user';
import { Feed } from '../models/feed';
import { Reply } from '../models/reply';

export const userAuth: UserAuth[] = JSON.parse(localStorage.getItem('user_ahth') as string) || [
    {
        userId: 'admin',
        password: '1',
    },
    {
        userId: 'kenneth',
        password: '1',
    },
];

export const users: User[] = JSON.parse(localStorage.getItem('users') as string) || [
    {
        id: 0,
        userId: 'admin',
        email: 'admin@admin.com',
        image: '',
        name: '천하무적 루피',
        desciption: '안녕하세요? 개발 공부중인 루피입니다.\n열심히 공부해서 우주최강 개발자가 될거에요!\nI never GIVE UP!',
        feedCount: 0,
        passionIndex: 0,
        created: new Date('June 4, 2021 18:10:03').getTime(),
        likeFeeds: '',
        tags: '',
        topTags: ''
    },
    {
        id: 1,
        userId: 'kenneth',
        email: 'kenneth@kenneth.com',
        image: '',
        name: 'Kenneth',
        desciption: '최고가 되기 위하여~',
        feedCount: 0,
        passionIndex: 0,
        created: new Date('May 1, 2021 21:05:01').getTime(),
        likeFeeds: '',
        tags: '',
        topTags: ''
    },
];

export const replys: Reply[] = [
    {
        id: 0,
        content: '그냥 바보가 아니고?',
        userId: 'admin',
        userName: '천하무적 루피',
        feedId: 0,
        created: new Date('June 17, 2021 15:02:03').getTime()
    },
    {
        id: 1,
        content: '우와~ 바보다~',
        userId: 'admin',
        userName: '천하무적 루피',
        feedId: 0,
        created: new Date('June 17, 2021 15:02:03').getTime()
    },
    {
        id: 1,
        content: '난 책 보면 졸려~~',
        userId: 'admin',
        userName: '천하무적 루피',
        feedId: 1,
        created: new Date('June 17, 2021 17:21:01').getTime()
    },
];

export const feeds: Feed[] = [
    {
        id: 0,
        userId: 'admin',
        userName: '천하무적 루피',
        content: '개발밖에 모르는 바보...',
        created: new Date('June 10, 2021 17:21:01').getTime(),
        tags: '#HTML,#Javascript',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 0),
        image: '',
        like: 3,
    },
    {
        id: 1,
        userId: 'admin',
        userName: '천하무적 루피',
        content: '미라클모닝에는 역시 독서가 빠질 수 없지',
        created: new Date('June 10, 2021 17:21:01').getTime(),
        tags: '#BOOK,#독서',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 1),
        image: '',
        like: 3,
    },
    {
        id: 2,
        userId: 'kenneth',
        userName: 'Kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 11, 2021 17:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '',
        like: 1,
    },
    {
        id: 3,
        userId: 'kenneth',
        userName: 'Kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 12, 2021 18:11:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '',
        like: 1,
    },
    {
        id: 4,
        userId: 'kenneth',
        userName: 'Kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 11, 2021 17:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '',
        like: 1,
    },
    {
        id: 5,
        userId: 'kenneth',
        userName: 'Kenneth',
        content: '아 할게 너무 많아~~~',
        created: new Date('June 15, 2021 17:21:01').getTime(),
        tags: '#WORK',
        reply: [],
        // reply: replys.filter((reply: Reply) => reply.feedId === 2),
        image: '',
        like: 1,
    }
];
