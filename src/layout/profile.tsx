

function Profile() {
  

  return (
    <>
      <div className="profile-img-wrap"></div>
      <div className="profile-area">
        <div className="bg-top-area">
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>
        {/* 프로필 정보 */}
        <div className="profile-info">
          <h2 className="profile-name">Na Seo Young</h2>
          <a href="mailto:stars2302@naver.com" className="profile-email">stars2302@naver.com</a>
        </div>
        {/* navigation */}
        <nav className="profile-nav">
          <ul>
            <li>About</li>
            <li>Project</li>
            <li>More</li>
            <li>
              <a href="https://github.com/stars2302" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Profile
