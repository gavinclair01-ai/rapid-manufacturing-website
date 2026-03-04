export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  whatWeSource: string[];
  materials?: string;
  tolerances?: string;
  applications?: string;
  category: 'CNC Machining' | 'Special Processes' | 'Forming & Casting' | 'Fabrication & Finishing' | 'Inspection & Additive';
  specs: { label: string; value: string }[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
};

export const services: Service[] = [
  {
    slug: "cnc-milling",
    name: "CNC Milling",
    shortDescription: "3 to 5-axis precision milling for complex geometries and tight tolerances.",
    description: "Rapid Manufacturing sources high-precision CNC milled components from our audited global supplier network, managed from Australia. We match your job to the most capable supplier and manage the process end-to-end.",
    image: "/images/CNC-Milling-1.jpg",
    whatWeSource: [
      "3-axis, 4-axis, and 5-axis CNC milling",
      "Complex geometries, pockets, contours, and tight-tolerance features",
      "One-off parts through to batch production",
      "Prototype and short-run milling"
    ],
    materials: "Aluminium, steel (mild, stainless, tool steel), titanium, brass, copper, engineering plastics (Delrin, PEEK, Nylon)",
    tolerances: "General machining to ±0.05mm. Precision work to ±0.01mm and tighter.",
    category: "CNC Machining",
    seoTitle: "CNC Milling Australia — Precision Machined Components | Rapid Manufacturing",
    seoDescription: "Source precision CNC milled components through Rapid Manufacturing's audited supplier network. Complex geometries, tight tolerances, 3 to 5-axis. Australia-wide quotes.",
    keywords: [
      "CNC milling Australia",
      "CNC milled components Australia",
      "precision milled parts Australia",
      "5 axis milling Australia",
      "CNC machined components Australia",
      "custom milled parts supplier",
    ],
    specs: [
      { label: "Axes", value: "3 to 5-Axis" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "cnc-turning",
    name: "CNC Turning",
    shortDescription: "2 to 5-axis precision turning with live tooling and sub-spindle operations.",
    description: "Rapid Manufacturing sources precision CNC turned components through our audited global supplier network. From simple shafts to complex multi-axis turned parts, we deliver precision and consistency managed from Australia.",
    image: "/images/CNC-Turning-1.jpg",
    whatWeSource: [
      "2-axis through to full 5-axis turn-mill",
      "Live tooling and sub-spindle operations",
      "Precision bores, threads, tapers, and profiles",
      "Prototype and production quantities"
    ],
    materials: "Aluminium, mild steel, stainless steel, titanium, brass, copper, Inconel, engineering plastics",
    tolerances: "Standard to ±0.05mm. Precision turning to ±0.01mm.",
    category: "CNC Machining",
    seoTitle: "CNC Turning Australia — Precision Turned Components | Rapid Manufacturing",
    seoDescription: "Source precision CNC turned components through Rapid Manufacturing's audited supplier network. Shafts, flanges, bores, threads. Australia-wide quotes.",
    keywords: [
      "CNC turning Australia",
      "CNC turned components Australia",
      "precision turned parts Australia",
      "machined shafts supplier Australia",
      "CNC machined components Australia",
      "turned parts manufacturer Australia",
    ],
    specs: [
      { label: "Max Axes", value: "5-Axis Turn-Mill" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "precision-grinding",
    name: "Precision Grinding",
    shortDescription: "Surface, cylindrical, and centreless grinding for ultra-tight tolerances.",
    description: "Rapid Manufacturing sources precision ground components through our audited global supplier network. When tolerances and surface finish demands exceed what milling or turning can achieve, grinding delivers.",
    image: "/images/Grinding-1.jpg",
    whatWeSource: [
      "Surface grinding (flat, stepped, and angular)",
      "Cylindrical grinding (OD and ID)",
      "Centreless grinding for high-volume shafts",
      "Jig grinding for tight-tolerance bores",
      "Profile and form grinding"
    ],
    materials: "Hardened steel, tool steel, stainless, carbide, ceramics, aluminium",
    tolerances: "Dimensional tolerances to ±0.002mm. Surface finish to Ra 0.2µm achievable.",
    applications: "Precision shafts, bearing seats, gauges, tooling, mould components, aerospace and medical parts",
    category: "CNC Machining",
    seoTitle: "Precision Grinding Australia — Ground Components & Parts | Rapid Manufacturing",
    seoDescription: "Source precision ground components through Rapid Manufacturing's audited supplier network. Surface, cylindrical, and centreless grinding. Tolerances to ±0.002mm. Australia-wide.",
    keywords: [
      "precision grinding Australia",
      "ground components Australia",
      "surface grinding Australia",
      "cylindrical grinding Australia",
      "precision machined parts Australia",
    ],
    specs: [
      { label: "Tolerance", value: "±0.002mm" },
      { label: "Surface Finish", value: "Ra 0.2µm" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "5-axis-machining",
    name: "5-Axis Machining",
    shortDescription: "Simultaneous 5-axis contouring for complex aerospace and medical components.",
    description: "Rapid Manufacturing sources complex 5-axis machined components through our audited global supplier network. Simultaneous 5-axis contouring enables undercuts, compound angles, and tight-tolerance aerospace and medical parts machined in a single setup.",
    image: "/images/about-img2.png",
    whatWeSource: [
      "Simultaneous 5-axis contouring and positioning",
      "Complex 3D geometry in a single setup",
      "Undercuts, compound angles, and freeform surfaces",
      "Aerospace, medical, and automotive components"
    ],
    materials: "Aluminium, titanium, stainless steel, Inconel, tool steel, engineering plastics",
    tolerances: "Precision work to ±0.01mm and tighter",
    category: "CNC Machining",
    seoTitle: "5-Axis Machining Australia — Complex Machined Components | Rapid Manufacturing",
    seoDescription: "Source complex 5-axis machined components through Rapid Manufacturing's audited supplier network. Single-setup precision for aerospace, medical, and industrial parts. Australia-wide.",
    keywords: [
      "5 axis machining Australia",
      "5 axis machined components Australia",
      "complex machined parts Australia",
      "precision machined components Australia",
      "aerospace machining Australia",
    ],
    specs: [
      { label: "Axes", value: "5-Axis Simultaneous" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "edm",
    name: "EDM Machining",
    shortDescription: "Electrical Discharge Machining for hardened materials and complex cavities.",
    description: "Rapid Manufacturing sources EDM (Electrical Discharge Machining) through our audited global supplier network. Using shaped electrodes, EDM machines hardened materials with exceptional accuracy for dies, moulds, and aerospace components.",
    image: "/images/EDM-1.jpg",
    whatWeSource: [
      "Sinker EDM for complex cavities and profiles",
      "Hardened material machining without heat affect",
      "Fine surface finishes on difficult geometries",
      "Die and mould components"
    ],
    materials: "All electrically conductive metals including hardened steel, titanium, carbide, exotic alloys",
    tolerances: "Typical ±0.005mm. Precision work to tighter tolerances available.",
    applications: "Injection mould cavities, die cast dies, aerospace components, medical device tooling",
    category: "Special Processes",
    seoTitle: "EDM Machining Australia — Precision EDM Components | Rapid Manufacturing",
    seoDescription: "Source EDM machined components through Rapid Manufacturing's audited supplier network. Sinker EDM for hardened materials, dies, and moulds. Australia-wide quotes.",
    keywords: [
      "EDM machining Australia",
      "EDM components Australia",
      "electrical discharge machining Australia",
      "precision EDM parts Australia",
      "die machining Australia",
    ],
    specs: [
      { label: "Tolerance", value: "±0.005mm" },
      { label: "Materials", value: "Conductive Metals" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "wire-edm",
    name: "Wire EDM",
    shortDescription: "Intricate 2D profiles and taper cuts with no cutting force on the workpiece.",
    description: "Rapid Manufacturing sources Wire EDM through our audited global supplier network. Using a travelling wire electrode, Wire EDM cuts intricate 2D profiles and taper cuts through conductive material with no cutting force, perfect for delicate or hardened components.",
    image: "/images/Wire-EDM.jpg",
    whatWeSource: [
      "Intricate 2D profile cutting",
      "Taper cuts and angled features",
      "No cutting force on delicate workpieces",
      "Hardened material cutting"
    ],
    materials: "All electrically conductive metals including hardened tool steel, titanium, carbide",
    tolerances: "Typical ±0.002mm for precision work",
    applications: "Punch dies, mould inserts, extrusion dies, medical devices, aerospace components",
    category: "Special Processes",
    seoTitle: "Wire EDM Australia — Precision Wire EDM Components | Rapid Manufacturing",
    seoDescription: "Source Wire EDM components through Rapid Manufacturing's audited supplier network. Intricate 2D profiles, taper cuts, hardened materials. Tolerances to ±0.002mm. Australia-wide.",
    keywords: [
      "wire EDM Australia",
      "wire EDM components Australia",
      "wire erosion Australia",
      "precision wire cut parts Australia",
      "EDM machined parts Australia",
    ],
    specs: [
      { label: "Tolerance", value: "±0.002mm" },
      { label: "Materials", value: "Conductive Metals" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "gear-and-spline-cutting",
    name: "Gear & Spline Cutting",
    shortDescription: "Gear hobbing, shaping, and profile grinding for power transmission components.",
    description: "Rapid Manufacturing sources gear and spline components through our audited global supplier network. From spur gears to complex helical and worm gears, plus precision splines for power transmission applications.",
    image: "/images/Gear-Spline-Cutting.jpg",
    whatWeSource: [
      "Gear hobbing for spur and helical gears",
      "Gear shaping for internal and special profiles",
      "Profile grinding for precision gears",
      "Spline cutting for shafts and couplings"
    ],
    materials: "Steel, stainless steel, brass, bronze, engineering plastics",
    tolerances: "DIN and AGMA standard tolerances available",
    applications: "Power transmission, automotive, industrial machinery, robotics, aerospace",
    category: "Special Processes",
    seoTitle: "Gear & Spline Cutting Australia — Custom Gears & Splines | Rapid Manufacturing",
    seoDescription: "Source custom gears and spline components through Rapid Manufacturing's audited supplier network. Hobbing, shaping, profile grinding. DIN/AGMA standards. Australia-wide.",
    keywords: [
      "gear cutting Australia",
      "spline cutting Australia",
      "custom gears Australia",
      "gear hobbing Australia",
      "precision gears supplier Australia",
      "power transmission components Australia",
    ],
    specs: [
      { label: "Types", value: "Spur / Helical / Bevel" },
      { label: "Standards", value: "DIN / AGMA" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "die-casting",
    name: "Die Casting",
    shortDescription: "High-pressure aluminium and zinc die casting for high-volume production.",
    description: "Rapid Manufacturing sources high-pressure die casting of aluminium and zinc alloys through our audited global supplier network. Cost-effective net-shape parts for high-volume production runs.",
    image: "/images/Die-Casting-1.jpg",
    whatWeSource: [
      "High-pressure die casting for aluminium and zinc",
      "Die design and manufacture",
      "Machining, finishing, and surface treatments",
      "High-volume production runs"
    ],
    materials: "Aluminium alloys (ADC12, A380, etc.), zinc alloys (ZA-8, ZA-12, ZA-27)",
    applications: "Automotive components, consumer electronics, industrial housings, hardware",
    category: "Forming & Casting",
    seoTitle: "Die Casting Australia — Aluminium & Zinc Die Cast Parts | Rapid Manufacturing",
    seoDescription: "Source aluminium and zinc die cast components through Rapid Manufacturing's audited supplier network. High-pressure die casting, die design, finishing. Australia-wide quotes.",
    keywords: [
      "die casting Australia",
      "aluminium die casting Australia",
      "zinc die casting Australia",
      "die cast components Australia",
      "high volume parts Australia",
    ],
    specs: [
      { label: "Materials", value: "Al / Zn Alloys" },
      { label: "Min Qty", value: "500 pieces" },
      { label: "Volume", value: "High Production" }
    ]
  },
  {
    slug: "aluminum-extrusion",
    name: "Aluminum Extrusion",
    shortDescription: "Standard and custom profiles from die design to finished components.",
    description: "Rapid Manufacturing sources aluminium extrusion — from standard profiles to custom tooled sections — through our audited global supplier network, managed end-to-end from die design to finished components.",
    image: "/images/Aluminum-Extrusion-1.jpg",
    whatWeSource: [
      "Standard and custom aluminium extrusion profiles",
      "Extrusion die design and manufacture",
      "Cut-to-length, drilling, tapping, and machining",
      "Anodising, powder coating, and surface finishing"
    ],
    materials: "6061, 6063, 6082, 7075, and custom alloy options. T5, T6, and other tempers available.",
    applications: "Structural frames, heat sinks, LED profiles, handrails, machine guards, enclosures, solar mounting systems",
    category: "Forming & Casting",
    seoTitle: "Aluminium Extrusion Australia — Custom Profiles & Components | Rapid Manufacturing",
    seoDescription: "Source custom aluminium extrusion profiles through Rapid Manufacturing's audited supplier network. Die design, cut-to-length, anodising, powder coating. Australia-wide.",
    keywords: [
      "aluminium extrusion Australia",
      "custom aluminium profiles Australia",
      "aluminum extrusion supplier Australia",
      "extruded aluminium components Australia",
    ],
    specs: [
      { label: "Alloys", value: "6061 / 6063 / 7075" },
      { label: "Finish", value: "Anodise / Powder Coat" },
      { label: "Min Order", value: "Quote-based" }
    ]
  },
  {
    slug: "injection-molding",
    name: "Injection Molding",
    shortDescription: "Thermoplastic injection molding for high-volume plastic parts production.",
    description: "Rapid Manufacturing sources thermoplastic injection moulding for high-volume plastic parts through our audited global supplier network. Mould design and manufacture included as part of our complete service.",
    image: "/images/Injection-Molding.jpg",
    whatWeSource: [
      "Thermoplastic injection moulding",
      "Mould design and manufacture",
      "Multi-cavity tooling for high volumes",
      "Insert moulding and overmoulding"
    ],
    materials: "ABS, PP, PC, Nylon, PEEK, POM, TPE, and custom compounds",
    applications: "Consumer products, automotive components, medical devices, electronics housings, industrial parts",
    category: "Forming & Casting",
    seoTitle: "Injection Molding Australia — Custom Plastic Parts | Rapid Manufacturing",
    seoDescription: "Source custom injection moulded plastic parts through Rapid Manufacturing's audited supplier network. Mould design, multi-cavity tooling, production volumes. Australia-wide.",
    keywords: [
      "injection moulding Australia",
      "injection molding Australia",
      "custom plastic parts Australia",
      "plastic injection moulding supplier Australia",
    ],
    specs: [
      { label: "Materials", value: "ABS / PC / Nylon / PEEK" },
      { label: "Process", value: "High Volume" },
      { label: "Min Qty", value: "Quote-based" }
    ]
  },
  {
    slug: "laser-cutting",
    name: "Laser Cutting",
    shortDescription: "Fibre and CO₂ laser cutting for precision sheet metal and flat profiles.",
    description: "Rapid Manufacturing sources fibre and CO₂ laser cutting through our audited global supplier network. Precision sheet metal and flat profile cutting for prototypes through to production runs.",
    image: "/images/Laser-Cutting-1.jpg",
    whatWeSource: [
      "Fibre laser cutting for metals",
      "CO₂ laser cutting for non-metals",
      "Nesting and material optimisation",
      "Prototype and production quantities"
    ],
    materials: "Mild steel, stainless steel, aluminium, copper, brass, acrylic, plastics",
    tolerances: "Typical ±0.1mm depending on material and thickness",
    applications: "Enclosures, brackets, signage, gaskets, architectural panels, machine guards",
    category: "Fabrication & Finishing",
    seoTitle: "Laser Cutting Australia — Precision Laser Cut Components | Rapid Manufacturing",
    seoDescription: "Source precision laser cut components through Rapid Manufacturing's audited supplier network. Fibre and CO₂ laser cutting for metals and non-metals. Australia-wide quotes.",
    keywords: [
      "laser cutting Australia",
      "laser cut components Australia",
      "precision laser cutting Australia",
      "sheet metal laser cutting Australia",
      "laser cut parts supplier Australia",
    ],
    specs: [
      { label: "Tolerance", value: "±0.1mm" },
      { label: "Thickness", value: "Up to 25mm" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "sheet-metal-fabrication",
    name: "Sheet Metal Fabrication",
    shortDescription: "Laser cutting, CNC bending, welding, and powder coating for metal structures.",
    description: "Rapid Manufacturing sources complete sheet metal fabrication through our audited global supplier network. From laser cutting and CNC bending to welding and powder coating for enclosures, brackets, and structures.",
    image: "/images/Sheet-Metal.jpg",
    whatWeSource: [
      "Laser cutting and punch pressing",
      "CNC press brake bending",
      "MIG, TIG, and spot welding",
      "Powder coating and surface finishing"
    ],
    materials: "Mild steel, stainless steel, aluminium. Thickness 0.5–10mm.",
    applications: "Enclosures, brackets, chassis, panels, machine guards, cabinets",
    category: "Fabrication & Finishing",
    seoTitle: "Sheet Metal Fabrication Australia — Custom Sheet Metal Parts | Rapid Manufacturing",
    seoDescription: "Source custom sheet metal fabricated components through Rapid Manufacturing's audited supplier network. Laser cutting, bending, welding, powder coating. Australia-wide.",
    keywords: [
      "sheet metal fabrication Australia",
      "custom sheet metal parts Australia",
      "sheet metal components Australia",
      "CNC bending Australia",
      "metal fabrication supplier Australia",
    ],
    specs: [
      { label: "Thickness", value: "0.5–10mm" },
      { label: "Processes", value: "Cut / Bend / Weld" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "cmm-inspection",
    name: "CMM Inspection",
    shortDescription: "Coordinate Measuring Machine inspection with full GD&T reporting.",
    description: "Rapid Manufacturing sources CMM (Coordinate Measuring Machine) inspection through our audited global supplier network. Full dimensional verification of manufactured parts with detailed reporting.",
    image: "/images/about-img.png",
    whatWeSource: [
      "3D coordinate measurement and verification",
      "Full GD&T reporting and analysis",
      "First Article Inspection (FAI)",
      "Batch statistical analysis and SPC"
    ],
    materials: "All materials suitable for CMM inspection",
    tolerances: "Accuracy to 1 micron (0.001mm)",
    applications: "Quality verification, first article inspection, batch validation, aerospace and medical compliance",
    category: "Inspection & Additive",
    seoTitle: "CMM Inspection Australia — Precision Dimensional Inspection | Rapid Manufacturing",
    seoDescription: "Source CMM inspection services through Rapid Manufacturing's audited supplier network. GD&T reporting, FAI, batch validation. Accuracy to 1 micron. Australia-wide.",
    keywords: [
      "CMM inspection Australia",
      "coordinate measuring machine Australia",
      "dimensional inspection Australia",
      "first article inspection Australia",
      "GD&T reporting Australia",
    ],
    specs: [
      { label: "Accuracy", value: "1 micron" },
      { label: "Reporting", value: "Full GD&T" },
      { label: "Min Order", value: "1 piece" }
    ]
  },
  {
    slug: "3d-printing",
    name: "3D Printing",
    shortDescription: "SLA, SLS, FDM, and metal 3D printing for prototypes and functional parts.",
    description: "Rapid Manufacturing sources 3D printing through our audited global supplier network. SLA, SLS, FDM, and metal 3D printing for prototypes and functional parts.",
    image: "/images/imgg1.jpg",
    whatWeSource: [
      "SLA resin printing for fine details and smooth surfaces",
      "SLS nylon printing for functional parts",
      "FDM printing for large parts and tooling",
      "Metal 3D printing (DMLS/SLM) for titanium, aluminium, stainless"
    ],
    materials: "Resins, nylon (PA12), PETG, ABS, titanium, aluminium, stainless steel, Inconel",
    tolerances: "Typical ±0.1mm to ±0.3mm depending on process",
    applications: "Prototypes, functional testing, jigs and fixtures, low-volume production, complex geometries",
    category: "Inspection & Additive",
    seoTitle: "3D Printing Australia — Metal & Polymer 3D Printed Parts | Rapid Manufacturing",
    seoDescription: "Source 3D printed components through Rapid Manufacturing's audited supplier network. SLA, SLS, FDM, and metal DMLS printing for prototypes and functional parts. Australia-wide.",
    keywords: [
      "3D printing Australia",
      "metal 3D printing Australia",
      "SLS printing Australia",
      "DMLS printing Australia",
      "3D printed parts supplier Australia",
      "rapid prototyping Australia",
    ],
    specs: [
      { label: "Processes", value: "SLA / SLS / FDM / Metal" },
      { label: "Tolerance", value: "±0.1–0.3mm" },
      { label: "Min Order", value: "1 piece" }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter((s) => s.category === category);
}
