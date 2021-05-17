export interface UserProfileModel {
    id?: number;
    userNickName?: string; // 유저 닉네임
    userEmail?: string;
    userImage?: string; // 유저 이미지
    userName?: string; // 유저 네임
    userDesciption?: string; // 유저 소개글
    feedCount?: number; // 게시글 : 업로드한 총 게시글 개수
    passionIndex?: number; // 열정지수 = 총 게시물 * 10 + 총 좋아요 개수*10 입니다. ex) 열정지수 200 = 3*10 + 17*10
    createdAt?: string;
    likeFeeds?: string[]; // 관심사 : 게시물에 달아놓은 태그 개수
    tags?: string[]; // 태그목록 (tag가 ,로 구분되어 string으로 들어간다.)
    topTags?: string[]; // 태그목록중 가장 많이 달아놓은 최상위 2개는 .primary 클래스 붙음, 태그 누르면 태그 기반 검색 결과 페이지로 이동 (tag가 ,로 구분되어 string으로 들어간다.)
}
