import { formatDate } from '@angular/common';

import { UserProfileModel } from '../models/user-profile.model';
import { User } from '../backend/models/user';
import { Feed } from '../backend/models/feed';
import { FeedModel } from '../models/feed.model';

export const userMapperForUserProfile = (user: User): UserProfileModel => {
    return user ? {
        id: user.id,
        userNickName: user.nickName,
        userEmail: user.email,
        userImage: user.image,
        userName: user.name,
        userDesciption: user.desciption,
        feedCount: user.feedCount,
        passionIndex: user.passionIndex,
        createdAt: formatDate(user.created, 'YYYY년 M월 d일 (E) aa H:mm', 'ko'),
        likeFeeds: user.likeFeeds,
        tags: user.tags,
        topTags: user.topTags
    } : {};
};

export const feedMapperForFeedModel = (feed: Feed): FeedModel => {
    return feed ? {
        id: feed.id,
        userId: feed.userId,
        userName: feed.userName,
        content: feed.content,
        createdAt: formatDate(feed.created, 'YYYY년 M월 d일 (E) aa H:mm', 'ko'),
        tags: feed.tags,
        reply: feed.reply || [],
        feedImage: feed.image,
        like: feed.like
    } : {};
};
