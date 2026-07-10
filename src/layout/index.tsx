import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Profile from './-components/profile'
import Deco from './-components/deco'

function Layout() {
  useEffect(() => {
    let frameId: number | null = null;

    const setAppHeight = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
        document.documentElement.style.setProperty('--app-height', `${viewportHeight}px`);
      });
    };

    setAppHeight();

    window.addEventListener('resize', setAppHeight);
    window.visualViewport?.addEventListener('resize', setAppHeight);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener('resize', setAppHeight);
      window.visualViewport?.removeEventListener('resize', setAppHeight);
      document.documentElement.style.removeProperty('--app-height');
    };
  }, []);

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
