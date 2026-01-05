import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos Services"
        description="Découvrez notre gamme complète de services informatiques : développement, solutions Power Apps, consulting et formations professionnelles."
      />
      
      {/* Section Services détaillés */}
      <Features />
      
      {/* Section Notre Approche */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Notre Processus d'Intervention
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl dark:text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Analyse des besoins</h3>
              <p className="text-gray-600 dark:text-gray-300">Audit de vos processus et définition des objectifs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl dark:text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Conception sur mesure</h3>
              <p className="text-gray-600 dark:text-gray-300">Architecture technique et proposition de solution</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl dark:text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Développement & Intégration</h3>
              <p className="text-gray-600 dark:text-gray-300">Implémentation et tests de la solution</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl dark:text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Support & Formation</h3>
              <p className="text-gray-600 dark:text-gray-300">Accompagnement et transfert de compétences</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Notre Approche (déjà existante) */}
      <AboutSectionTwo />
      
      {/* Section Formations (optionnelle) */}
{/*<section className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="container">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Formations Complémentaires
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
        Pour aller plus loin, formez vos équipes aux technologies que nous mettons en œuvre
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg dark:shadow-lg dark:shadow-gray-800/50">
        <div className="text-4xl mb-4 dark:text-white">🎓</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Formation Power Apps</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Maîtrisez la création d'applications low-code pour automatiser vos processus métiers.</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">Bases de Power Apps</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">Connecteurs et données</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">Déploiement et gestion</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg dark:shadow-lg dark:shadow-gray-800/50">
        <div className="text-4xl mb-4 dark:text-white">💻</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Formation React & Node.js</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Développez des applications web modernes avec les technologies les plus demandées.</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">React.js et composants</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">API REST avec Node.js</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">Base de données MongoDB</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg dark:shadow-lg dark:shadow-gray-800/50">
        <div className="text-4xl mb-4 dark:text-white">🚀</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">DevOps & Cloud</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Apprenez à déployer et gérer vos applications dans le cloud avec les bonnes pratiques DevOps.</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">Docker et conteneurisation</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">CI/CD avec GitHub Actions</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary dark:text-primary-light mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-200">Déploiement AWS/Azure</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>*/}
      
      {/* Section Contact pour demande de devis */}
      <section id="contact-services" className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Besoin d'un Devis Personnalisé ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet ou de vos besoins en formation
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <a
              href="/contact"
              className="block w-full text-center bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-lg text-lg font-semibold transition duration-300"
            >
              Demander un Devis
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;