import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:mr-50 lg:ml-50 md:mr-10 md:ml-10 mt-0 md:mt-20">
      <div className="flex flex-col justify-center items-center gap-2 md:gap-5 mb-8 md:-mt-10">
        <h1 className="text-[#8a0808] font-bold text-2xl lg:text-5xl text-center">
          Your PTE Success Starts Here
        </h1>
        <h1 className="font-bold lg:text-3xl text-center">
          Smart practice powered by AI!
        </h1>
        <h1 className="font-semibold text-xs md:text-xl text-center">
          Realistic mock tests, and instant feedback to improve faster and score
          higher.
        </h1>
      </div>
      <div
        className="mx-auto relative   rounded-3xl   md:py-0"
        style={{
          backgroundImage: "url('/hero/banner.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="grid md:items-center lg:items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
          {/* IMAGE */}
          <div className="md:hidden lg:flex hidden justify-center lg:justify-start">
            <Image
              src="/hero/girl.png"
              alt="Student"
              width={420}
              height={620}
              priority
              className="
                w-98
                sm:w-64
                md:w-102
                lg:w-196
                xl:w-[530px]
                -mt-15
              "
            />
          </div>

          {/* CONTENT */}
          <div className="text-center lg:text-left text-white p-5">
            <h1 className="text-3xl pt-20 md:pt-20 lg:pt-0 font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-6xl">
              Excel in Your PTE Exam <br />
              <span className="text-white/90">with Advanced AI Scoring</span>
            </h1>

            <p className="mt-7 md:mt-7 lg:mt-4 text-sm sm:text-sm md:text-base lg:text-lg text-white/90">
              Boost your performance with real-time feedback and realistic mock
              tests, and maximize your results.
            </p>

            <div className="mt-10 lg:mb-0 md:mb-10 mb-20 md:mt-10 flex flex-col gap-4 md:gap-8 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/pricing"
                className="cursor-pointer px-16 py-3 rounded-lg text-white bg-gradient-to-b from-[#EF5634] to-[#5A0000] hover:from-[#5A0000] hover:to-[#5A0000]  text-center transition-all duration-500 ease-in-out hover:text-white inline-block"
              >
                Get Started Today
              </Link>

              <Link
                href="/features"
                className="cursor-pointer px-16 py-3 rounded-lg text-white bg-gradient-to-b from-[#EF5634] to-[#5A0000] hover:from-[#5A0000] hover:to-[#5A0000]  text-center transition-all duration-500 ease-in-out hover:text-white inline-block"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute right-0 top-0 h-32 w-32 sm:h-40 sm:w-40 rounded-bl-[80px] bg-white/10" />
    </section>
  );
};

export default Hero;
