import { Icon } from "@iconify/react";
import { moreContents } from "@/data/moreContents";

function More() {
  return (
    <div className="more-cont">
      <ul className="text-list">
        {moreContents.map(({ id, projectName, title, type, url }) => {
          const titlePrefix = type === "profile" ? "프로필 페이지" : projectName ?? "프로젝트";

          return (
            <li key={id}>
              <a
                className="text-list-item"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-list-name text-list-name--ellipsis">
                  [{titlePrefix}] {title}
                </p>
                <span className="text-list-action" aria-hidden="true">
                  <Icon className="icon" icon="mingcute:arrow-right-line" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default More;
