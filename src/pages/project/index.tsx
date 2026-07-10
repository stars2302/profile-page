import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { moreContents } from "@/data/moreContents";
import { projectContents } from "@/data/projectContents";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProjectImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  frameClassName?: string;
};

function ProjectImage({ alt, className, frameClassName = "", onError, onLoad, src, ...imageProps }: ProjectImageProps) {
  const [imageState, setImageState] = useState<{
    src: ProjectImageProps["src"];
    status: "loaded" | "error";
  } | null>(null);
  const imageStatus = imageState && imageState.src === src ? imageState.status : "loading";

  return (
    <span className={`project-image-frame ${frameClassName} is-${imageStatus}`}>
      <span className="project-image-loader" aria-hidden="true" />
      <img
        {...imageProps}
        src={src}
        alt={alt}
        className={className}
        onLoad={(event) => {
          setImageState({ src, status: "loaded" });
          onLoad?.(event);
        }}
        onError={(event) => {
          setImageState({ src, status: "error" });
          onError?.(event);
        }}
      />
    </span>
  );
}

function Project() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectContents)[number] | null>(null);
  const [likedProjects, setLikedProjects] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(projectContents.map(({ id, heart }) => [id, heart])),
  );

  const selectedMoreContents = selectedProject
    ? moreContents.filter(
        (content) =>
          content.type === "project" &&
          content.projectId === selectedProject.id,
      )
    : [];

  const closePopup = () => {
    setSelectedProject(null);
  };

  const toggleProjectHeart = (projectId: number) => {
    setLikedProjects((prevLikedProjects) => ({
      ...prevLikedProjects,
      [projectId]: !prevLikedProjects[projectId],
    }));
  };

  useEffect(() => {
    if (!selectedProject) return;

    const pageWrap = document.querySelector<HTMLElement>(".page-wrap");
    const previousOverflow = pageWrap?.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    if (pageWrap) pageWrap.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (pageWrap) pageWrap.style.overflow = previousOverflow ?? "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="project-cont">
      {/* 프로젝트 리스트 */}
      <ul className="project-list">
        {projectContents.map((project) => {
          const isLiked = likedProjects[project.id] ?? project.heart;

          return (
            <li className="project-item" key={project.id}>
              <button
                type="button"
                className="project-thumb"
                onClick={() => setSelectedProject(project)}
              >
                <ProjectImage
                  src={project.images[0]}
                  alt={`${project.name} 썸네일`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <button
                type="button"
                className={`project-like${isLiked ? " is-active" : ""}`}
                aria-label={`${project.name} 좋아요`}
                aria-pressed={isLiked}
                onClick={() => toggleProjectHeart(project.id)}
              >
                <Icon icon={isLiked ? "mdi:heart" : "mdi:heart-outline"} />
              </button>
            </li>
          );
        })}
      </ul>

      {/* 프로젝트 팝업 */}
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

              <div className="popup-body">
                <div className="project-swiper-area">
                <Swiper
                  className="project-swiper"
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".project-swiper-prev",
                    nextEl: ".project-swiper-next",
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={12}
                  slidesPerView={1}
                >
                  {selectedProject.images.map((image, index) => (
                    <SwiperSlide key={image}>
                      <ProjectImage
                        src={image}
                        alt={`${selectedProject.name} 화면 ${index + 1}`}
                        frameClassName="project-slide-image"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  type="button"
                  className="project-swiper-button project-swiper-prev"
                  aria-label="이전 이미지"
                >
                  <Icon icon="icon-park-outline:left" />
                </button>
                <button
                  type="button"
                  className="project-swiper-button project-swiper-next"
                  aria-label="다음 이미지"
                >
                  <Icon icon="icon-park-outline:right" />
                </button>
                </div>

                <div className="project-summary">
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

                  <a className="project-link" href={selectedProject.websiteUrl} target="_blank" rel="noopener noreferrer">
                    웹 페이지로 이동하기
                  </a>
                </div>

                {selectedMoreContents.length > 0 && (
                  <div className="project-insight">
                  <h3>인사이트 & 작업과정</h3>
                  <ul className="text-list">
                    {selectedMoreContents.map(({ id, title, url }) => (
                      <li key={id}>
                        <a
                          className="text-list-item"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="text-list-name text-list-name--ellipsis">
                            {title}
                          </p>
                          <span className="text-list-action" aria-hidden="true">
                            <Icon
                              className="icon"
                              icon="mingcute:arrow-right-line"
                            />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default Project;
