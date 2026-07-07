import { useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [...Array(20)].map((_, index) => ({
  id: index,
  name: `Project ${String(index + 1).padStart(2, "0")}`,
  images: [
    `https://picsum.photos/id/${index + 10}/600/430`,
    `https://picsum.photos/id/${index + 30}/600/430`,
    `https://picsum.photos/id/${index + 50}/600/430`,
  ],
  description:
    "사용자가 필요한 정보를 빠르게 파악할 수 있도록 화면 구조와 인터랙션을 정리한 프로젝트입니다.",
  period: "2025.01 - 2025.03",
  role: "퍼블리싱 100%, 반응형 UI 구현, 인터랙션 설계",
  skills: ["React", "TypeScript", "SCSS", "Swiper"],
  insights: [
    "콘텐츠 우선순위에 맞춰 리스트와 상세 화면의 정보 구조를 분리했습니다.",
    "반복되는 UI는 컴포넌트 단위로 정리해 유지보수성을 높였습니다.",
    "모바일 환경에서 터치와 스크롤 흐름이 자연스럽도록 간격과 모션을 조정했습니다.",
  ],
  websiteUrl: "https://github.com/stars2302",
}));

function Project() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-cont">
      <ul className="project-list">
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <button type="button" onClick={() => setSelectedProject(project)}>
              <img src={project.images[0]} alt={`${project.name} 썸네일`} />
            </button>
          </li>
        ))}
      </ul>

      {selectedProject &&
        createPortal(
          <div className="project-popup" role="dialog" aria-modal="true" aria-labelledby="project-popup-title">
            <button type="button" className="popup-dim" aria-label="팝업 닫기" onClick={closePopup} />
            <div className="popup-panel">
              <div className="popup-title-area">
                <button type="button" className="popup-close" aria-label="닫기" onClick={closePopup}>
                  <Icon icon="mingcute:close-line" />
                </button>

                <h2 id="project-popup-title" className="popup-title">
                  {selectedProject.name}
                </h2>
              </div>

              <Swiper
                className="project-swiper"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={12}
                slidesPerView={1}
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={image}>
                    <img src={image} alt={`${selectedProject.name} 화면 ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <dl className="project-meta">
                <div>
                  <dt>설명</dt>
                  <dd>{selectedProject.description}</dd>
                </div>
                <div>
                  <dt>기간</dt>
                  <dd>{selectedProject.period}</dd>
                </div>
                <div>
                  <dt>역할</dt>
                  <dd>{selectedProject.role}</dd>
                </div>
              </dl>

              <div className="project-skills">
                <h3>사용기술</h3>
                <ul>
                  {selectedProject.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="project-insight">
                <h3>인사이트 & 작업과정</h3>
                <ul>
                  {selectedProject.insights.map((insight) => (
                    <li key={insight}>{insight}</li>
                  ))}
                </ul>
              </div>

              <a className="project-link" href={selectedProject.websiteUrl} target="_blank" rel="noopener noreferrer">
                웹사이트 이동하기
                <Icon icon="fa7-solid:external-link" />
              </a>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default Project;
