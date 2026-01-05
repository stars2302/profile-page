function Project() {
  return (
    <div className="project-cont">
      <ul className="project-list">
        {[...Array(20)].map((_, index) => (
          <li className="project-item" key={index}>
            <img
              src={`https://picsum.photos/id/${index + 10}/300/300`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
