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
    type: "profile",
    projectId: null,
    projectName: null,
    title: "프로젝트 초기 세팅의 소중함을 깨닫다..",
    url: "https://real-friction-aeb.notion.site/2c686393723f807ebe39ed0070715046",
  },
  {
    id: 3,
    type: "profile",
    projectId: null,
    projectName: null,
    title: "가운데가 파여있는 둥근 네모 만들기",
    url: "https://real-friction-aeb.notion.site/2c686393723f80c3a387c8cd53b3bb69",
  },
  {
    id: 4,
    type: "profile",
    projectId: null,
    projectName: null,
    title: "object 태그, 왜 사용했을까?",
    url: "https://real-friction-aeb.notion.site/object-2ee86393723f808aa21cda42d38cc9ef",
  },
  {
    id: 5,
    type: "profile",
    projectId: null,
    projectName: null,
    title: "Only CSS로 스크롤 애니메이션 구현하기",
    url: "https://real-friction-aeb.notion.site/Only-CSS-32086393723f806fbd3acedb22c6f9d4",
  },
  {
    id: 6,
    type: "profile",
    projectId: null,
    projectName: null,
    title: "dl , dt, dd 태그를 Q&A 에 활용해보자!",
    url: "https://real-friction-aeb.notion.site/dl-dt-dd-Q-A-2ed86393723f80c1929fdebc637e2313",
  },
  {
    id: 7,
    type: "profile",
    projectId: null,
    projectName: null,
    title: "항상 고민되는 반응형",
    url: "https://real-friction-aeb.notion.site/39886393723f80cbad17d9929a8435e2",
  },
];
