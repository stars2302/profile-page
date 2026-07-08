import { useEffect, useState } from "react";

const INTRO_DURATION = 3500;
const EXIT_DURATION = 1000;

function Intro() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let leaveTimer = 0;
    let hideTimer = 0;

    if (reduceMotion) {
      const completeFrame = requestAnimationFrame(() => setProgress(100));
      leaveTimer = window.setTimeout(() => setIsLeaving(true), 250);
      hideTimer = window.setTimeout(() => setIsVisible(false), 500);
      return () => {
        cancelAnimationFrame(completeFrame);
        window.clearTimeout(leaveTimer);
        window.clearTimeout(hideTimer);
      };
    }

    const startedAt = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const ratio = Math.min(elapsed / INTRO_DURATION, 1);
      // 빠르게 시작해 마지막 숫자에서 잠시 숨을 고르는 easing
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.min(100, Math.floor(eased * 101)));

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        leaveTimer = window.setTimeout(() => setIsLeaving(true), 700);
        hideTimer = window.setTimeout(() => setIsVisible(false), 700 + EXIT_DURATION);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  const isComplete = progress === 100;

  return (
    <div
      className={`intro${isLeaving ? " is-leaving" : ""}${isComplete ? " is-complete" : ""}`}
      role="status"
      aria-label={isComplete ? "Welcome to portfolio" : `Loading ${progress}%`}
    >
      <div className="intro-glow" aria-hidden="true" />
      <div className="intro-topline">
        <span>NSY / Portfolio</span>
        <span>Seoul · KR</span>
      </div>

      <div className="intro-center" aria-hidden="true">
        <p className="intro-loading">{isComplete ? "Ready" : "Loading..."}</p>
        <p className="intro-percent">
          <span>{String(progress).padStart(3, "0")}</span>
          <small>%</small>
        </p>
        <div className="intro-progress">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="intro-message">
          <p>Welcome!</p>
        </div>
      </div>

      <p className="intro-index">© 2026 — 01</p>
    </div>
  );
}

export default Intro;
