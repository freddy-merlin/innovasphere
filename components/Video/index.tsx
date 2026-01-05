"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Notre Expertise en Action"
          paragraph="Découvrez nos réalisations et témoignages clients. Innovasphere transforme les défis digitaux en opportunités de croissance."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image 
                  src="/images/video/Réunion.png" 
                  alt="Innovasphere - Démonstration de nos solutions" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="text-center text-white">
                    <h3 className="mb-4 text-2xl font-bold">Nos Réalisations</h3>
                    <p className="max-w-md">Solutions sur mesure pour entreprises et formations certifiantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;