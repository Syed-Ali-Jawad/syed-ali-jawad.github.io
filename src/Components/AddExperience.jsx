export default function AddExerience({
  logo,
  company,
  periodServed,
  positon,
  children,
  totalExperinces,
}) {
  if (totalExperinces % 2 === 0) {
    return (
      <div className="experience-div">
        <div className="company" style={{ justifyContent: "right" }}>
          <img src={"../src/assets/" + logo} />
          <h3>{company}</h3>
          <p>{periodServed}</p>
        </div>
        <div className="step">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
          <hr className="vertical-line" />
        </div>
        <div className="responsibilities" style={{ justifyContent: "left" }}>
          <h3>{positon}</h3>
          <p style={{ textAlign: "left" }}>{children}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="experience-div">
        <div className="responsibilities" style={{ justifyContent: "right" }}>
          <h3>{positon}</h3>
          <p style={{ textAlign: "right" }}>{children}</p>
        </div>
        <div className="step">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
          <hr className="vertical-line" />
        </div>

        <div className="company" style={{ justifyContent: "left" }}>
          <img src={"../src/assets/" + logo} />
          <h3>{company}</h3>
          <p>{periodServed}</p>
        </div>
      </div>
    );
  }
}
