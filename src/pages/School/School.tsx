import EncryptButton from "@/components/LockedButton";
import { WorkshopNavbar } from "@/components/WorkshopNavbar";
import { Outlet } from "react-router-dom";

const School: React.FC = (): React.JSX.Element => {
  return (
    <section className="flex min-h-dvh w-full flex-col bg-black text-white">
      <div className="mt-12 flex w-full items-center justify-center lg:mt-32">
        <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between">
          <div className="mb-6 flex flex-1 items-center justify-center lg:mb-0 lg:flex-col">
            <h1 className="text-center text-3xl leading-none sm:text-5xl lg:mr-0 lg:text-[5rem] xl:text-8xl 2xl:text-9xl">
              WORKSHOPS FOR <span className="text-red-500">SCHOOL</span>
            </h1>
          </div>
          <div className="flex w-[90%] flex-1 items-center justify-center lg:w-full">
            <p className="text-center text-xl font-light uppercase sm:text-3xl lg:text-start lg:text-base lg:font-normal xl:text-xl 2xl:text-2xl">
              Embark on an exciting learning adventure with our specialized
              workshops designed for school students. Explore the realms of
              connection, self-expression, and problem-solving in an environment
              that nurtures both personal and academic development.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-10 flex w-full items-center justify-center">
        <EncryptButton
          className="lg:absolute lg:left-[50%]"
          onClick={() => {}}
        />
      </div>
      <WorkshopNavbar />
      <Outlet />
    </section>
  );
};

export default School;
