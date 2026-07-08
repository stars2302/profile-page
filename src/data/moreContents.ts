export type MoreContent = {
  id: number;
  type: "profile" | "project";
  projectId: number | null;
  projectName: string | null;
  title: string;
  url: string;
};

export const moreContents: MoreContent[] = [
  // id: 콘텐츠를 구분하는 고유 번호
  // type: 프로필 관련 글은 "profile", 프로젝트 관련 글은 "project"
  // projectId: 연결할 프로젝트의 고유 번호. 프로필 관련 글이면 null
  // projectName: 연결된 프로젝트의 표시 이름. 프로필 관련 글이면 null
  // title: 페이지 제목
  // url: 클릭 시 이동할 Notion 페이지 주소
  {
    id: 1,
    type: "profile",
    projectId: null,
    projectName: null,
    title: "기획, 디자인 이야기",
    url: "https://real-friction-aeb.notion.site/2c686393723f806d90faf4f318f1a019",
  },
  {
    id: 2,
    type: "project",
    projectId: 1,
    projectName: "프로젝트 이름",
    title: "프로젝트 초기 세팅의 소중함을 깨닫다..",
    url: "https://real-friction-aeb.notion.site/2c686393723f807ebe39ed0070715046",
  },
  {
    id: 3,
    type: "project",
    projectId: 1,
    projectName: "프로젝트 이름",
    title: "가운데가 뻥- 뚫린 네모 만들기",
    url: "https://real-friction-aeb.notion.site/2c686393723f80c3a387c8cd53b3bb69",
  },
];
