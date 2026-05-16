import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Stats() {
  const ref = useScrollAnimation();

  const stats = [
    { num: "3.2", suffix: "×", label: "More Leads" },
    { num: "87", suffix: "%", label: "Email Open Rate" },
    { num: "60", suffix: "%", label: "Less Manual Work" },
    { num: "5,000", suffix: "+", label: "Businesses" },
  ];

  return (
    <div className="sf-stats sf-animate" ref={ref}>
      {stats.map((stat) => (
        <div className="sf-stat" key={stat.label}>
          <div className="sf-stat-num">
            {stat.num}<span>{stat.suffix}</span>
          </div>
          <div className="sf-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}