import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "CGTS",
    href: "#",
    image: "/images/brands/Logo_CGTS.jpg",
  },
  {
    id: 2,
    name: "Matanti",
    href: "#",
    image: "/images/brands/Logo_Matanti.jpg",
  },
  {
    id: 3,
    name: "SOS",
    href: "#",
    image: "/images/brands/Logo-SOS-new.png",
  },
  {
    id: 4,
    name: "LTG Conseil",
    href: "#",
    image: "/images/brands/LTG_Conseil_Logo.svg",
  },
  {
    id: 5,
    name: "PNHG",
    href: "#",
    image: "/images/brands/71356-pnhg.jpg",
  },
  {
    id: 6,
    name: "NSIA Banque",
    href: "#",
    image: "/images/brands/nsia_banque.jpg",
  },
  {
    id: 7,
    name: "Major",
    href: "#",
    image: "/images/brands/major.jpeg",
  },
  {
    id: 8,
    name: "SCB",
    href: "#",
    image: "/images/brands/scb1.jpeg",
  },
  {
    id: 9,
    name: "ProximaJob",
    href: "#",
    image: "/images/brands/proximajob.png",
  },
  {
    id: 10,
    name: "Nocibe",
    href: "#",
    image: "/images/brands/Logo_Nocibe.jpg",
  },
];

const Brands = () => {
  const firstRow = brandsData.slice(0, 5); // Premiers 5 logos
  const secondRow = brandsData.slice(5, 10); // 5 logos suivants

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
                <h3 className="text-2xl font-bold text-white dark:text-dark mb-2">
                  Nos Partenaires & Clients
                </h3>
                <p className="text-gray-300 text-white dark:text-dark mb-2">
                  Ils nous font confiance pour leurs solutions IT
                </p>
              </div>
              
              {/* Première ligne : 5 logos */}
              <div className="flex flex-wrap justify-center mb-8">
                {firstRow.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
              
              {/* Deuxième ligne : 5 logos */}
              <div className="flex flex-wrap justify-center">
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
    <div className="mx-3 mb-6 flex items-center justify-center sm:mx-4 lg:mx-5 xl:mx-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative flex h-20 w-20 items-center justify-center rounded-lg bg-white p-2 shadow-md opacity-70 transition hover:opacity-100 hover:shadow-lg dark:bg-gray-800 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
        title={name}
      >
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
          />
        </div>
      </a>
    </div>
  );
};