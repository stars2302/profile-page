export type ProjectContent = {
  id: number;
  name: string;
  images: string[];
  description: string;
  period: string;
  role: string;
  skills: string[];
  websiteUrl: string;
  heart: boolean;
};

export const projectContents: ProjectContent[] = [
  // id: 프로젝트를 구분하고 More 콘텐츠와 연결하는 고유 번호
  // name: 프로젝트 팝업에 표시할 프로젝트 이름
  // images: 프로젝트 썸네일과 팝업 슬라이드 이미지 주소
  // description: 프로젝트 설명
  // period: 프로젝트 작업 기간
  // role: 프로젝트에서 담당한 역할
  // skills: 프로젝트에 사용한 기술 목록
  // websiteUrl: 클릭 시 이동할 프로젝트 웹 페이지 주소
  // heart: 썸네일 hover 시 좋아요 하트 노출 여부
  {
    id: 1,
    name: "프로젝트 이름",
    images: [
      "https://picsum.photos/id/10/600/430",
      "https://picsum.photos/id/30/600/430",
      "https://picsum.photos/id/50/600/430",
    ],
    description:
      "사용자가 필요한 정보를 빠르게 파악할 수 있도록 화면 구조와 인터랙션을 정리한 프로젝트입니다.",
    period: "2025.01 - 2025.03",
    role: "퍼블리싱 100%, 반응형 UI 구현, 인터랙션 설계",
    skills: ["React", "TypeScript", "SCSS", "Swiper"],
    websiteUrl: "https://github.com/stars2302",
    heart: true,
  },
];
