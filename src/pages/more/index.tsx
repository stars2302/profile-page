import { Icon } from "@iconify/react";

function More() {
  return (
    <div className="more-cont">
      <ul>
        {[...Array(20)].map((_, index) => (
          <li className="more-item">
            <p className="more-name">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsa at amet repellat blanditiis similique quis. Rem,
              iusto consectetur dolorum ipsam officia enim repellat numquam
              voluptates saepe aperiam voluptatem tempore.
            </p>
            <button className="more-btn">
              <Icon className="icon" icon="mingcute:arrow-right-line" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default More;
