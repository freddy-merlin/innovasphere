"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

const FormationsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Toutes les formations", icon: "" },
    { id: "tech", name: "Technologie & Numérique", icon: "" },
    { id: "business", name: "Management & Entreprise", icon: "" },
    { id: "finance", name: "Finance, Audit & RH", icon: "" },
    { id: "secteur", name: "Formations Sectorielles", icon: "" },
    { id: "autres", name: "Autres Formations", icon: "" },
  ];

  const formations = [
    // Technologie & Numérique
    {
      category: "tech",
      
      title: "Développement & Ingénierie",
      items: [
        "Développement web (HTML, CSS, JS)",
        "Backend (PHP/Laravel, Node.js, Python)",
        "Mobile (Flutter, React Native)",
        "APIs & microservices",
        "Git & GitHub",
        "Architecture logicielle"
      ],
      public: "Étudiants, développeurs, startups"
    },
    {
      category: "tech",
      
      title: "Data, IA & Automatisation",
      items: [
        "Data science & analyse de données",
        "Power BI, Excel, Python",
        "IA appliquée aux entreprises",
        "Machine Learning",
        "Power Automate, Zapier",
        "IA générative (ChatGPT, Copilot)"
      ],
      public: "Entreprises, décideurs, analystes"
    },
    {
      category: "tech",
       
      title: "Cybersécurité & Systèmes",
      items: [
        "Sécurité informatique",
        "Sécurisation des applications web",
        "Sécurité des données & RGPD",
        "Gestion des identités et accès",
        "Sensibilisation cybersécurité"
      ],
      public: "Entreprises, institutions, IT managers"
    },
    {
      category: "tech",
       
      title: "Cloud & Infrastructures",
      items: [
        "Cloud (Azure, AWS, GCP)",
        "Administration Linux",
        "DevOps (Docker, CI/CD)",
        "Hébergement & déploiement",
        "Monitoring & haute disponibilité"
      ],
      public: "Techniciens, ingénieurs systèmes"
    },
    {
      category: "tech",
       
      title: "Design & UX",
      items: [
        "UX/UI Design",
        "Design Thinking",
        "Prototypage (Figma)",
        "Accessibilité numérique"
      ],
      public: "Designers, product owners"
    },
    {
      category: "tech",
      
      title: "Marketing Digital",
      items: [
        "Stratégie marketing digital",
        "Réseaux sociaux & community management",
        "Création de contenu digital",
        "SEO & publicité en ligne",
        "Branding & identité visuelle"
      ],
      public: "Entrepreneurs, communicants, PME"
    },

    // Management & Entreprise
    {
      category: "business",
      
      title: "Gestion de Projet",
      items: [
        "Gestion de projet informatique",
        "Méthodes agiles (Scrum, Kanban)",
        "PMP / Prince2 (préparation)",
        "Pilotage de projets digitaux"
      ],
      public: "Chefs de projet, managers"
    },
    {
      category: "business",
      
      title: "Entrepreneuriat & Innovation",
      items: [
        "Création de startup",
        "Business model & levée de fonds",
        "Gestion d'entreprise numérique",
        "Transformation digitale",
        "Intelligence économique"
      ],
      public: "Entrepreneurs, incubateurs, PME"
    },

    // Finance, Audit & RH
    {
      category: "finance",
       
      title: "Ressources Humaines",
      items: [
        "Fondamentaux de la GRH",
        "Administration du personnel",
        "GPEC & gestion des carrières",
        "Gestion de la paie",
        "Recrutement digital & LinkedIn",
        "Ingénierie de la formation"
      ],
      public: "DRH, responsables RH"
    },
    {
      category: "finance",
      
      title: "Audit & Contrôle",
      items: [
        "Audit interne & organisationnel",
        "Audit des systèmes d'information",
        "Contrôle interne & risques",
        "Cartographie des risques",
        "Conformité & gouvernance",
        "Normes ISO, COSO"
      ],
      public: "Auditeurs, contrôleurs, ONG",
      highlight: "Très demandé par ONG et bailleurs"
    },
    {
      category: "finance",
       
      title: "Finance & Comptabilité",
      items: [
        "Comptabilité générale & analytique",
        "Analyse financière",
        "Gestion budgétaire",
        "Finance de projets",
        "Procédures des bailleurs",
        "Reporting financier"
      ],
      public: "Comptables, contrôleurs financiers"
    },

    // Formations Sectorielles
    {
      category: "secteur",
      
      title: "Administration Publique",
      items: [
        "E-gouvernement",
        "Dématérialisation des services publics",
        "GED/GEC",
        "Open data & systèmes d'information"
      ],
      public: "Administrations, collectivités",
      highlight: "Formations stratégiques bailleurs"
    },
    {
      category: "secteur",
      icon: "",
      title: "Énergie & Environnement",
      items: [
        "Digitalisation des réseaux électriques",
        "Monitoring production & distribution",
        "SIG & cartographie",
        "Smart cities",
        "Gestion des données environnementales"
      ],
      public: "Secteur énergie, environnement"
    },
    {
      category: "secteur",
       
      title: "Éducation & Formation",
      items: [
        "E-learning & plateformes LMS",
        "Ingénierie pédagogique numérique",
        "Création de contenus de formation",
        "IA dans l'éducation"
      ],
      public: "Formateurs, établissements"
    },

    // Autres formations
    {
      category: "autres",
      
      title: "Juridique & Conformité",
      items: [
        "Droit des affaires",
        "Marchés publics",
        "RGPD & protection des données",
        "Droit des contrats"
      ],
      public: "Juristes, compliance officers"
    },
    {
      category: "autres",
       
      title: "Qualité & HSE",
      items: [
        "ISO 9001",
        "HSE / QHSE",
        "Amélioration continue",
        "Audit qualité"
      ],
      public: "Responsables qualité, HSE"
    },
    {
      category: "autres",
      
      title: "Logistique & Supply Chain",
      items: [
        "Supply chain",
        "Achats & stocks",
        "Logistique humanitaire",
        "Gestion des fournisseurs"
      ],
      public: "Logisticiens, ONG"
    },
    {
      category: "autres",
      
      title: "Développement & ONG",
      items: [
        "Gestion de projets de développement",
        "Suivi-évaluation (MEAL)",
        "Cadre logique",
        "Reporting bailleurs"
      ],
      public: "ONG, projets de développement",
      highlight: "Très demandé par bailleurs"
    },
  ];

  const filteredFormations = activeCategory === "all" 
    ? formations 
    : formations.filter(f => f.category === activeCategory);

  return (
    <>
      <Breadcrumb
        pageName="Nos Formations"
        description="Développez vos compétences avec nos formations professionnelles en technologie, management, finance et développement."
      />
      
      {/* Section Filtres */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-0 z-10 shadow-md">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white dark:bg-black text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formations */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {categories.find(c => c.id === activeCategory)?.name || "Nos Formations"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {filteredFormations.length} formation{filteredFormations.length > 1 ? "s" : ""} disponible{filteredFormations.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-xl shadow-lg dark:shadow-gray-800/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{formation.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {formation.title}
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {formation.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-primary mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {formation.highlight && (
                  <div className="mb-3 px-3 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <p className="text-xs font-semibold text-yellow-800 dark:text-yellow-200">
                      ⭐ {formation.highlight}
                    </p>
                  </div>
                )}

                <p className="text-xs text-primary dark:text-primary-light font-semibold">
                  👥 {formation.public}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formations Certifiantes */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Préparez vos Certifications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Nous vous accompagnons dans l'obtention de certifications reconnues internationalement
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-black rounded-2xl shadow-2xl dark:shadow-gray-800/50 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Microsoft", desc: "Azure, Power Platform, M365" },
                  { name: "Google", desc: "Cloud, Analytics, Workspace" },
                  { name: "AWS", desc: "Solutions Architect, Developer" },
                  { name: "Scrum", desc: "PSM, PSPO, Agile" },
                  { name: "ITIL", desc: "Foundation, Practitioner" },
                  { name: "PMP", desc: "Project Management Professional" }
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="group relative p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Soft Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Compétences Transversales
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Des formations essentielles pour développer vos compétences comportementales et professionnelles
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { skill: "Bureautique avancée", icon: "💼" },
                { skill: "Communication professionnelle", icon: "💬" },
                { skill: "Leadership & management", icon: "👔" },
                { skill: "Travail collaboratif", icon: "🤝" },
                { skill: "Intelligence émotionnelle", icon: "🧠" },
                { skill: "Éthique numérique", icon: "⚖️" }
              ].map((item) => (
                <div
                  key={item.skill}
                  className="group bg-white dark:bg-black p-6 rounded-xl shadow-lg dark:shadow-gray-800/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-primary"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform"></span>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.skill}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Besoin d'une Formation Sur Mesure ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Contactez-nous pour créer un programme de formation adapté à vos besoins
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <a
              href="/contact"
              className="block w-full text-center bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            >
              Demander un Devis de Formation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationsPage;