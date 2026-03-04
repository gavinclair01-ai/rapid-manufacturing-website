export type CityIndustryData = {
  intro: string;
  industries: string[];
  commonParts: string[];
  faqs: { question: string; answer: string }[];
};

export const cityIndustryData: Record<string, CityIndustryData> = {
  sydney: {
    intro: "Sydney is home to a broad base of engineering, defence, aerospace, and infrastructure businesses — many with ongoing demand for precision machined components and custom parts.",
    industries: ["Defence & Aerospace", "Mining Equipment", "Marine & Offshore", "Infrastructure & Civil", "Medical Devices", "Electronics & Technology"],
    commonParts: ["Structural housings and brackets", "Hydraulic manifolds and valve bodies", "Shafts and precision bores", "Defence-grade components", "Marine-grade fittings"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply CNC machined components to Sydney businesses?",
        answer: "Yes. We source precision machined components for clients across Sydney and greater NSW through our audited supplier network. Send us your drawing and we'll provide a competitive quote."
      },
      {
        question: "What industries in Sydney do you supply?",
        answer: "We supply machined components to Sydney businesses across defence, aerospace, marine, infrastructure, mining equipment, and medical device sectors."
      },
      {
        question: "How do I get a quote for machined parts in Sydney?",
        answer: "Submit your drawings and specifications via our quote page. We'll review your requirements and respond with pricing."
      }
    ]
  },
  melbourne: {
    intro: "Melbourne has one of Australia's largest concentrations of precision engineering, automotive, food processing, and defence manufacturing businesses — all with regular requirements for machined components.",
    industries: ["Automotive & Transport", "Food Processing Equipment", "Defence Manufacturing", "General Engineering", "Robotics & Automation", "Pharmaceutical Equipment"],
    commonParts: ["Automotive precision components", "Food-grade stainless parts", "Conveyor and automation components", "Gearbox and drivetrain parts", "Brackets and structural housings"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply precision machined components to Melbourne?",
        answer: "Yes. We source and supply precision machined components for Melbourne businesses across automotive, food processing, defence, and general engineering. Submit your drawing for a quote."
      },
      {
        question: "What machining capabilities do you offer for Melbourne clients?",
        answer: "We source CNC milling, CNC turning, 5-axis machining, EDM, wire EDM, precision grinding, gear cutting, sheet metal fabrication, and more through our audited global network."
      },
      {
        question: "Do you supply both prototype and production quantities to Melbourne?",
        answer: "Yes — from one-off prototypes through to batch production runs. We'll match your job to the most capable supplier in our network regardless of quantity."
      }
    ]
  },
  brisbane: {
    intro: "Brisbane and southeast Queensland support a large resources, construction, and heavy equipment sector — industries with consistent demand for machined wear parts, structural components, and custom engineered parts.",
    industries: ["Mining & Resources", "Construction Equipment", "Agricultural Machinery", "Oil & Gas", "Renewable Energy", "Defence & Government"],
    commonParts: ["Wear parts and liners", "Hydraulic cylinder components", "Heavy-duty shafts and pins", "Structural brackets and flanges", "Mining equipment components"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Brisbane and Queensland?",
        answer: "Yes. We supply machined components to clients across Brisbane, Queensland, and the broader resources sector. Send your drawings for a quote."
      },
      {
        question: "Do you supply wear parts and heavy equipment components for mining in Queensland?",
        answer: "Yes — shafts, pins, wear components, hydraulic parts, and custom machined components for the Queensland mining and resources industry are well within our network's capability."
      },
      {
        question: "How quickly can I get a quote for machined parts in Brisbane?",
        answer: "Submit your drawings via our quote page and we'll be in touch. Turnaround on quotes depends on part complexity."
      }
    ]
  },
  perth: {
    intro: "Perth is the gateway to Australia's mining and resources sector — one of the world's most demanding markets for precision machined components, wear parts, and custom engineered parts built to survive harsh conditions.",
    industries: ["Mining & Resources", "Oil & Gas", "Offshore & Marine", "Heavy Equipment", "Defence", "Infrastructure"],
    commonParts: ["Mining wear components", "Shafts, pins, and bushes", "Hydraulic and pneumatic parts", "Offshore-grade fittings", "Heavy-duty structural parts"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Perth and Western Australia?",
        answer: "Yes. We supply precision machined components to Perth and WA clients, including mining, resources, oil and gas, and heavy equipment sectors."
      },
      {
        question: "Do you supply mining-grade machined wear parts to Western Australia?",
        answer: "Yes — shafts, bushes, wear liners, pins, and custom machined components for the WA mining sector are a core part of what we source through our audited network."
      },
      {
        question: "Can you handle repeat orders for machined parts to Perth?",
        answer: "Yes. We support ongoing supply arrangements for clients who need consistent machined component supply, not just one-off quotes."
      }
    ]
  },
  adelaide: {
    intro: "Adelaide is Australia's defence manufacturing hub, with a growing advanced manufacturing sector covering defence, automotive, and electronics — all requiring precision machined and fabricated components.",
    industries: ["Defence Manufacturing", "Automotive & Transport", "Electronics & Technology", "Food & Wine Processing", "Renewable Energy", "General Engineering"],
    commonParts: ["Defence-grade precision components", "Automotive components and housings", "Electronic enclosures", "Stainless food-grade parts", "Precision instruments and gauges"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Adelaide businesses?",
        answer: "Yes. We source and supply precision machined components for Adelaide and South Australian businesses across defence, automotive, electronics, and general engineering."
      },
      {
        question: "Do you supply defence-grade machined components in Adelaide?",
        answer: "Yes — we source precision components for Adelaide's defence manufacturing sector. Send us your specifications and drawings for a quote."
      },
      {
        question: "What machining processes do you source for Adelaide clients?",
        answer: "CNC milling, CNC turning, 5-axis machining, EDM, wire EDM, precision grinding, gear cutting, sheet metal fabrication, and more through our audited global network."
      }
    ]
  },
  canberra: {
    intro: "Canberra is home to a significant defence, government, and research sector — with organisations that regularly require precision machined components and custom engineered parts to exacting specifications.",
    industries: ["Defence & Government", "Research & University", "Electronics & Instrumentation", "Infrastructure & Civil", "Technology & ICT"],
    commonParts: ["Defence precision components", "Research instrumentation parts", "Electronic housings and brackets", "Custom one-off precision parts", "Government infrastructure components"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Canberra?",
        answer: "Yes. We supply precision machined components to Canberra and ACT clients including defence, research, government, and technology organisations."
      },
      {
        question: "Do you supply one-off prototype parts and short runs to Canberra?",
        answer: "Yes — one-off and short-run machined parts are a core strength. Submit your drawings and we'll quote accordingly."
      }
    ]
  },
  "gold-coast": {
    intro: "The Gold Coast and northern NSW support a diverse manufacturing, marine, and construction base with growing aerospace and defence activity at the RAAF Amberley precinct.",
    industries: ["Marine & Boating", "Construction & Infrastructure", "Defence & Aerospace", "Food Processing", "Hospitality Equipment", "Renewable Energy"],
    commonParts: ["Marine-grade stainless components", "Construction hardware and fittings", "Aerospace precision parts", "Food processing equipment parts", "Custom engineered brackets"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to the Gold Coast and northern NSW?",
        answer: "Yes. We supply precision machined components to Gold Coast and northern NSW businesses. Submit your drawings for a competitive quote."
      },
      {
        question: "Do you supply marine-grade machined components on the Gold Coast?",
        answer: "Yes — marine-grade stainless and aluminium machined parts for the boating and marine sector are well within our network's capability."
      }
    ]
  },
  newcastle: {
    intro: "Newcastle and the Hunter Valley have a strong industrial heritage in steel, resources, and heavy manufacturing — with a growing engineering and defence sector that relies on precision machined components.",
    industries: ["Steel & Heavy Industry", "Mining & Resources", "Defence", "Port & Logistics", "General Engineering", "Renewable Energy"],
    commonParts: ["Heavy industrial components", "Mining equipment parts", "Port and lifting hardware", "Structural fabrications", "Shafts and precision parts"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Newcastle and the Hunter Valley?",
        answer: "Yes. We supply precision machined and fabricated components to Newcastle and Hunter Valley businesses. Submit your drawings for a quote."
      },
      {
        question: "Do you supply heavy-duty machined parts for the Newcastle industrial sector?",
        answer: "Yes — heavy industrial components, mining parts, and structural fabrications are all within our network's capability. Get in touch with your specifications."
      }
    ]
  },
  wollongong: {
    intro: "Wollongong has a deep engineering and steel industry heritage, with a diverse manufacturing base across resources, infrastructure, and advanced manufacturing that depends on precision machined components.",
    industries: ["Steel & Metals", "Mining & Resources", "Infrastructure & Civil", "Advanced Manufacturing", "Defence", "General Engineering"],
    commonParts: ["Steel and heavy-section components", "Mining and quarry parts", "Infrastructure fittings and brackets", "Precision shafts and housings", "Wear parts and liners"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Wollongong and the Illawarra?",
        answer: "Yes. We supply precision machined and fabricated components to Wollongong and Illawarra businesses. Submit your drawings for a competitive quote."
      },
      {
        question: "Do you supply heavy engineering and steel industry components in Wollongong?",
        answer: "Yes — our network can source heavy-duty machined parts, wear components, and structural fabrications suited to Wollongong's industrial sector."
      }
    ]
  },
  geelong: {
    intro: "Geelong has transitioned into a diverse advanced manufacturing, defence, and renewable energy hub — with businesses requiring precision machined components for a range of industrial applications.",
    industries: ["Advanced Manufacturing", "Defence", "Renewable Energy", "Automotive Components", "Food Processing", "General Engineering"],
    commonParts: ["Defence precision components", "Renewable energy parts", "Automotive subcomponents", "Stainless food-grade fittings", "Custom machined brackets and housings"],
    faqs: [
      {
        question: "Can Rapid Manufacturing supply machined components to Geelong and the Surf Coast?",
        answer: "Yes. We supply precision machined and fabricated components to Geelong and surrounding Victorian businesses. Submit your drawings for a quote."
      },
      {
        question: "Do you supply defence and renewable energy machined components in Geelong?",
        answer: "Yes — both are active sectors in our Geelong client base. Get in touch with your drawings and specifications for a competitive quote."
      }
    ]
  }
};
