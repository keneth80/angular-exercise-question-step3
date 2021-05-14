export interface UserAuth {
    email: string;
    password: string;
}

export interface User {
    id: number;
    nickName: string; // 유저 닉네임 (필수)
    email: string;
    image?: string; // 유저 이미지 (선택) : 기본이미지 제공
    name: string; // 유저 네임 (필수)
    desciption?: string; // 유저 소개글 (선택)
    feedCount: number; // 게시글 : 업로드한 총 게시글 개수
    passionIndex: number; // 열정지수 = 총 게시물 * 10 + 총 좋아요 개수*10 입니다. ex) 열정지수 200 = 3*10 + 17*10
    created: number;
    likeFeeds: string; // 관심사 : 게시물에 달아놓은 태그 개수 (tag가 ,로 구분되어 string으로 들어간다.)
    tags: string; // 태그목록 (tag가 ,로 구분되어 string으로 들어간다.)
    topTags: string; // 태그목록중 가장 많이 달아놓은 최상위 2개는 .primary 클래스 붙음, 태그 누르면 태그 기반 검색 결과 페이지로 이동 (tag가 ,로 구분되어 string으로 들어간다.)
}
