import { Outlet } from 'react-router-dom';
import Profile from './-components/profile'
import Deco from './-components/deco'

function Layout() {
  

  return (
    <>
      <div className="page-wrap">
        <Deco />
        <div className="contents-wrap">
          <Profile />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
