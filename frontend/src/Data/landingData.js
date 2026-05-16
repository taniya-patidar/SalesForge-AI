export const FEATURES = [
  { icon: "🤖", title: "AI Chatbot", desc: "Automate conversations" },
  { icon: "🎯", title: "Lead Generation", desc: "Find quality leads" },
  { icon: "✉️", title: "Email Assistant", desc: "Better cold emails" },
];

export const STEPS = [
  { num: "01", title: "Connect", desc: "Connect tools" },
  { num: "02", title: "Automate", desc: "AI works" },
  { num: "03", title: "Grow", desc: "Increase revenue" },
];

export const PLANS = [
  {
    name: "Starter",
    price: "0",
    features: ["Basic AI", "Limited leads"],
    btnClass: "outline",
    btnLabel: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "2999",
    features: ["Unlimited AI", "CRM integration"],
    btnClass: "filled",
    btnLabel: "Buy Pro",
    popular: true,
  },
];