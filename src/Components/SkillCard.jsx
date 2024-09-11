export default function SkillCard({ logo, skill }) {
  return (
    <div className="skill-card">
      <div className="skill-card-logo">
        <div>{logo}</div>
      </div>
      <p>{skill}</p>
    </div>
  );
}
