export default function AddExerience({
  logo,
  company,
  periodServed,
  positon,
  description,
  id,
}) {
  if (window.innerWidth > 768) {
    if (id % 2 !== 0) {
      return (
        <div className="experience-div">
          <div className="company" style={{ textAlign: "right" }}>
            <img src={logo} />
            <h3>{company}</h3>
            <p>{periodServed}</p>
          </div>
          <div className="step">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <hr className="vertical-line" />
          </div>
          <div className="responsibilities" style={{ textAlign: "left" }}>
            <h3 style={{ textAlign: "start" }}>{positon}</h3>
            <p style={{ textAlign: "left" }}>{description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="experience-div">
          <div className="responsibilities" style={{ textAlign: "right" }}>
            <h3 style={{ textAlign: "end" }}>{positon}</h3>
            <p style={{ textAlign: "right" }}>{description}</p>
          </div>
          <div className="step">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <hr className="vertical-line" />
          </div>

          <div className="company" style={{ textAlign: "left" }}>
            <img src={logo} />
            <h3>{company}</h3>
            <p>{periodServed}</p>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="experience-div">
        <div className="step">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
          <hr className="vertical-line" />
        </div>
        <div className="company" style={{ textAlign: "left" }}>
          <img src={logo} />
          <h3>{company}</h3>
          <p>{periodServed}</p>

          <h3>{positon}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
