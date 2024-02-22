import { useNavigate } from "react-router-dom";
import EncryptButton from "@/components/EncryptButton";
import { WorkshopNavbar } from "@/components/Navbars/WorkshopNavbar";
import { Outlet } from "react-router-dom";
import { NavRoutes } from "@/components/constants";
import { WorkshopForUniversityRoute } from "../WorkshopRoutesData";

const University: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="flex min-h-dvh w-full flex-col bg-black text-white">
      <div className="pb-28">
        <div
          className="flex w-full items-center justify-center pt-12 lg:pt-32"
          data-aos="fade-down"
          data-aos-once={true}
        >
          <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between">
            <div className="mb-6 flex flex-1 items-center justify-center lg:mb-0 lg:flex-col">
              <h1 className="text-center text-3xl leading-none sm:text-5xl lg:mr-0 lg:text-[4.5rem] xl:text-7xl 2xl:text-8xl">
                WORKSHOPS FOR <span className="text-red-500">UNIVERSITY</span>
              </h1>
            </div>
            <div className="flex w-[90%] flex-1 items-center justify-center lg:w-full">
              <p className="text-xl font-light uppercase sm:text-center sm:text-3xl lg:text-start lg:text-base lg:font-normal xl:text-lg 2xl:text-2xl">
                Welcome to our dynamic workshops tailored for university
                students! These sessions are designed to facilitate meaningful
                connections, empower self-expression, and sharpen
                problem-solving skills. Join us in this engaging journey of
                personal and academic growth.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative mt-10 flex w-full items-center justify-center"
          data-aos="fade-left"
          data-aos-once={true}
        >
          <EncryptButton
            className="rounded-none tracking-widest hover:border-red-500 hover:text-red-500 lg:absolute lg:left-[50%]"
            onClick={() => navigate("/" + NavRoutes.CONTACT_US)}
            title="Contact Us"
          />
        </div>
      </div>
      <div className="w-full pt-16">
        <WorkshopNavbar
          initialRoute={WorkshopForUniversityRoute[0]}
          NavRoutes={WorkshopForUniversityRoute}
          className="lg:text-xl xl:text-2xl"
        />
        <Outlet />
      </div>
    </section>
  );
};

export default University;
