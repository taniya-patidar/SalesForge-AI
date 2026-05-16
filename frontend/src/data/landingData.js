export const FEATURES = [
  {
    icon: "⚡",
    title: "AI-Powered Conversations",
    desc: "Intelligent chatbots that engage prospects 24/7, qualify leads, and book meetings automatically."
  },
  {
    icon: "✉",
    title: "Automated Email Sequences",
    desc: "Personalized outreach at scale. AI crafts compelling messages that convert cold leads into customers."
  },
  {
    icon: "◎",
    title: "Smart Lead Scoring",
    desc: "Prioritize your best prospects with AI-analyzed behavior signals and engagement metrics."
  },
  {
    icon: "◈",
    title: "Real-Time Analytics",
    desc: "Track performance across all channels. Optimize campaigns with actionable insights."
  }
];

export const STEPS = [
  { num: "01", title: "Connect", desc: "Integrate with your CRM and tools in one click" },
  { num: "02", title: "Automate", desc: "Set up AI workflows and let SalesForge handle the rest" },
  { num: "03", title: "Grow", desc: "Watch your pipeline fill with qualified opportunities" }
];

export const PLANS = [
  {
    name: "Starter",
    price: "0",
    priceUnit: "/mo",
    features: [
      "1 AI chatbot",
      "500 leads/month",
      "Basic email automation",
      "Email support"
    ],
    btnClass: "outline",
    btnLabel: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "79",
    priceUnit: "/mo",
    features: [
      "Unlimited AI chatbots",
      "Unlimited leads",
      "Advanced email sequences",
      "CRM integration",
      "Priority support"
    ],
    btnClass: "filled",
    btnLabel: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceUnit: "",
    features: [
      "Everything in Pro",
      "Custom AI training",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise deployment"
    ],
    btnClass: "outline",
    btnLabel: "Contact Sales",
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    quote: "SalesForge doubled our demo bookings in just 3 months. The AI chatbot alone handles 80% of our initial conversations.",
    author: "Sarah Chen",
    role: "VP of Sales, TechFlow",
    initials: "SC"
  },
  {
    quote: "We cut our cold outreach time by 60%. The AI-written emails feel personal but scale across our entire pipeline.",
    author: "Marcus Johnson",
    role: "Growth Lead, ScaleUp Inc",
    initials: "MJ"
  },
  {
    quote: "Finally, a sales tool that actually works. Our team focuses on closing deals while SalesForge handles the rest.",
    author: "Emily Rodriguez",
    role: "CEO, GrowthLab",
    initials: "ER"
  }
];