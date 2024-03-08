import { Animated3dCard } from "./Animated3dCard";
import ksheeraj from "../../assets/images/xlabs_ksheeraj.jpeg";

const AnimatedServiceCard = () => {
  return (
    <Animated3dCard>
      <div className="group/card relative h-auto w-auto rounded-xl border border-white/[0.2] bg-black p-6 [transform-style:preserve-3d] hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:w-[30rem] [&>*]:[transform-style:preserve-3d]">
        <div
          className="w-fit text-xl font-bold text-white transition duration-200 ease-linear"
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
          }}
        >
          Make things float in air
        </div>
        <p
          className="mt-2 w-fit max-w-sm text-sm text-neutral-300 transition duration-200 ease-linear"
          style={{
            transform:
              " translateX(0px) translateY(0px) translateZ(60px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
          }}
        >
          Hover over this card to unleash the power of CSS perspective
        </p>
        <div
          className="mt-4 w-full transition duration-200 ease-linear"
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
          }}
        >
          <img
            alt="thumbnail"
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="h-60 w-full rounded-xl object-cover transition-transform duration-200 ease-linear hover:scale-110 group-hover/card:shadow-xl"
            src={ksheeraj}
            style={{ color: "transparent" }}
          />
        </div>
        <div className={"mt-20 flex items-center justify-between"}>
          <button
            className="w-fit rounded-xl px-4 py-2 text-xs font-normal text-white transition duration-200 ease-linear"
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(20px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
            }}
          >
            Try now →
          </button>
          <button
            className="w-fit rounded-xl bg-white px-4 py-2 text-xs font-bold text-black transition duration-200 ease-linear"
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(20px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </Animated3dCard>
  );
};

export default AnimatedServiceCard;
