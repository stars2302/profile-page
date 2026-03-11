import Nav from "./nav";
import profileImg from "@/assets/images/person.svg"; // 프로필 이미지

function Profile() {
  return (
    <>
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <defs>
          <clipPath id="profile-curve-left" clipPathUnits="objectBoundingBox">
            <path d="M1 0 L1 1 Q0 1 0 0 L1 0 L0 0 L0 1 L1 1 Z" />
          </clipPath>
          <clipPath id="profile-curve-right" clipPathUnits="objectBoundingBox">
            <path d="M0 0 L0 1 Q1 1 1 0 L0 0 L1 0 L1 1 L0 1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="profile-area">
        <div className="profile-img-wrap">
          <img src={profileImg} alt="" />
          {/* <object>
            <embed src={profileImg} />
          </object> */}
        </div>
        <div className="bg-top-area">
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>
        {/* 프로필 정보 */}
        <div className="profile-contents">
          <div className="profile-info">
            <h2 className="profile-name">Na Seo Young</h2>
            <a href="mailto:stars2302@naver.com" className="profile-email">
              stars2302@naver.com
            </a>
          </div>

          <Nav />
        </div>
      </div>
    </>
  );
}

export default Profile;
