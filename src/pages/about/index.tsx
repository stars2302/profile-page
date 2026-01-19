import { Icon } from "@iconify/react";

function About() {
  return (
    <div className="about-cont">
      <h2 className="about-title">
        <strong>안녕하세요, 웹 퍼블리셔 나서영입니다.</strong> <br />
        디자이너의 의도를 정확히 이해하고 디자인 완성도를 충실히 구현하는 것을
        중요하게 생각하며, <br /> 프론트엔드 개발자와 적극적으로 소통해 구현
        방식과 구조를 함께 고민합니다. <br /> 특히 공통 컴포넌트 기반의 구조
        설계를 선호하며, 유지보수성과 확장성을 고려한 퍼블리싱을 지향합니다.
      </h2>

      <section className="skill-area">
        <h2 className="about-title">제가 다룰 수 있는 스킬은,</h2>
        <div className="skill">
          <Icon icon="logos:html-5" />
          <span className="skill-name hidden">HTML</span>
        </div>
        <div className="skill">
          <Icon icon="logos:css-3" />
          <span className="skill-name hidden">CSS</span>
        </div>
        <div className="skill">
          <Icon icon="vscode-icons:file-type-scss2" />
          <span className="skill-name">SCSS</span>
        </div>
        <div className="skill">
          <Icon icon="vscode-icons:file-type-vue" />
          <span className="skill-name">VUE</span>
        </div>
        <div className="skill">
          <Icon icon="material-icon-theme:react-ts" />
          <span className="skill-name">REACT</span>
        </div>
        <div className="skill">
          <Icon icon="devicon:jquery-wordmark" />
          <span className="skill-name hidden">JQUERY</span>
        </div>
        <div className="skill">
          <Icon icon="material-icon-theme:javascript" />
          <span className="skill-name hidden">JAVASCRIPT</span>
        </div>
        <div className="skill">
          <Icon icon="logos:ant-design" />
          <span className="skill-name">Ant Design</span>
        </div>
      </section>

      <section className="more-area">
        <h2 className="about-title">좀 더 알고 싶으시다면,</h2>
        <dl>
          <dt>Q1. 어떤 웹 퍼블리셔를 지향하시나요?</dt>
          <dd>
            저는 프로젝트의 완성도를 높이는 퍼블리셔를 목표로 하고 있어요.
            디자이너의 의도를 정확히 파악해서 세심하게 구현하는 것을 중요하게
            생각하고, 프론트엔드 개발자와 적극적으로 소통하면서 서로의 작업을
            보완하여 프로젝트 전체의 완성도를 높이는 데 관심이 많습니다. 특히
            퍼블리셔와 프론트엔드의 경계가 명확하지 않은 만큼, "이 부분은
            반복문을 활용해서 구현해두면 개발하기 편할까요?" 같은 기술적인
            부분도 자연스럽게 의견을 나누고 함께 고민하며 최적의 방식을 찾아가는
            퍼블리셔가 되고 싶어요.
          </dd>
        </dl>
      </section>
    </div>
  );
}

export default About;
