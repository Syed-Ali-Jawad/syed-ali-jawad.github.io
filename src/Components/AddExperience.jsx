export default function AddExerience({
  logo,
  company,
  periodServed,
  positon,
  description,
  id,
}) {
  return (
    <div className={`experience-div ${id % 2 !== 0 ? "reversed" : ""}`}>
      <div className="responsibilities" style={{}}>
        <h3>{positon}</h3>
        <p>{description}</p>
      </div>
      <div className="step">
        <div className="outer-circle">
          <div className="inner-circle"></div>
        </div>
        <hr className="vertical-line" />
      </div>

      <div className="company">
        <img src={logo} />
        <h3>{company}</h3>
        <p>{periodServed}</p>
      </div>
    </div>
  );
}
