import { ArrowUpRight, PlayCircle } from "lucide-react";
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

const Hero = () => {
  return (
    <section
      id="main"
      className="hero container-full lg:container mx-auto transition-all duration-300"
    >
      <div className="relative flex justify-center items-center">
        <img
          src="/images/imgHero.png"
          className=" rounded-none lg:rounded-2xl  h-[80vh] md:h-[85vh] object-cover"
          alt="imgHero"
        />
        <div className="absolute w-full lg:bottom-0 lg:p-10 flex flex-col gap-4 items-start p-4 lg:items-start">
          <h1 className="text-start lg:text-start text-5xl lg:text-6xl font-semibold w-full sm:w-2/3">
            Bsoft- Information technology school
          </h1>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full">
            <p className="w-3/4 lg:w-1/2 text-xs lg:text-sm text-start lg:text-start">
              Освойте фундаментальные навыки IT вместе с нашей школой!
            </p>
            <div className="hero-btns flex gap-4 text-xs">
              <button
                className="bg-white rounded-lg p-2 flex items-center text-black gap-1 hover:bg-black hover:text-white transition duration-500"
                onClick={scrollToBottom}
              >
                <ArrowUpRight className="w-4 h-4" />
                Связатся с Нами
              </button>
              <a
                href="https://youtu.be/R14ANa2IBps?si=p0qszU4YHjxjlPgn"
                className="border rounded-lg p-2 flex items-center gap-2 hover:bg-white hover:text-black duration-500"
              >
                <button>
                  <PlayCircle />
                  Посмотреть промо-ролик
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
