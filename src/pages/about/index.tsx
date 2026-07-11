import { Icon } from "@iconify/react";
import { aboutContents } from "@/data/aboutContents";
import { Fragment, type ReactNode } from "react";

type HighlightParagraph = {
  text: string;
  keywords: string[];
};

type AnswerParagraph = string | HighlightParagraph;

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const renderParagraph = (paragraph: AnswerParagraph): ReactNode => {
  if (typeof paragraph === "string") {
    return paragraph;
  }

  const pattern = paragraph.keywords.map(escapeRegExp).join("|");
  const parts = paragraph.text.split(new RegExp(`(${pattern})`, "g"));

  return parts.map((part, index) => {
    if (paragraph.keywords.includes(part)) {
      return <b key={`${part}-${index}`}>{part}</b>;
    }

    return part;
  });
};

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
          “작업하면서 보이는 반복은 그냥 두지 않습니다.”
        </p>

        <p className="about-copy">
          디자인을 받으면 먼저 <b>레이아웃과 공통 요소</b>를 살펴보며 <b>전체 구조</b>를 정리합니다. <br />
          구현 과정에서 반복되는 패턴은 <b>컴포넌트</b>와 <b>공통 스타일</b>로 묶어, 이후의 <b>수정과 확장</b>이 편해지도록 작업합니다.
        </p>

        <p className="about-copy">
          다만 좋은 결과물은 <b>구조만 잘 잡는다고 완성된다고 생각하지 않습니다.</b> <br />
          다양한 화면 크기와 <b>디바이스 환경</b>에서 실제로 어떻게 보이고 동작하는지 확인하고, 사용자가 불편함을 느낄 수 있는 지점을 함께 고민합니다.
        </p>

        <p className="about-copy">
          또한 디자이너와 개발자 사이에서 <b>서로의 생각이 다르게 이해되지 않도록</b>, 필요한 내용을 정리하고 질문하며 <b>기준을 맞춰가는 과정</b>을 중요하게 생각합니다. <br />
          UI를 구현하는 데서 끝나지 않고, <b>더 일관된 경험</b>과 <b>더 편한 협업</b>을 만드는 웹 퍼블리셔를 지향합니다.
        </p>
      </section>

      <section className="skill-area">
        <h2 className="about-title">제가 다룰 수 있는 스킬은,</h2>
        {aboutContents.skills.map((skill) => (
          <div key={skill.name} className="skill">
            <Icon icon={skill.icon} />
            {/* <span className={`skill-name ${skill.hidden ? "hidden" : ""}`}>
              {skill.name}
            </span> */}
          </div>
        ))}
      </section>

      <section className="more-area">
        <h2 className="about-title">좀 더 알고 싶으시다면,</h2>
        <dl>
          {aboutContents.interview.map((item) => (
            <Fragment key={item.id}>
              <dt>
                {item.id}. {item.question}
              </dt>
              <dd>
                {item.answer.map((paragraph, index) => (
                  <p key={`${item.id}-${index}`}>{renderParagraph(paragraph)}</p>
                ))}
              </dd>
            </Fragment>
          ))}
        </dl>
      </section>
    </div>
  );
}

export default About;
