

import Nav from './nav';

function Profile() {

  return (
    <>
      <div className="profile-area">
        <div className="profile-img-wrap"></div>
        <div className="bg-top-area">
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>
        {/* 프로필 정보 */}
        <div className="profile-contents">
          <div className="profile-info">
            <h2 className="profile-name">Na Seo Young</h2>
            <a href="mailto:stars2302@naver.com" className="profile-email">stars2302@naver.com</a>
          </div>
          
          <Nav />
        </div>
      </div>
    </>
  )
}

export default Profile
