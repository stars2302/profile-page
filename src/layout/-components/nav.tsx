import { type MouseEvent, type RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import profileImg from "@/assets/images/person.svg"; // 프로필 이미지

const navItems = [
  { name: "About", path: "/about" },
  { name: "Project", path: "/project" },
  { name: "More", path: "/more" },
  { name: "GitHub", path: "https://github.com/stars2302", external: true },
];

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const profileNavRef = useRef<HTMLElement>(null);
  const fixedNavRef = useRef<HTMLElement>(null);
  const originalNavListRef = useRef<HTMLUListElement>(null);
  const fixedNavListRef = useRef<HTMLUListElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);
  const navOffsetTopRef = useRef(0);
  const scrollCheckFrameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [showFixedProfile, setShowFixedProfile] = useState(false);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  // 현재 경로에 해당하는 활성 메뉴 순서 찾기
  const getActiveIndexFromPath = (pathname: string) => {
    const index = navItems.findIndex((item) => item.path === pathname);
    return index !== -1 ? index : 0;
  };

  const getActiveNavList = () => {
    return isFixed ? fixedNavListRef.current : originalNavListRef.current;
  };

  const getActiveNav = () => {
    return isFixed ? fixedNavRef.current : profileNavRef.current;
  };

  const updateBar = (index: number) => {
    const nav = getActiveNavList();
    const profileNav = getActiveNav();
    if (!nav || !profileNav) return;

    const lis = nav.querySelectorAll("li");
    const activeLi = lis[index];

    if (activeLi) {
      const navLeft = profileNav.getBoundingClientRect().left;
      const liLeft = activeLi.getBoundingClientRect().left;
      const liWidth = activeLi.offsetWidth;

      setBarStyle({
        left: liLeft - navLeft,
        width: liWidth,
      });
    }
  };

  const syncBar = (index: number) => {
    requestAnimationFrame(() => {
      updateBar(index);
    });
  };

  const handleMenuClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!isFixed) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    event.preventDefault();

    if (scrollCheckFrameRef.current !== null) {
      cancelAnimationFrame(scrollCheckFrameRef.current);
    }

    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const navigateAtTop = () => {
      if (scrollContainer.scrollTop <= 24) {
        scrollContainer.scrollTo({ top: 0 });
        scrollCheckFrameRef.current = null;
        navigate(path);
        return;
      }

      scrollCheckFrameRef.current = requestAnimationFrame(navigateAtTop);
    };

    scrollCheckFrameRef.current = requestAnimationFrame(navigateAtTop);
  };

  // 경로가 변경되면 활성 메뉴 순서 업데이트
  useEffect(() => {
    const newIndex = getActiveIndexFromPath(location.pathname);
    setActiveIndex(newIndex);

  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (scrollCheckFrameRef.current !== null) {
        cancelAnimationFrame(scrollCheckFrameRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    syncBar(activeIndex);
  }, [activeIndex, location.pathname, isFixed, showFixedProfile]);

  useEffect(() => {
    if (!isFixed) {
      setShowFixedProfile(false);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setShowFixedProfile(true);
      syncBar(activeIndex);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [activeIndex, isFixed]);

  useLayoutEffect(() => {
    const profileNav = profileNavRef.current;
    const scrollContainer = profileNav?.closest(".page-wrap");
    if (!profileNav || !(scrollContainer instanceof HTMLElement)) return;

    scrollContainerRef.current = scrollContainer;

    const updateNavOffsetTop = () => {
      const navRect = profileNav.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      navOffsetTopRef.current = scrollContainer.scrollTop + navRect.top - containerRect.top;
    };

    const updateFixedState = () => {
      setIsFixed(scrollContainer.scrollTop >= navOffsetTopRef.current);
    };

    const syncFixedNav = () => {
      updateNavOffsetTop();
      updateFixedState();
    };

    syncFixedNav();

    scrollContainer.addEventListener("scroll", updateFixedState, { passive: true });
    window.addEventListener("resize", syncFixedNav);

    return () => {
      scrollContainer.removeEventListener("scroll", updateFixedState);
      window.removeEventListener("resize", syncFixedNav);
    };
  }, []);

  const renderNavContents = (navListRef: RefObject<HTMLUListElement | null>) => (
    <>
      <div className="nav-profile">
        <div className="profile-img-wrap">
          <img src={profileImg} alt="" />
        </div>
        <h2 className="profile-name">Na Seo Young</h2>
      </div>
      <ul ref={navListRef}>
        {navItems.map((item, index) => (
          <li key={item.name} className={activeIndex === index ? "active" : ""}>
            {item.external ? (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                <span className="nav-label">{item.name}</span>
                <Icon className="icon" icon="fa7-solid:external-link" />
              </a>
            ) : (
              <Link to={item.path} onClick={(event) => handleMenuClick(event, item.path)}>
                <span className="nav-label">{item.name}</span>
              </Link>
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
    </>
  );

  const fixedNav = isFixed
    ? createPortal(
        <nav
          ref={fixedNavRef}
          className={`profile-nav is-fixed${showFixedProfile ? " is-profile-visible" : ""}`}
        >
          {renderNavContents(fixedNavListRef)}
        </nav>,
        document.body
      )
    : null;

  useEffect(() => {
    const handleResize = () => {
      syncBar(activeIndex);
    };

    const nav = getActiveNavList();
    const resizeObserver = nav ? new ResizeObserver(() => syncBar(activeIndex)) : null;

    if (nav && resizeObserver) {
      resizeObserver.observe(nav);
    }

    if ("fonts" in document) {
      document.fonts.ready.then(() => {
        syncBar(activeIndex);
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [activeIndex, isFixed]);

  return (
    <>
      <nav ref={profileNavRef} className={`profile-nav${isFixed ? " is-placeholder" : ""}`}>
        {renderNavContents(originalNavListRef)}
      </nav>
      {fixedNav}
    </>
  );
}

export default Nav;
