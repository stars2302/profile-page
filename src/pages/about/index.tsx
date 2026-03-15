import { Icon } from "@iconify/react";
import { data } from "@/pages/about/data";

function About() {
  return (
    <div className="about-cont">
      <section className="about-intro" aria-label="소개">
        <h2 className="about-title">
          <strong>
            안녕하세요, <br /> 웹 퍼블리셔 나서영입니다. <br />
          </strong>
        </h2>
        <p className="about-copy">
          디자이너의 의도를 정확히 이해하고 디자인 완성도를 충실히 구현하는 것을
          중요하게 생각하며,
          프론트엔드 개발자와 적극적으로 소통해 구현 방식과 구조를 함께
          고민합니다.
        </p>
        <p className="about-copy">
          특히 공통 컴포넌트 기반의 구조 설계를 선호하며, 유지보수성과 확장성을
          고려한 퍼블리싱을 지향합니다.
        </p>
        <p className="about-copy">
          레이아웃 영역에서는 Slot 패턴과 Compound Component 구조를 활용해
          HTML 마크업을 컴포넌트 내부로 캡슐화하고, 사용부에서는 선언적이고
          의미 중심적인 인터페이스만 노출되도록 설계하는 것을 지향합니다.
        </p>
      </section>

      <section className="skill-area">
        <h2 className="about-title">제가 다룰 수 있는 스킬은,</h2>
        {data.skills.map((skill) => (
          <div key={skill.name} className="skill">
            <Icon icon={skill.icon} />
            <span className={`skill-name ${skill.hidden ? "hidden" : ""}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </section>

      <section className="more-area">
        <h2 className="about-title">좀 더 알고 싶으시다면,</h2>
        <dl>
          {data.interview.map((item) => (
            <>
              <dt>
                {item.id}.{item.question}
              </dt>
              <dd>{item.answer}</dd>
            </>
          ))}
        </dl>
      </section>
    </div>
  );
}

export default About;
