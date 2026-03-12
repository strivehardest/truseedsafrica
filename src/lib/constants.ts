// Icon keys are now strings, not components
export const COLORS = {
  green: "#1F6B1F",
  greenLight: "#277A27",
  greenDark: "#174F17",
  gold: "#D4A017",
  goldLight: "#E8B832",
  charcoal: "#36454F",
  charcoalLight: "#4A5F6A",
  white: "#FFFFFF",
  offWhite: "#F5F2EC",
  purple: "#660099",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pillars", href: "/pillars" },
  { label: "Services", href: "/services" },
  { label: "Commodities", href: "/commodities" },
  { label: "Contact", href: "/contact" },
] as const;

export const PILLARS = [
  {
    id: 1,
    num: "01",
    title: "Primary Production & Cultivation",
    desc: "Large-scale cultivation of high-yield, disease-resistant Cassava, Oil Palm, Coconut, and Cocoa. Mechanized land preparation, precision nursery management, elite seedlings, and outgrower support.",
    description: "Large-scale cultivation of high-yield, disease-resistant Cassava, Oil Palm, Coconut, and Cocoa. Mechanized land preparation, precision nursery management, elite seedlings, and outgrower support.",
    icon: "leaf",
  },
  {
    id: 2,
    num: "02",
    title: "Industrial Processing & Value Addition",
    desc: "Harnessing the multi-million uses of Africa's primary commodities. Industrial starch, bio-ethanol, CPO, PKO, oleochemicals, extra virgin coconut oil, and cocoa pod conversion into organic fertilizers.",
    description: "Harnessing the multi-million uses of Africa's primary commodities. Industrial starch, bio-ethanol, CPO, PKO, oleochemicals, extra virgin coconut oil, and cocoa pod conversion into organic fertilizers.",
    icon: "gear",
  },
  {
    id: 3,
    num: "03",
    title: "Mechanization & Technical Support",
    desc: "Facilitating Ag-Tech adoption — automated palm oil mills to specialized cocoa harvesting tools. Equipment procurement, leasing, and intensive technical training for high-efficiency operations.",
    description: "Facilitating Ag-Tech adoption — automated palm oil mills to specialized cocoa harvesting tools. Equipment procurement, leasing, and intensive technical training for high-efficiency operations.",
    icon: "wrench",
  },
  {
    id: 4,
    num: "04",
    title: "Logistics & Global Commodity Trade",
    desc: "Robust farm-to-shelf logistics network. Standardized post-harvest handling, professional packaging, and international trade facilitation ensuring premium prices on the global stage.",
    description: "Robust farm-to-shelf logistics network. Standardized post-harvest handling, professional packaging, and international trade facilitation ensuring premium prices on the global stage.",
    icon: "globe",
  },
  {
    id: 5,
    num: "05",
    title: "Strategic Agribusiness Consulting",
    desc: "Architectural blueprint for emerging agribusinesses. Value-chain mapping, market entry strategies for coconut derivatives, and operational scaling for integrated agricultural enterprises.",
    description: "Architectural blueprint for emerging agribusinesses. Value-chain mapping, market entry strategies for coconut derivatives, and operational scaling for integrated agricultural enterprises.",
    icon: "chart",
  },
  {
    id: 6,
    num: "06",
    title: "Policy Advocacy & Empirical Research",
    desc: "High-level advocacy influencing pro-agricultural frameworks under AfCFTA. Research driving import substitution — local palm oil, cassava starch, and cocoa-pod potash in pharmaceutical and manufacturing sectors.",
    description: "High-level advocacy influencing pro-agricultural frameworks under AfCFTA. Research driving import substitution — local palm oil, cassava starch, and cocoa-pod potash in pharmaceutical and manufacturing sectors.",
    icon: "bank",
  },
] as const;

export const SERVICES = [
  {
    title: "Strategic Value-Chain Architecture & Technical Due Diligence",
    items: [
      "Asset Auditing & biological asset verification",
      "Investment Readiness & risk-profile mapping",
      "Project Feasibility blueprints for greenfield startups",
    ],
  },
  {
    title: "Mechanization-as-a-Service (MaaS) & Fleet Management",
    items: [
      "Fleet management for MDAs and private estates",
      "Procurement, leasing & operator training",
      "Integrated mechanization workflows to maximize ROI",
    ],
  },
  {
    title: "Turnkey Industrial Processing & Circular Bio-Economy",
    items: [
      "Pharmaceutical-grade starch factories & bio-ethanol plants",
      "Zero-Waste conversion of cocoa pods & palm husks",
      "Engineering circular systems for organic fertilizers & livestock feed",
    ],
  },
  {
    title: "Nucleus-Outgrower Management & Digital Supply Chain",
    items: [
      "Designing and overseeing nucleus-outgrower models",
      "Digital tracking for global industrial standards compliance",
      "Bridging smallholder production to industrial demand",
    ],
  },
  {
    title: "Global Commodity Brokerage & AfCFTA Trade Facilitation",
    items: [
      "Duty-free commodity exports under AfCFTA framework",
      "Standardized post-harvest handling & professional packaging",
      "Farm-to-shelf logistics & strategic brokerage",
    ],
  },
  {
    title: "Empirical Market Intelligence & ESG Strategy",
    items: [
      "Quarterly commodity price trends & yield forecasts",
      "ESG frameworks for international trade & donor funding",
      "Policy influence & pro-agricultural trade frameworks",
    ],
  },
] as const;

export const COMMODITIES = [
  {
    name: "Cassava",
    desc: "High-Quality Flour, Industrial Starch, Bio-Ethanol & Home Staples",
    color: COLORS.gold,
    icon: "cassava",
    detail:
      "Africa's most versatile crop. TSA transforms cassava into pharmaceutical-grade starch, industrial binders, high-quality flour, and bio-ethanol — driving import substitution across the continent.",
  },
  {
    name: "Oil Palm",
    desc: "Crude Palm Oil (CPO), Palm Kernel Oil (PKO) & Oleochemicals",
    color: COLORS.green,
    icon: "oilPalm",
    detail:
      "From crude extraction to refined oleochemicals for soap and cosmetics. TSA operates full-spectrum palm value chains from estate management to specialized industrial output.",
  },
  {
    name: "Coconut",
    desc: "Extra Virgin Oil, Activated Carbon & Coco-Peat",
    color: COLORS.charcoal,
    icon: "coconut",
    detail:
      "Every part of the coconut is monetised. Extra virgin oil, activated carbon from husks, and coco-peat for sustainable horticulture — a true zero-waste commodity.",
  },
  {
    name: "Cocoa Pods",
    desc: "Potash for Soap Production & Organic Fertilizer",
    color: COLORS.greenDark,
    icon: "cocoaPod",
    detail:
      "Beyond the bean. TSA innovates in cocoa pod conversion — organic fertilizers, potash for soap, and high-nutrient livestock feed — anchoring a circular bio-economy.",
  },
] as const;

export const CONTACT_INFO = [
  ["Founder / CEO", "Ransford Aleke"],
  ["Co-Founder", "Nana Ama Hawkins"],
  ["Address", "#4 Terminalia Street, Dansoman, Accra, Ghana"],
  ["P.O. Box", "AN 16695, Accra North"],
  ["Phone", "+233 244 434 333"],
  ["Email", "info@truseedsafrica.com"],
  ["Website", "www.truseedsafrica.com"],
  ["Social", "@TruSeedsAfrica"],
  ["Partners", "Chamber of Agribusiness Ghana (CAG)"],
] as const;