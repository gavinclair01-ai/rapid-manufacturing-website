export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  whatWeSource: string[];
  materials?: string;
  tolerances?: string;
  leadTimes?: string;
  applications?: string;
  category: 'CNC Machining' | 'Special Processes' | 'Forming & Casting' | 'Fabrication & Finishing' | 'Inspection & Additive';
  specs: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: "cnc-milling",
    name: "CNC Milling",
    shortDescription: "3 to 5-axis precision milling for complex geometries and tight tolerances.",
    description: "Rapid Manufacturing sources high-precision CNC milling from our audited global supplier network, managed from Australia. We match your job to the most capable supplier and manage the process end-to-end.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/CNC-Milling-1.png",
    whatWeSource: [
      "3-axis, 4-axis, and 5-axis CNC milling",
      "Complex geometries, pockets, contours, and tight-tolerance features",
      "One-off parts through to batch production",
      "Prototype milling with fast turnaround"
    ],
    materials: "Aluminium, steel (mild, stainless, tool steel), titanium, brass, copper, engineering plastics (Delrin, PEEK, Nylon)",
    tolerances: "General machining to ±0.05mm. Precision work to ±0.01mm and tighter.",
    leadTimes: "Typical 5–15 business days depending on complexity",
    category: "CNC Machining",
    specs: [
      { label: "Axes", value: "3 to 5-Axis" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Lead Time", value: "5–15 days" }
    ]
  },
  {
    slug: "cnc-turning",
    name: "CNC Turning",
    shortDescription: "2 to 5-axis precision turning with live tooling and sub-spindle operations.",
    description: "Rapid Manufacturing sources CNC turning through our audited global supplier network. From simple shafts to complex multi-axis turned components, we deliver precision and consistency managed from Australia.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/CNC-Turning-1.png",
    whatWeSource: [
      "2-axis through to full 5-axis turn-mill",
      "Live tooling and sub-spindle operations",
      "Precision bores, threads, tapers, and profiles",
      "Prototype and production quantities"
    ],
    materials: "Aluminium, mild steel, stainless steel, titanium, brass, copper, Inconel, engineering plastics",
    tolerances: "Standard to ±0.05mm. Precision turning to ±0.01mm.",
    leadTimes: "Typical 5–15 business days. Rush orders available.",
    category: "CNC Machining",
    specs: [
      { label: "Max Axes", value: "5-Axis Turn-Mill" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Lead Time", value: "5–15 days" }
    ]
  },
  {
    slug: "precision-grinding",
    name: "Precision Grinding",
    shortDescription: "Surface, cylindrical, and centreless grinding for ultra-tight tolerances.",
    description: "Rapid Manufacturing sources precision grinding through our audited global supplier network. When tolerances and surface finish demands exceed what milling or turning can achieve, grinding delivers.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Grinding-1.png",
    whatWeSource: [
      "Surface grinding (flat, stepped, and angular)",
      "Cylindrical grinding (OD and ID)",
      "Centreless grinding for high-volume shafts",
      "Jig grinding for tight-tolerance bores",
      "Profile and form grinding"
    ],
    materials: "Hardened steel, tool steel, stainless, carbide, ceramics, aluminium",
    tolerances: "Dimensional tolerances to ±0.002mm. Surface finish to Ra 0.2µm achievable.",
    leadTimes: "Typical 5–15 business days depending on scope",
    applications: "Precision shafts, bearing seats, gauges, tooling, mould components, aerospace and medical parts",
    category: "CNC Machining",
    specs: [
      { label: "Tolerance", value: "±0.002mm" },
      { label: "Surface Finish", value: "Ra 0.2µm" },
      { label: "Lead Time", value: "5–15 days" }
    ]
  },
  {
    slug: "5-axis-machining",
    name: "5-Axis Machining",
    shortDescription: "Simultaneous 5-axis contouring for complex aerospace and medical components.",
    description: "Rapid Manufacturing sources complex 5-axis machining through our audited global supplier network. Simultaneous 5-axis contouring enables undercuts, compound angles, and tight-tolerance aerospace and medical parts machined in a single setup.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/5-Axis.png",
    whatWeSource: [
      "Simultaneous 5-axis contouring and positioning",
      "Complex 3D geometry in a single setup",
      "Undercuts, compound angles, and freeform surfaces",
      "Aerospace, medical, and automotive components"
    ],
    materials: "Aluminium, titanium, stainless steel, Inconel, tool steel, engineering plastics",
    tolerances: "Precision work to ±0.01mm and tighter",
    leadTimes: "Typical 5–20 business days depending on complexity",
    category: "CNC Machining",
    specs: [
      { label: "Axes", value: "5-Axis Simultaneous" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Lead Time", value: "5–20 days" }
    ]
  },
  {
    slug: "edm",
    name: "EDM Machining",
    shortDescription: "Electrical Discharge Machining for hardened materials and complex cavities.",
    description: "Rapid Manufacturing sources EDM (Electrical Discharge Machining) through our audited global supplier network. Using shaped electrodes, EDM machines hardened materials with exceptional accuracy for dies, moulds, and aerospace components.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/EDM-1.png",
    whatWeSource: [
      "Sinker EDM for complex cavities and profiles",
      "Hardened material machining without heat affect",
      "Fine surface finishes on difficult geometries",
      "Die and mould components"
    ],
    materials: "All electrically conductive metals including hardened steel, titanium, carbide, exotic alloys",
    tolerances: "Typical ±0.005mm. Precision work to tighter tolerances available.",
    leadTimes: "Typical 5–15 business days",
    applications: "Injection mould cavities, die cast dies, aerospace components, medical device tooling",
    category: "Special Processes",
    specs: [
      { label: "Tolerance", value: "±0.005mm" },
      { label: "Materials", value: "Conductive Metals" },
      { label: "Lead Time", value: "5–15 days" }
    ]
  },
  {
    slug: "wire-edm",
    name: "Wire EDM",
    shortDescription: "Intricate 2D profiles and taper cuts with no cutting force on the workpiece.",
    description: "Rapid Manufacturing sources Wire EDM through our audited global supplier network. Using a travelling wire electrode, Wire EDM cuts intricate 2D profiles and taper cuts through conductive material with no cutting force, perfect for delicate or hardened components.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Wire-EDM.png",
    whatWeSource: [
      "Intricate 2D profile cutting",
      "Taper cuts and angled features",
      "No cutting force on delicate workpieces",
      "Hardened material cutting"
    ],
    materials: "All electrically conductive metals including hardened tool steel, titanium, carbide",
    tolerances: "Typical ±0.002mm for precision work",
    leadTimes: "Typical 5–15 business days",
    applications: "Punch dies, mould inserts, extrusion dies, medical devices, aerospace components",
    category: "Special Processes",
    specs: [
      { label: "Tolerance", value: "±0.002mm" },
      { label: "Materials", value: "Conductive Metals" },
      { label: "Lead Time", value: "5–15 days" }
    ]
  },
  {
    slug: "gear-and-spline-cutting",
    name: "Gear & Spline Cutting",
    shortDescription: "Gear hobbing, shaping, and profile grinding for power transmission components.",
    description: "Rapid Manufacturing sources gear and spline cutting through our audited global supplier network. From spur gears to complex helical and worm gears, plus precision splines for power transmission applications.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Gear-Spline-Cutting.png",
    whatWeSource: [
      "Gear hobbing for spur and helical gears",
      "Gear shaping for internal and special profiles",
      "Profile grinding for precision gears",
      "Spline cutting for shafts and couplings"
    ],
    materials: "Steel, stainless steel, brass, bronze, engineering plastics",
    tolerances: "DIN and AGMA standard tolerances available",
    leadTimes: "Typical 10–25 business days depending on complexity",
    applications: "Power transmission, automotive, industrial machinery, robotics, aerospace",
    category: "Special Processes",
    specs: [
      { label: "Types", value: "Spur / Helical / Bevel" },
      { label: "Standards", value: "DIN / AGMA" },
      { label: "Lead Time", value: "10–25 days" }
    ]
  },
  {
    slug: "die-casting",
    name: "Die Casting",
    shortDescription: "High-pressure aluminium and zinc die casting for high-volume production.",
    description: "Rapid Manufacturing sources high-pressure die casting of aluminium and zinc alloys through our audited global supplier network. Cost-effective net-shape parts for high-volume production runs.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Die-Casting-1.png",
    whatWeSource: [
      "High-pressure die casting for aluminium and zinc",
      "Die design and manufacture",
      "Machining, finishing, and surface treatments",
      "High-volume production runs"
    ],
    materials: "Aluminium alloys (ADC12, A380, etc.), zinc alloys (ZA-8, ZA-12, ZA-27)",
    leadTimes: "Typical 4–8 weeks including tooling. Production orders 2–4 weeks once tooled.",
    applications: "Automotive components, consumer electronics, industrial housings, hardware",
    category: "Forming & Casting",
    specs: [
      { label: "Materials", value: "Al / Zn Alloys" },
      { label: "Min Qty", value: "500 pieces" },
      { label: "Lead Time", value: "4–8 weeks" }
    ]
  },
  {
    slug: "aluminum-extrusion",
    name: "Aluminum Extrusion",
    shortDescription: "Standard and custom profiles from die design to finished components.",
    description: "Rapid Manufacturing sources aluminium extrusion — from standard profiles to custom tooled sections — through our audited global supplier network, managed end-to-end from die design to finished components.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Aluminum-Extrusion-1.png",
    whatWeSource: [
      "Standard and custom aluminium extrusion profiles",
      "Extrusion die design and manufacture",
      "Cut-to-length, drilling, tapping, and machining",
      "Anodising, powder coating, and surface finishing"
    ],
    materials: "6061, 6063, 6082, 7075, and custom alloy options. T5, T6, and other tempers available.",
    leadTimes: "Standard profiles: 2–4 weeks. Custom die extrusion: 4–8 weeks.",
    applications: "Structural frames, heat sinks, LED profiles, handrails, machine guards, enclosures, solar mounting systems",
    category: "Forming & Casting",
    specs: [
      { label: "Alloys", value: "6061 / 6063 / 7075" },
      { label: "Finish", value: "Anodise / Powder Coat" },
      { label: "Lead Time", value: "2–8 weeks" }
    ]
  },
  {
    slug: "injection-molding",
    name: "Injection Molding",
    shortDescription: "Thermoplastic injection molding for high-volume plastic parts production.",
    description: "Rapid Manufacturing sources thermoplastic injection moulding for high-volume plastic parts through our audited global supplier network. Mould design and manufacture included as part of our complete service.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/cmc-machine.png",
    whatWeSource: [
      "Thermoplastic injection moulding",
      "Mould design and manufacture",
      "Multi-cavity tooling for high volumes",
      "Insert moulding and overmoulding"
    ],
    materials: "ABS, PP, PC, Nylon, PEEK, POM, TPE, and custom compounds",
    leadTimes: "Typical 4–8 weeks including tooling. Production orders 2–4 weeks once tooled.",
    applications: "Consumer products, automotive components, medical devices, electronics housings, industrial parts",
    category: "Forming & Casting",
    specs: [
      { label: "Materials", value: "ABS / PC / Nylon / PEEK" },
      { label: "Process", value: "High Volume" },
      { label: "Lead Time", value: "4–8 weeks" }
    ]
  },
  {
    slug: "laser-cutting",
    name: "Laser Cutting",
    shortDescription: "Fibre and CO₂ laser cutting for precision sheet metal and flat profiles.",
    description: "Rapid Manufacturing sources fibre and CO₂ laser cutting through our audited global supplier network. Precision sheet metal and flat profile cutting with fast turnaround times.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Laser-Cutting-1.png",
    whatWeSource: [
      "Fibre laser cutting for metals",
      "CO₂ laser cutting for non-metals",
      "Nesting and material optimisation",
      "Fast turnaround for prototypes and production"
    ],
    materials: "Mild steel, stainless steel, aluminium, copper, brass, acrylic, plastics",
    tolerances: "Typical ±0.1mm depending on material and thickness",
    leadTimes: "Typical 3–10 business days",
    applications: "Enclosures, brackets, signage, gaskets, architectural panels, machine guards",
    category: "Fabrication & Finishing",
    specs: [
      { label: "Tolerance", value: "±0.1mm" },
      { label: "Thickness", value: "Up to 25mm" },
      { label: "Lead Time", value: "3–10 days" }
    ]
  },
  {
    slug: "sheet-metal-fabrication",
    name: "Sheet Metal Fabrication",
    shortDescription: "Laser cutting, CNC bending, welding, and powder coating for metal structures.",
    description: "Rapid Manufacturing sources complete sheet metal fabrication through our audited global supplier network. From laser cutting and CNC bending to welding and powder coating for enclosures, brackets, and structures.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Sheet-Metal.png",
    whatWeSource: [
      "Laser cutting and punch pressing",
      "CNC press brake bending",
      "MIG, TIG, and spot welding",
      "Powder coating and surface finishing"
    ],
    materials: "Mild steel, stainless steel, aluminium. Thickness 0.5–10mm.",
    leadTimes: "Typical 5–15 business days",
    applications: "Enclosures, brackets, chassis, panels, machine guards, cabinets",
    category: "Fabrication & Finishing",
    specs: [
      { label: "Thickness", value: "0.5–10mm" },
      { label: "Processes", value: "Cut / Bend / Weld" },
      { label: "Lead Time", value: "5–15 days" }
    ]
  },
  {
    slug: "cmm-inspection",
    name: "CMM Inspection",
    shortDescription: "Coordinate Measuring Machine inspection with full GD&T reporting.",
    description: "Rapid Manufacturing sources CMM (Coordinate Measuring Machine) inspection through our audited global supplier network. Full dimensional verification of manufactured parts with detailed reporting.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/CMM-Inspection.png",
    whatWeSource: [
      "3D coordinate measurement and verification",
      "Full GD&T reporting and analysis",
      "First Article Inspection (FAI)",
      "Batch statistical analysis and SPC"
    ],
    materials: "All materials suitable for CMM inspection",
    tolerances: "Accuracy to 1 micron (0.001mm)",
    leadTimes: "Typical 2–5 business days depending on complexity",
    applications: "Quality verification, first article inspection, batch validation, aerospace and medical compliance",
    category: "Inspection & Additive",
    specs: [
      { label: "Accuracy", value: "1 micron" },
      { label: "Reporting", value: "Full GD&T" },
      { label: "Lead Time", value: "2–5 days" }
    ]
  },
  {
    slug: "3d-printing",
    name: "3D Printing",
    shortDescription: "SLA, SLS, FDM, and metal 3D printing for prototypes and functional parts.",
    description: "Rapid Manufacturing sources 3D printing through our audited global supplier network. SLA, SLS, FDM, and metal 3D printing for prototypes and functional parts with fast turnaround.",
    image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/imgg1.png",
    whatWeSource: [
      "SLA resin printing for fine details and smooth surfaces",
      "SLS nylon printing for functional parts",
      "FDM printing for large parts and tooling",
      "Metal 3D printing (DMLS/SLM) for titanium, aluminium, stainless"
    ],
    materials: "Resins, nylon (PA12), PETG, ABS, titanium, aluminium, stainless steel, Inconel",
    tolerances: "Typical ±0.1mm to ±0.3mm depending on process",
    leadTimes: "From 24 hours for urgent prototypes. Typical 3–7 business days.",
    applications: "Prototypes, functional testing, jigs and fixtures, low-volume production, complex geometries",
    category: "Inspection & Additive",
    specs: [
      { label: "Processes", value: "SLA / SLS / FDM / Metal" },
      { label: "Tolerance", value: "±0.1–0.3mm" },
      { label: "Lead Time", value: "24 hrs–7 days" }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter((s) => s.category === category);
}
