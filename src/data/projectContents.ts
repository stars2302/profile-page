import { projectImages } from "./projectImages";

export type ProjectContent = {
  id: number;
  name: string;
  images: string[];
  description: string;
  period: string;
  platform: string[];
  role: string;
  skills: string[];
  websiteUrl: string;
  heart: boolean;
};

export const projectContents: ProjectContent[] = [
  // id: 프로젝트를 구분하고 More 콘텐츠와 연결하는 고유 번호
  // name: 프로젝트 팝업에 표시할 프로젝트 이름
  // images: projectImages에서 관리하는 프로젝트 썸네일과 팝업 슬라이드 이미지 주소
  // description: 프로젝트 설명
  // period: 프로젝트 작업 기간
  // platform: 프로젝트가 대응하는 플랫폼 목록
  // role: 프로젝트에서 담당한 역할
  // skills: 프로젝트에 사용한 기술 목록
  // websiteUrl: 클릭 시 이동할 프로젝트 웹 페이지 주소
  // heart: 썸네일 hover 시 좋아요 하트 노출 여부
  // + more list 는 moreContents.ts 에서 관리. (projectId 기준으로 매칭)

  {
    "id": 1,
    "name": "사내 Admin 프레임워크",
    "images": projectImages.kenya,
    "description": "SI 프로젝트에서 공통으로 사용하는 Admin 프레임워크, 프로젝트별 커스터마이징할 수 있도록 구축한 공통 시스템입니다.",
    "period": "2024.12 - 2025.03",
    "platform": ["PC Web"],
    "role": "UI 컴포넌트 아키텍처 설계, 멀티 테마 시스템 구축, Storybook 기반 컴포넌트 문서화",
    "skills": [
      "React",
      "Panda CSS",
      "Ant Design",
      "SCSS"
    ],
    "websiteUrl": "",
    "heart": true
  },
  {
    "id": 2,
    "name": "대학교 모바일 채팅 어플",
    "images": projectImages.kdisConnect,
    "description": "모바일 웹 기반 소셜 메신징 서비스 UI 구축, 다양한 모바일 환경과 PC에서도 일관된 사용자 경험을 제공하도록 구현한 프로젝트입니다.",
    "period": "2025.10 - 2026.01",
    "platform": ["PC", "Mobile (적응형)"],
    "role": "React 기반 주요 화면 UI 마크업, 공통 UI 컴포넌트 구성, 다양한 모바일 디바이스 환경 대응",
    "skills": [
      "React",
      "SCSS",
      "Ant Design"
    ],
    "websiteUrl": "",
    "heart": true
  },
  {
    "id": 3,
    "name": "대학원 홈페이지",
    "images": projectImages.mhpHomepage,
    "description": "대학원 소개, 교수진, 교육 과정 등 다양한 정보성 콘텐츠를 제공하는 반응형 웹사이트를 구축한 프로젝트입니다.",
    "period": "2024.10 - 2024.11",
    "platform": ["PC", "Mobile (반응형)"],
    "role": "Vue 기반 퍼블리싱 전반 담당, 반응형 구조 설계 및 스타일 시스템 구축",
    "skills": [
      "Vue 3",
      "SCSS"
    ],
    "websiteUrl": "",
    "heart": false
  },
  {
    "id": 4,
    "name": "세기몰",
    "images": projectImages.saekimall,
    "description": "온라인 쇼핑몰 운영 및 유지보수 프로젝트. 이벤트·프로모션 페이지와 운영 기능을 지속적으로 개선하며 서비스를 관리한 프로젝트입니다.",
    "period": "2024.01 - 2026.03",
    "platform": ["PC", "Mobile (적응형)"],
    "role": "운영 페이지 마크업 유지보수, 신규 화면 및 프로모션 페이지 퍼블리싱, 기존 UI 개선",
    "skills": [
      "HTML5",
      "CSS3",
      "jQuery"
    ],
    "websiteUrl": "",
    "heart": false
  },
  {
    "id": 5,
    "name": "에너지 관리 시스템 EMS",
    "images": projectImages.lsSauterMicroGridEms,
    "description": "태양광(PV), ESS, 전력 제어 등 다양한 에너지 설비의 상태와 운영 현황을 관리하는 에너지 관리 시스템(EMS)입니다.",
    "period": "2024.08 - 2024.11 / 2025.04 - 2025.07",
    "platform": ["PC Web"],
    "role": "Vue 기반 전체 화면 UI 마크업, 공통 레이아웃 및 화면 퍼블리싱",
    "skills": [
      "Vue 3",
      "SCSS",
      "Ant Design"
    ],
    "websiteUrl": "",
    "heart": false
  },
  {
    "id": 6,
    "name": "대학교 전자출결 키오스크",
    "images": projectImages.kdisAttendanceKiosk,
    "description": "강의실에서 QR 출석 확인과 학생 정보를 제공하는 태블릿 전용 전자출결 키오스크 UI를 구축한 프로젝트입니다.",
    "period": "2025.07 - 2025.08",
    "platform": ["Tablet"],
    "role": "키오스크 UI 마크업, vw 기반 반응형 화면 구성",
    "skills": [
      "Vue 3",
      "TypeScript",
      "SCSS",
      "Ant Design",
      "Swiper"
    ],
    "websiteUrl": "",
    "heart": false
  },
  {
    "id": 7,
    "name": "2D 설비/도면 에디터",
    "images": projectImages.twoDEditor,
    "description": "2D 설비와 도면을 편집할 수 있는 저작 도구. 툴바, 속성 패널, 이벤트 편집, 태그 검색 등을 제공하는 에디터입니다.",
    "period": "2024.05 - 2024.07",
    "platform": ["PC Web"],
    "role": "에디터 레이아웃 UI 구축, 팝업 및 패널 UI 마크업, 공통 화면 퍼블리싱",
    "skills": [
      "Vue",
      "TypeScript",
      "SCSS",
      "Ant Design",
      "Wijmo Grid"
    ],
    "websiteUrl": "",
    "heart": false
  }

];
