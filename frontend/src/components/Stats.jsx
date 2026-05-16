import Reveal from "./Reveal";

export default function Stats() {
  const stats = [
    ["3.2×", "More Leads"],
    ["87%", "Email Boost"],
    ["60%", "Less Work"],
    ["5000+", "Users"],
  ];

  return (
    <Reveal>
      <div className="sf-stats">
        {stats.map(([num, label]) => (
          <div className="sf-stat" key={label}>
            <div className="sf-stat-num">{num}</div>
            <div className="sf-stat-label">{label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}