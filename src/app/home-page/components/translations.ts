export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    about: string;
    crops: string;
    technology: string;
    sustainability: string;
    partners: string;
    contact: string;
    cta: string;
  };
  hero: {
    tagline: string;
    headline1: string;
    headline2: string;
    headline3: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  stats: {
    hectares: string;
    hectaresLabel: string;
    crops: string;
    cropsLabel: string;
    water: string;
    waterLabel: string;
    years: string;
    yearsLabel: string;
  };
  about: {
    sectionLabel: string;
    headline: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    values: string;
    valuesList: { title: string; desc: string; }[];
    engagements: string;
    engagementsList: { title: string; desc: string; }[];
    learnMore: string;
  };
  crops: {
    sectionLabel: string;
    headline: string;
    subtitle: string;
    wheat: { name: string; sowing: string; sowingValue: string; harvest: string; harvestValue: string; yield: string; yieldValue: string; description: string; };
    sugarbeet: { name: string; sowing: string; sowingValue: string; harvest: string; harvestValue: string; yield: string; yieldValue: string; description: string; };
    rapeseed: { name: string; sowing: string; sowingValue: string; harvest: string; harvestValue: string; yield: string; yieldValue: string; description: string; };
    learnMore: string;
  };
  technology: {
    sectionLabel: string;
    headline: string;
    subtitle: string;
    pivot: { title: string; desc: string; };
    soil: { title: string; desc: string; };
    water: { title: string; desc: string; };
    digital: { title: string; desc: string; };
    cta: string;
  };
  howItWorks: {
    sectionLabel: string;
    headline: string;
    step1: { number: string; title: string; desc: string; };
    step2: { number: string; title: string; desc: string; };
    step3: { number: string; title: string; desc: string; };
  };
  sustainability: {
    sectionLabel: string;
    headline: string;
    subtitle: string;
    pillar1: { title: string; desc: string; };
    pillar2: { title: string; desc: string; };
    pillar3: { title: string; desc: string; };
    carbonCredits: { title: string; desc: string; };
  };
  partners: {
    sectionLabel: string;
    headline: string;
  };
  testimonials: {
    sectionLabel: string;
    headline: string;
    t1: { quote: string; name: string; title: string; company: string; };
    t2: { quote: string; name: string; title: string; company: string; };
    t3: { quote: string; name: string; title: string; company: string; };
  };
  contact: {
    sectionLabel: string;
    headline: string;
    subtitle: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    inquiryLabel: string;
    inquiryOptions: string[];
    submitBtn: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    cropsLabel: string;
    technologyLabel: string;
    legalLabel: string;
    links: {
      home: string; about: string; sustainability: string; contact: string;
      wheat: string; sugarbeet: string; rapeseed: string;
      pivot: string; soilAnalysis: string; waterSaving: string;
      privacy: string; terms: string; certifications: string;
    };
    copyright: string;
    certLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home', about: 'About', crops: 'Crops', technology: 'Technology',
      sustainability: 'Sustainability', partners: 'Partners', contact: 'Contact',
      cta: 'Corporate Partnership',
    },
    hero: {
      tagline: 'AGROMETALIS GROUPE · Excellence Agronomique',
      headline1: 'Precision.', headline2: 'Performance.', headline3: 'Sustainable Future.',
      subtitle: 'Developing a new generation of Moroccan agriculture, based on expertise, science, and technological mastery.',
      cta1: 'Explore Our Crops', cta2: 'Our Technology',
    },
    stats: {
      hectares: '12,000+', hectaresLabel: 'Hectares Managed',
      crops: '4+', cropsLabel: 'Strategic Crops',
      water: '40%', waterLabel: 'Water Savings',
      years: '15+', yearsLabel: 'Years of Expertise',
    },
    about: {
      sectionLabel: 'About AGROMETALIS GROUPE',
      headline: 'Next-generation agriculture built on expertise and science',
      p1: 'AGROMETALIS GROUPE is a Moroccan agricultural group driven by a clear vision: to emerge a modern, high-performance, and sustainable agriculture based on scientific rigor, field expertise, and useful innovation.',
      p2: 'With a national vocation, the group develops its activities across different regions of Morocco, adapting production methods to the specificities of each soil, climate, and terrain. Specializing in cereals, corn, rapeseed, and sugar beet, AGROMETALIS GROUPE operates with operational excellence and sustainable value creation.',
      p3: 'Our approach is based on soil analysis, meteorological monitoring, irrigation automation, precision agriculture, and technical systems adaptation — particularly through pivot and other tailored solutions.',
      p4: 'This approach allows us to reconcile economic performance, resource management, input optimization, and production quality.',
      p5: 'Beyond production, AGROMETALIS GROUPE positions itself as a trusted professional partner, capable of honoring its commitments with rigor to major processing players. We believe that future agriculture must be productive, reliable, scientifically driven, and sustainably profitable.',
      mission: 'Mission',
      missionText: 'To develop a productive, profitable, and responsible agriculture, based on soil analysis, climate intelligence, precision irrigation, and operational excellence.',
      vision: 'Vision',
      visionText: 'To become a reference Moroccan agricultural group, recognized for its ability to produce sustainably with excellence, rigor, and efficiency.',
      values: 'Our Values',
      valuesList: [
        { title: 'Scientific Rigor', desc: 'Analysis, measurement, and expertise are at the heart of our decisions.' },
        { title: 'Operational Excellence', desc: 'We aim for a high level of execution at every stage of production.' },
        { title: 'Reliability', desc: 'We build lasting relationships based on trust and commitment.' },
        { title: 'Sustainable Performance', desc: 'Profitability through responsible resource management.' }
      ],
      engagements: 'Our Commitments',
      engagementsList: [
        { title: 'Performance', desc: 'Maximizing yield per hectare through data-driven agronomy.' },
        { title: 'Resource Management', desc: 'Optimizing water and fertilizers for long-term efficiency.' },
        { title: 'Reliability', desc: 'Honoring commitments to industrial partners and processing sectors.' }
      ],
      learnMore: 'Learn More About Our Vision',
    },
    crops: {
      sectionLabel: 'Our Crops',
      headline: 'Strategic crops. Cultivated with precision.',
      subtitle: 'Selected for agronomic fit, strategic value, and precision management compatibility.',
      wheat: {
        name: 'Wheat', sowing: 'Sowing', sowingValue: 'Oct — Dec', harvest: 'Harvest', harvestValue: 'May — Jun', yield: 'Target', yieldValue: '6.5 t/ha',
        description: 'Primary cereal managed with precision deficit irrigation and optimized varietal selection.',
      },
      sugarbeet: {
        name: 'Sugar Beet', sowing: 'Sowing', sowingValue: 'Feb — Mar', harvest: 'Harvest', harvestValue: 'Nov — Jan', yield: 'Target', yieldValue: '70 t/ha',
        description: 'High-value industrial crop requiring intensive soil preparation and precise water management.',
      },
      rapeseed: {
        name: 'Rapeseed / Canola', sowing: 'Sowing', sowingValue: 'Sep — Oct', harvest: 'Harvest', harvestValue: 'May — Jun', yield: 'Target', yieldValue: '3.2 t/ha',
        description: 'Improving soil structure between cycles and contributing to carbon reduction targets.',
      },
      learnMore: 'Learn More',
    },
    technology: {
      sectionLabel: 'Our Technology',
      headline: 'Precision tools for every hectare.',
      subtitle: 'From GPS-guided pivots to real-time soil sensors, built for scale and measurable sustainability.',
      pivot: { title: 'Pivot Irrigation (VRI)', desc: 'Variable Rate Irrigation covering 800 ha per unit. Reduces water use by 35%.' },
      soil: { title: 'Precision Soil Analysis', desc: 'Grid-based sampling at 2.5 ha resolution with multi-depth profiles.' },
      water: { title: 'Water-Saving Techniques', desc: 'Scheduling based on real-time sensors and evapotranspiration models.' },
      digital: { title: 'Digital Farm Management', desc: 'NDVI satellite imagery and IoT weather stations for automated scheduling.' },
      cta: 'Explore Our Technology',
    },
    howItWorks: {
      sectionLabel: 'How It Works',
      headline: 'From soil to harvest — a precision-driven process.',
      step1: { number: '01', title: 'Soil Analysis & Mapping', desc: 'Grid-based sampling and multi-depth nutrient profiling create the agronomic baseline.' },
      step2: { number: '02', title: 'Irrigation Programming', desc: 'GPS-guided systems programmed with zone-specific rates based on soil and crop stage.' },
      step3: { number: '03', title: 'Monitoring & Optimization', desc: 'NDVI imagery and IoT sensors track health and optimize harvest logistics.' },
    },
    sustainability: {
      sectionLabel: 'Sustainability',
      headline: 'Farming that protects what it depends on.',
      subtitle: 'Our framework is the operational foundation of everything we grow.',
      pillar1: { title: 'Responsible Water', desc: 'Deficit irrigation and moisture monitoring delivered 40% savings.' },
      pillar2: { title: 'Soil Health', desc: 'Strategic rotation and organic matter management maintain long-term productivity.' },
      pillar3: { title: 'Carbon Neutrality', desc: 'Precision application and rapeseed rotation sequester carbon. Neutrality target 2030.' },
      carbonCredits: { title: 'Carbon Credits (CO2)', desc: 'Capturing CO2 via crops, measured and certified for companies to offset emissions.' },
    },
    partners: {
      sectionLabel: 'Our Partners',
      headline: 'Trusted by industry leaders.',
    },
    testimonials: {
      sectionLabel: 'Testimonials',
      headline: 'What our partners say.',
      t1: { quote: 'AGROMETALIS GROUPE delivered 68% water savings while maintaining sugar beet yields above 72 t/ha.', name: 'Karim Benali', title: 'Head of Agronomy', company: 'SugarCo Morocco' },
      t2: { quote: 'Their soil mapping data changed how we approach fertilization across our wheat contracts.', name: 'Sophie Marchand', title: 'Agricultural Director', company: 'GrainTrade International' },
      t3: { quote: 'The most technically sophisticated pivot irrigation management we have seen in North Africa.', name: 'Ahmed Tazi', title: 'Investment Manager', company: 'Agri-Corp Fund' },
    },
    contact: {
      sectionLabel: 'Contact',
      headline: 'Start a conversation.',
      subtitle: 'Explore partnerships, investments, or technical collaboration with our expert team.',
      namePlaceholder: 'Full Name', companyPlaceholder: 'Company',
      emailPlaceholder: 'Email Address', phonePlaceholder: 'Phone Number',
      messagePlaceholder: 'Tell us about your project...',
      inquiryLabel: 'Inquiry Type',
      inquiryOptions: ['Partnership', 'Investment', 'Carbon Credits', 'Other'],
      submitBtn: 'Send Message',
      phoneLabel: 'Phone', phone: '+212 661-490365 ',
      emailLabel: 'Email', email: 'agrometalisgroupe@gmail.com',
      hoursLabel: 'Office Hours', hours: 'Mon – Fri: 8:00 – 17:00\nSat: 8:00 – 13:00',
    },
    footer: {
      tagline: 'Agronomic Excellence. Sustainable Performance.',
      quickLinks: 'Quick Links', cropsLabel: 'Crops', technologyLabel: 'Technology', legalLabel: 'Legal',
      links: {
        home: 'Home', about: 'About Us', sustainability: 'Sustainability', contact: 'Contact',
        wheat: 'Wheat', sugarbeet: 'Sugar Beet', rapeseed: 'Rapeseed',
        pivot: 'Pivot Irrigation', soilAnalysis: 'Soil Analysis', waterSaving: 'Water Saving',
        privacy: 'Privacy Policy', terms: 'Terms of Use', certifications: 'Certifications',
      },
      copyright: '© 2025 AGROMETALIS GROUPE. All rights reserved.',
      certLabel: 'Certifications',
    },
  },
  fr: {
    nav: {
      home: 'Accueil', about: 'À Propos', crops: 'Cultures', technology: 'Technologie',
      sustainability: 'Durabilité', partners: 'Partenaires', contact: 'Contact',
      cta: 'Partenariat Groupe',
    },
    hero: {
      tagline: 'AGROMETALIS GROUPE · Excellence Agronomique',
      headline1: 'Précision.', headline2: 'Performance.', headline3: 'Durabilité.',
      subtitle: 'Développer une agriculture marocaine de nouvelle génération, fondée sur l’expertise, la science et la maîtrise technologique.',
      cta1: 'Nos Cultures', cta2: 'Notre Technologie',
    },
    stats: {
      hectares: '12 000+', hectaresLabel: 'Hectares Gérés',
      crops: '4+', cropsLabel: 'Cultures Stratégiques',
      water: '40%', waterLabel: 'Économies d\'Eau',
      years: '15+', yearsLabel: 'Années d\'Expertise',
    },
    about: {
      sectionLabel: 'À Propos de AGROMETALIS GROUPE',
      headline: 'Une agriculture de nouvelle génération fondée sur la science',
      p1: 'AGROMETALIS GROUPE est un groupe agricole marocain porté par une vision claire : faire émerger une agriculture moderne, performante et durable, fondée sur la rigueur scientifique, l’expertise terrain et l’innovation utile.',
      p2: 'Présent à vocation nationale, le groupe développe ses activités à travers les différentes régions du Maroc en adaptant ses méthodes de production aux spécificités de chaque sol, de chaque climat et de chaque terrain. Spécialisé notamment dans les céréales, le maïs, le colza et la betterave sucrière, AGROMETALIS GROUPE inscrit son action dans une logique d’excellence opérationnelle et de création de valeur durable.',
      p3: 'Notre approche repose sur l’analyse des sols, l’analyse météorologique, l’automatisation de l’irrigation, l’agriculture de précision et l’adaptation des systèmes techniques — notamment par pivot et autres solutions adaptées — aux réalités agronomiques de chaque exploitation.',
      p4: 'Cette démarche nous permet de concilier performance économique, maîtrise des ressources, optimisation des intrants et qualité de production.',
      p5: 'Au-delà de la production, AGROMETALIS GROUPE se positionne comme un partenaire professionnel de confiance, capable d’honorer ses engagements avec rigueur auprès des acteurs majeurs de la transformation. Nous croyons qu’une agriculture d’avenir doit être productive, fiable, scientifiquement pilotée et durablement rentable.',
      mission: 'Mission',
      missionText: 'Développer une agriculture productive, rentable et responsable, fondée sur l’analyse des sols, l’intelligence climatique, l’irrigation de précision et l’excellence opérationnelle.',
      vision: 'Vision',
      visionText: 'Devenir un groupe agricole marocain de référence, reconnu pour sa capacité à produire durablement avec excellence, rigueur et efficience.',
      values: 'Nos Valeurs',
      valuesList: [
        { title: 'Rigueur Scientifique', desc: 'Nous plaçons l’analyse, la mesure et l’expertise au cœur de nos décisions.' },
        { title: 'Excellence Opérationnelle', desc: 'Nous visons un haut niveau d’exécution à chaque étape de la production.' },
        { title: 'Fiabilité', desc: 'Nous construisons des relations durables fondées sur la confiance et le respect.' },
        { title: 'Performance Durable', desc: 'Rentabilité dans une logique de maîtrise responsable des ressources.' }
      ],
      engagements: 'Nos Engagements',
      engagementsList: [
        { title: 'Performance', desc: 'Maximiser le rendement par hectare grâce à une approche agronomique rigoureuse.' },
        { title: 'Maîtrise des Ressources', desc: 'Optimiser l’usage de l’eau et des engrais pour une efficience à long terme.' },
        { title: 'Fiabilité', desc: 'Honorer nos engagements auprès des partenaires industriels et filières.' }
      ],
      learnMore: 'En savoir plus sur notre vision',
    },
    crops: {
      sectionLabel: 'Nos Cultures',
      headline: 'Cultures stratégiques. Cultivées avec précision.',
      subtitle: 'Sélectionnées pour leur adéquation agronomique et leur valeur stratégique.',
      wheat: {
        name: 'Blé', sowing: 'Semis', sowingValue: 'Oct — Déc', harvest: 'Récolte', harvestValue: 'Mai — Juin', yield: 'Objectif', yieldValue: '6,5 t/ha',
        description: 'Principale culture céréalière gérée avec une irrigation déficitaire de précision.',
      },
      sugarbeet: {
        name: 'Betterave Sucrière', sowing: 'Semis', sowingValue: 'Fév — Mar', harvest: 'Récolte', harvestValue: 'Nov — Jan', yield: 'Objectif', yieldValue: '70 t/ha',
        description: 'Culture industrielle à haute valeur nécessitant une préparation intensive des sols.',
      },
      rapeseed: {
        name: 'Colza / Canola', sowing: 'Semis', sowingValue: 'Sep — Oct', harvest: 'Récolte', harvestValue: 'Mai — Juin', yield: 'Objectif', yieldValue: '3,2 t/ha',
        description: 'Améliore la structure du sol et contribue aux objectifs de réduction carbone.',
      },
      learnMore: 'En Savoir Plus',
    },
    technology: {
      sectionLabel: 'Notre Technologie',
      headline: 'Des outils de précision pour chaque hectare.',
      subtitle: 'Des pivots guidés par GPS aux capteurs en temps réel, conçus pour la performance durable.',
      pivot: { title: 'Irrigation Pivot (VRI)', desc: 'Systèmes d\'irrigation à taux variable couvrant 800 ha par unité. Réduit l\'eau de 35%.' },
      soil: { title: 'Analyse des Sols de Précision', desc: 'Échantillonnage en grille à résolution 2,5 ha avec profils multi-profondeur.' },
      water: { title: 'Économie d\'Eau', desc: 'Planification basée sur des capteurs d\'humidité et modèles d\'évapotranspiration.' },
      digital: { title: 'Gestion Numérique', desc: 'Imagerie satellite NDVI et stations météo IoT pour une planification automatisée.' },
      cta: 'Explorer Notre Technologie',
    },
    howItWorks: {
      sectionLabel: 'Comment Ça Marche',
      headline: 'Du sol à la récolte — un processus guidé par la précision.',
      step1: { number: '01', title: 'Analyse & Cartographie', desc: 'Profilage des nutriments et caractérisation physique pour créer la base agronomique.' },
      step2: { number: '02', title: 'Programmation Irrigation', desc: 'Systèmes GPS programmés avec des taux spécifiques basés sur le sol et le stade de culture.' },
      step3: { number: '03', title: 'Suivi & Optimisation', desc: 'L\'imagerie NDVI et capteurs IoT suivent la santé et optimisent la logistique de récolte.' },
    },
    sustainability: {
      sectionLabel: 'Durabilité',
      headline: 'Une agriculture qui protège ce dont elle dépend.',
      subtitle: 'Notre cadre de durabilité est le fondement opérationnel de tout ce que nous cultivons.',
      pillar1: { title: 'Gestion de l\'Eau', desc: 'Protocoles d\'irrigation déficitaire ayant permis 40% d\'économies.' },
      pillar2: { title: 'Santé des Sols', desc: 'Rotation stratégique et gestion de la matière organique pour la productivité long terme.' },
      pillar3: { title: 'Neutralité Carbone', desc: 'L\'application précise et la rotation colza séquestrent le carbone. Objectif 2030.' },
      carbonCredits: { title: 'Crédits Carbone (CO2)', desc: 'Captation du CO2 via nos cultures, mesurée et certifiée pour compenser les émissions.' },
    },
    partners: {
      sectionLabel: 'Nos Partenaires',
      headline: 'La confiance des leaders du secteur.',
    },
    testimonials: {
      sectionLabel: 'Témoignages',
      headline: 'Ce que disent nos partenaires.',
      t1: { quote: 'AGROMETALIS GROUPE a livré 68% d\'économies d\'eau tout en maintenant des rendements élevés.', name: 'Karim Benali', title: 'Responsable Agronomie', company: 'SugarCo Maroc' },
      t2: { quote: 'Leurs données de cartographie ont changé notre approche de la fertilisation sur nos contrats de blé.', name: 'Sophie Marchand', title: 'Directrice Agricole', company: 'GrainTrade International' },
      t3: { quote: 'La gestion d\'irrigation la plus sophistiquée techniquement que nous ayons vue en Afrique du Nord.', name: 'Ahmed Tazi', title: 'Gestionnaire d\'Investissement', company: 'Agri-Corp Fund' },
    },
    contact: {
      sectionLabel: 'Contact',
      headline: 'Commençons une conversation.',
      subtitle: 'Explorez des partenariats, investissements ou collaborations techniques avec nos experts.',
      namePlaceholder: 'Nom Complet', companyPlaceholder: 'Société',
      emailPlaceholder: 'Adresse Email', phonePlaceholder: 'Téléphone',
      messagePlaceholder: 'Parlez-nous de votre projet...',
      inquiryLabel: 'Type de Demande',
      inquiryOptions: ['Partenariat', 'Investissement', 'Crédits Carbone', 'Autre'],
      submitBtn: 'Envoyer le Message',
      phoneLabel: 'Téléphone', phone: '+212 661-490365',
      emailLabel: 'Email', email: 'agrometalisgroupe@gmail.com',
      hoursLabel: 'Heures de Bureau', hours: 'Lun – Ven: 8h00 – 17h00\nSam: 8h00 – 13h00',
    },
    footer: {
      tagline: 'Excellence agronomique. Performance durable.',
      quickLinks: 'Liens Rapides', cropsLabel: 'Cultures', technologyLabel: 'Technologie', legalLabel: 'Légal',
      links: {
        home: 'Accueil', about: 'À Propos', sustainability: 'Durabilité', contact: 'Contact',
        wheat: 'Blé', sugarbeet: 'Betterave Sucrière', rapeseed: 'Colza',
        pivot: 'Irrigation Pivot', soilAnalysis: 'Analyse des Sols', waterSaving: 'Économie d\'Eau',
        privacy: 'Confidentialité', terms: 'Conditions', certifications: 'Certifications',
      },
      copyright: '© 2025 AGROMETALIS GROUPE. Tous droits réservés.',
      certLabel: 'Certifications',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية', about: 'من نحن', crops: 'المحاصيل', technology: 'التكنولوجيا',
      sustainability: 'الاستدامة', partners: 'الشركاء', contact: 'اتصل بنا',
      cta: 'شراكة مؤسسية',
    },
    hero: {
      tagline: 'AGROMETALIS GROUPE · التميز الزراعي',
      headline1: 'دقة.', headline2: 'أداء.', headline3: 'استدامة.',
      subtitle: 'تطوير جيل جديد من الفلاحة المغربية، القائمة على الخبرة والعلم والتمكن التكنولوجي.',
      cta1: 'اكتشف محاصيلنا', cta2: 'تقنيتنا',
    },
    stats: {
      hectares: '+12,000', hectaresLabel: 'هكتار مُدار',
      crops: '+4', cropsLabel: 'محاصيل استراتيجية',
      water: '40%', waterLabel: 'توفير المياه',
      years: '+15', yearsLabel: 'سنة خبرة',
    },
    about: {
      sectionLabel: 'عن AGROMETALIS GROUPE',
      headline: 'جيل جديد من الفلاحة القائمة على الخبرة والعلم',
      p1: 'AGROMETALIS GROUPE هي مجموعة فلاحية مغربية تعمل على تطوير فلاحة حديثة، مستدامة وفعالة، قائمة على الصرامة والابتكار وحسن تدبير الموارد.',
      p2: 'تعمل المجموعة على الصعيد الوطني في مختلف مناطق المغرب، مكيفة أساليب إنتاجها مع خصوصيات كل تربة ومناخ. متخصصون في الحبوب، الذرة، الكولزا والشمندر السكري، وتعمل المجموعة بمنطق التميز التشغيلي وخلق قيمة مستدامة.',
      p3: 'يعتمد نهجنا على تحليل التربة، الرصد الجوي، أتمتة الري، الفلاحة الدقيقة وتكييف الأنظمة التقنية — خاصة عبر المحاور والحلول الملائمة — مع الواقع الزراعي لكل ضيعة.',
      p4: 'يسمح لنا هذا النهج بالتوفيق بين الأداء الاقتصادي، تدبير الموارد، تحسين المدخلات وجودة الإنتاج.',
      p5: 'تتموقع المجموعة كشريك مهني موثوق، قادر على الوفاء بالتزاماته بصرامة تجاه الفاعلين الرئيسيين في التصنيع. نؤمن أن فلاحة المستقبل يجب أن تكون منتجة، موثوقة، ومربحة بشكل مستدام.',
      mission: 'المهمة',
      missionText: 'تطوير فلاحة منتجة ومسؤولة، قائمة على تحليل التربة والذكاء المناخي والري الدقيق والتميز في التنفيذ.',
      vision: 'الرؤية',
      visionText: 'أن نصبح مجموعة فلاحية مغربية مرجعية، معترفاً بقدرتها على الإنتاج المستدام بتميز وصرامة وفعالية.',
      values: 'قيمنا',
      valuesList: [
        { title: 'الصرامة العلمية', desc: 'نضع التحليل والقياس والخبرة في قلب قراراتنا.' },
        { title: 'التميز التشغيلي', desc: 'نستهدف مستوى عالٍ من التنفيذ في كل مرحلة من مراحل الإنتاج.' },
        { title: 'الموثوقية', desc: 'نبني علاقات دائمة قائمة على الثقة واحترام الالتزامات.' },
        { title: 'الأداء المستدام', desc: 'تحقيق الربحية في إطار التدبير المسؤول للموارد.' }
      ],
      engagements: 'التزاماتنا',
      engagementsList: [
        { title: 'الأداء', desc: 'رفع المردودية لكل هكتار بفضل نهج زراعي صارم يعتمد على البيانات.' },
        { title: 'تدبير الموارد', desc: 'تحسين استخدام المياه والأسمدة لضمان الكفاءة على المدى الطويل.' },
        { title: 'الموثوقية', desc: 'الوفاء بالالتزامات تجاه الشركاء الصناعيين وسلاسل التحويل.' }
      ],
      learnMore: 'تعرف أكثر على رؤيتنا',
    },
    crops: {
      sectionLabel: 'محاصيلنا',
      headline: 'محاصيل استراتيجية. تُزرع بدقة.',
      subtitle: 'مختارة لملاءمتها الزراعية وقيمتها الاستراتيجية للأنظمة الغذائية.',
      wheat: {
        name: 'القمح', sowing: 'الزراعة', sowingValue: 'أكتوبر — ديسمبر', harvest: 'الحصاد', harvestValue: 'مايو — يونيو', yield: 'الهدف', yieldValue: '6.5 طن/هكتار',
        description: 'المحصول الرئيسي المدار بالري النقصي الدقيق واختيار أصناف محسنة.',
      },
      sugarbeet: {
        name: 'الشمندر السكري', sowing: 'الزراعة', sowingValue: 'فبراير — مارس', harvest: 'الحصاد', harvestValue: 'نوفمبر — يناير', yield: 'الهدف', yieldValue: '70 طن/هكتار',
        description: 'محصول صناعي عالي القيمة يتطلب تحضيراً مكثفاً للتربة.',
      },
      rapeseed: {
        name: 'الكانولا / الكولزا', sowing: 'الزراعة', sowingValue: 'سبتمبر — أكتوبر', harvest: 'الحصاد', harvestValue: 'مايو — يونيو', yield: 'الهدف', yieldValue: '3.2 طن/هكتار',
        description: 'يحسن بنية التربة ويساهم في أهداف تقليل البصمة الكربونية.',
      },
      learnMore: 'اعرف المزيد',
    },
    technology: {
      sectionLabel: 'تقنيتنا',
      headline: 'أدوات دقيقة لكل هكتار.',
      subtitle: 'من المحاور الموجهة بـ GPS إلى حساسات الوقت الفعلي، مصممة للأداء المستدام.',
      pivot: { title: 'ري المحور (VRI)', desc: 'أنظمة ري متغيرة المعدل تغطي 800 هكتار للوحدة. توفر 35% من المياه.' },
      soil: { title: 'تحليل التربة الدقيق', desc: 'أخذ عينات شبكية بدقة 2.5 هكتار مع مقاطع متعددة الأعماق.' },
      water: { title: 'توفير المياه', desc: 'جدولة بناءً على حساسات الرطوبة ونماذج التبخر والنتح.' },
      digital: { title: 'الإدارة الرقمية', desc: 'صور NDVI ومحطات طقس IoT للجدولة الآلية.' },
      cta: 'استكشف تقنيتنا',
    },
    howItWorks: {
      sectionLabel: 'كيف يعمل النظام',
      headline: 'من التربة إلى الحصاد — عملية مدفوعة بالدقة.',
      step1: { number: '01', title: 'التحليل ورسم الخرائط', desc: 'تحديد المغذيات والتوصيف الفيزيائي للتربة لبناء الأساس الزراعي.' },
      step2: { number: '02', title: 'برمجة الري', desc: 'أنظمة موجهة بـ GPS مبرمجة بمعدلات خاصة بناءً على التربة ومرحلة النمو.' },
      step3: { number: '03', title: 'المراقبة والتحسين', desc: 'تتبع صحة المحاصيل وتحسين لوجستيات الحصاد عبر صور NDVI وحساسات IoT.' },
    },
    sustainability: {
      sectionLabel: 'الاستدامة',
      headline: 'زراعة تحمي ما تعتمد عليه.',
      subtitle: 'إطار الاستدامة لدينا هو الأساس التشغيلي لكل ما نزرعه.',
      pillar1: { title: 'تدبير المياه', desc: 'بروتوكولات ري حققت توفيراً بنسبة 40% مقارنة بالزراعة التقليدية.' },
      pillar2: { title: 'صحة التربة', desc: 'تدوير المحاصيل وإدارة المادة العضوية للحفاظ على الإنتاجية.' },
      pillar3: { title: 'الحياد الكربوني', desc: 'التطبيق الدقيق ودورة الكولزا يعززان تخزين الكربون. هدف 2030.' },
      carbonCredits: { title: 'أرصدة الكربون (CO2)', desc: 'امتصاص ثاني أكسيد الكربون عبر الزراعات وتثمينه لفائدة الشركات لتعويض انبعاثاتها.' },
    },
    partners: {
      sectionLabel: 'شركاؤنا',
      headline: 'ثقة قادة الصناعة.',
    },
    testimonials: {
      sectionLabel: 'شهادات العملاء',
      headline: 'ما يقوله شركاؤنا.',
      t1: { quote: 'حققت AGROMETALIS GROUPE توفيراً بنسبة 68% في المياه مع الحفاظ على مردودية عالية.', name: 'كريم بنعلي', title: 'رئيس قسم الزراعة', company: 'SugarCo المغرب' },
      t2: { quote: 'غيّرت بيانات رسم خرائط التربة طريقة تعاملنا مع التسميد في عقود القمح.', name: 'سوفي مارشان', title: 'مديرة زراعية', company: 'GrainTrade International' },
      t3: { quote: 'إدارة الري بالمحور الأكثر تطوراً تقنياً التي رأيناها في شمال أفريقيا.', name: 'أحمد تازي', title: 'مدير الاستثمار', company: 'Agri-Corp Fund' },
    },
    contact: {
      sectionLabel: 'اتصل بنا',
      headline: 'لنبدأ محادثة.',
      subtitle: 'استكشف فرص الشراكة أو الاستثمار مع فريق خبرائنا.',
      namePlaceholder: 'الاسم الكامل', companyPlaceholder: 'الشركة',
      emailPlaceholder: 'البريد الإلكتروني', phonePlaceholder: 'رقم الهاتف',
      messagePlaceholder: 'أخبرنا عن مشروعك...',
      inquiryLabel: 'نوع الاستفسار',
      inquiryOptions: ['شراكة', 'استثمار', 'أرصدة كربون', 'أخرى'],
      submitBtn: 'إرسال الرسالة',
      phoneLabel: 'الهاتف', phone: '+212 661-490365',
      emailLabel: 'البريد الإلكتروني', email: 'agrometalisgroupe@gmail.com',
      hoursLabel: 'ساعات العمل', hours: 'الاثنين – الجمعة: 8:00 – 17:00\nالسبت: 8:00 – 13:00',
    },
    footer: {
      tagline: 'التميز agronomique. أداء مستدام.',
      quickLinks: 'روابط سريعة', cropsLabel: 'المحاصيل', technologyLabel: 'التكنولوجيا', legalLabel: 'قانوني',
      links: {
        home: 'الرئيسية', about: 'من نحن', sustainability: 'الاستدامة', contact: 'اتصل بنا',
        wheat: 'القمح', sugarbeet: 'الشمندر السكري', rapeseed: 'الكانولا',
        pivot: 'ري المحور', soilAnalysis: 'تحليل التربة', waterSaving: 'توفير المياه',
        privacy: 'الخصوصية', terms: 'الشروط', certifications: 'الشهادات',
      },
      copyright: '© 2025 AGROMETALIS GROUPE. جميع الحقوق محفوظة.',
      certLabel: 'الشهادات',
    },
  },
};