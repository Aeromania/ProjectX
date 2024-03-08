import AnimatedServiceCard from "@/components/Cards/InternshipCard";

const Services = () => {
  return (
    <section className="min-h-dvh w-full bg-black text-white">
      <div className="flex w-full justify-between lg:px-14 lg:py-10">
        <div className="flex flex-1 flex-col justify-center">
          <div>
            <h1 className="font-sans text-white lg:text-7xl lg:font-bold">
              Our <br />
              Service
            </h1>
            <h3 className="font-sans text-white lg:text-4xl lg:font-semibold">
              We Provide <span className="text-sky-500">The Best</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center text-[#C6C6C6]">
            Our focus is on providing exceptional core services with a dedicated
            commitment to excellence.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:px-32">
        <AnimatedServiceCard />
      </div>
    </section>
  );
};

export default Services;
