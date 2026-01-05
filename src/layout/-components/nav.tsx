import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Project", path: "/project" },
  { name: "More", path: "/more" },
  { name: "GitHub", path: "https://github.com/stars2302", external: true },
];

function Nav() {
  const location = useLocation();
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  // 현재 경로로 active index 찾기
  const getActiveIndexFromPath = (pathname: string) => {
    const index = navItems.findIndex((item) => item.path === pathname);
    return index !== -1 ? index : 0;
  };

  const updateBar = (index: number) => {
    const nav = navRef.current;
    if (!nav) return;

    const lis = nav.querySelectorAll("li");
    const activeLi = lis[index];

    if (activeLi) {
      const navLeft = nav.getBoundingClientRect().left;
      const liLeft = activeLi.getBoundingClientRect().left;
      const liWidth = activeLi.offsetWidth;

      setBarStyle({
        left: liLeft - navLeft,
        width: liWidth,
      });
    }
  };

  // 경로 변경 시 active index 업데이트
  useEffect(() => {
    const newIndex = getActiveIndexFromPath(location.pathname);
    setActiveIndex(newIndex);
    // updateBar는 별도 effect에서 처리
  }, [location.pathname]);

  // activeIndex 변경 시 bar 업데이트
  useEffect(() => {
    updateBar(activeIndex);
  }, [activeIndex]); // activeIndex를 의존성에 추가

  // 윈도우 리사이즈 시 bar 위치 업데이트
  useEffect(() => {
    const handleResize = () => {
      updateBar(activeIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <nav className="profile-nav">
      <ul ref={navRef}>
        {navItems.map((item, index) => (
          <li key={item.name} className={activeIndex === index ? "active" : ""}>
            {item.external ? (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.name}
                <Icon className="icon" icon="fa7-solid:external-link" />
              </a>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <div
        className="bar"
        style={{
          left: `${barStyle.left}px`,
          width: `${barStyle.width}px`,
        }}
      />
    </nav>
  );
}

export default Nav;
