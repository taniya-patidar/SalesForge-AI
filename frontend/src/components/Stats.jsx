export default function Stats() {
  const stats = [
    { num: "3.2×", label: "More Leads", highlight: true },
    { num: "87%", label: "Email Open Rate", highlight: true },
    { num: "60%", label: "Less Manual Work", highlight: false },
    { num: "5,000+", label: "Businesses", highlight: false },
  ];

  return (
    <div className="sf-stats">
      {stats.map((stat) => (
        <div className="sf-stat" key={stat.label}>
          <div className="sf-stat-num">
            {stat.num.split('×')[0]}<span>×</span>
          </div>
          <div className="sf-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}