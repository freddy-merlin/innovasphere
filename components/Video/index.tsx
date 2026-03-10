"use client";

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
              <div className="relative aspect-[77/40]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/video/reunion.png"
                  alt="Innovasphere - Démonstration de nos solutions"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30" />
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