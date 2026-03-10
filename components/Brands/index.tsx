import { Brand } from "@/types/brand";

const brandsData: Brand[] = [
  { id: 1, name: "CGTS", href: "#", image: "/images/brands/Logo_CGTS.jpg" },
  { id: 2, name: "Matanti", href: "#", image: "/images/brands/Logo_Matanti.jpg" },
  { id: 3, name: "SOS", href: "#", image: "/images/brands/Logo-SOS-new.png" },
  { id: 4, name: "LTG Conseil", href: "#", image: "/images/brands/LTG_Conseil_Logo.svg" },
  { id: 5, name: "PNHG", href: "#", image: "/images/brands/71356-pnhg.jpg" },
  { id: 6, name: "NSIA Banque", href: "#", image: "/images/brands/nsia_banque.jpg" },
  { id: 7, name: "Major", href: "#", image: "/images/brands/major.jpeg" },
  { id: 8, name: "SCB", href: "#", image: "/images/brands/scb1.jpeg" },
  { id: 9, name: "ProximaJob", href: "#", image: "/images/brands/proximajob.png" },
  { id: 10, name: "Nocibe", href: "#", image: "/images/brands/Logo_Nocibe.jpg" },
];

const Brands = () => {
  const firstRow = brandsData.slice(0, 5);
  const secondRow = brandsData.slice(5, 10);

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-col items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              <div className="w-full text-center mb-10">
                <h3 className="text-2xl font-bold text-white dark:text-white mb-2">
                  Nos Partenaires & Clients
                </h3>
                <p className="text-white dark:text-white mb-2">
                  Ils nous font confiance pour leurs solutions IT
                </p>
              </div>

              {/* Première ligne : 5 logos */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 mb-6 w-full place-items-center">
                {firstRow.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>

              {/* Deuxième ligne : 5 logos */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 w-full place-items-center">
                {secondRow.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-3 shadow-md opacity-70 transition hover:opacity-100 hover:shadow-lg dark:bg-gray-800 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
        title={name}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full"
        />
      </a>
    </div>
  );
};