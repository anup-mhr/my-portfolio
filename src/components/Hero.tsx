import { Bio } from "../data/constants";
import HeroBgAnimation from "./HeroBgAnimation";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative z-[1] flex justify-center bg-card-light px-[30px] py-20 [clip-path:polygon(0_0,100%_0,100%_100%,70%_95%,0_100%)] max-tab:px-4 max-tab:py-[66px]"
    >
      <div className="absolute top-1/2 left-1/2 flex h-full w-full max-w-[1360px] -translate-x-1/2 -translate-y-1/2 justify-end overflow-hidden px-[30px] max-tab:justify-center max-tab:px-0">
        <HeroBgAnimation />
      </div>

      <div className="relative flex w-full max-w-[1100px] items-center justify-between max-tab:flex-col">
        <div className="order-1 w-full max-tab:order-2 max-tab:mb-[30px] max-tab:flex max-tab:flex-col max-tab:items-center">
          <h1 className="text-[50px] leading-[68px] font-bold text-fg max-tab:text-center max-sm:mb-2 max-sm:text-[40px] max-sm:leading-[48px]">
            Hi, I am <br /> {Bio.name}
          </h1>
          <p className="flex gap-3 text-[32px] leading-[68px] font-semibold text-fg max-tab:text-center max-sm:mb-4 max-sm:text-[22px] max-sm:leading-[48px]">
            I am a
            <span className="text-primary">
              <Typewriter words={Bio.roles} />
            </span>
          </p>
          <p className="mb-[42px] text-xl leading-8 text-fg/[.58] max-tab:text-center max-sm:text-base">
            {Bio.description}
          </p>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-gradient inline-block w-[95%] max-w-[300px] rounded-[20px] py-4 text-center text-xl font-semibold text-white shadow-[20px_20px_60px_#1F2634,-20px_-20px_60px_#1F2634] transition-all duration-200 hover:scale-105 max-sm:py-3 max-sm:text-lg"
          >
            Download Resume
          </a>
        </div>

        <div className="order-2 flex w-full justify-end gap-3 max-tab:order-1 max-tab:mb-20 max-tab:items-center max-tab:justify-center max-sm:mb-[30px]">
          <img
            src="/assets/Anup.jpg"
            alt={Bio.name}
            className="relative h-full max-h-[400px] w-full max-w-[400px] rounded-full border-2 border-primary max-sm:max-h-[280px] max-sm:max-w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
