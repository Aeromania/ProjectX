import { useAnimate } from "framer-motion";
import { ReactNode, useRef } from "react";
import BackgroundImage from "../assets/images/xlabs_servicesBackground.png";
import { twMerge } from "tailwind-merge";

export const ImageTrail = ({
  children,
  className,
  images,
  containerClassName
}: {
  children?: ReactNode;
  className?: string;
  images: string[];
  containerClassName?: string;
}) => {
  return (
    <MouseImageTrail renderImageBuffer={50} rotationRange={25} images={images}>
      <section
        className={twMerge(
          "relative flex w-full justify-center text-white sm:py-16 lg:min-h-dvh lg:justify-start lg:py-0",
          containerClassName
        )}
      >
        <img
          src={BackgroundImage}
          className="absolute top-0 -z-50 h-full w-full object-fill object-center"
        />
        <div
          className={twMerge(
            "flex h-full w-[90%] flex-col py-16 lg:w-[75%] lg:py-32 lg:pl-[10%] xl:w-[65%]",
            className
          )}
        >
          {children}
        </div>
      </section>
    </MouseImageTrail>
  );
};

type MouseImageTrailProps = {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange
}: MouseImageTrailProps) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`
        ]
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0]
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 !-z-10 hidden h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0 lg:block"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
