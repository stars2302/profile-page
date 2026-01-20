import { Icon } from "@iconify/react";
import { data } from "@/pages/about/data";

function About() {
  return (
    <div className="about-cont">
      <h2 className="about-title">
        안녕하세요, <br /> 웹 퍼블리셔 나서영입니다. <br />
        <p>
          디자이너의 의도를 정확히 이해하고 디자인 완성도를 충실히 구현하는 것을
          중요하게 생각하며,
        </p>
        <p>
          프론트엔드 개발자와 적극적으로 소통해 구현 방식과 구조를 함께
          고민합니다.
        </p>
        <p>
          특히 공통 컴포넌트 기반의 구조 설계를 선호하며, 유지보수성과 확장성을
          고려한 퍼블리싱을 지향합니다.
        </p>
      </h2>

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
