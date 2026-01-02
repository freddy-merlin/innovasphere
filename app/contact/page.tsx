import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez Innovasphere"
        description="Discutons de vos projets digitaux et besoins en formation. Notre équipe d'experts vous répond dans les plus brefs délais."
      />
      <Contact />
    </>
  );
};

export default ContactPage;