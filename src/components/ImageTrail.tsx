import { useAnimate } from "framer-motion";
import { ReactNode, useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import Astronaut from "../assets/images/astronaut.svg";
import one from "../assets/images/xlabs_3dprinting-3.jpeg";
import two from "../assets/images/xlabs_aircraftDesign-1.png";
import three from "../assets/images/xlabs_aircraftDesign-1.png";
import four from "../assets/images/xlabs_waterRocketryLandingFull.png";
import five from "../assets/images/xlabs_visionIcon.png";

export const ImageTrail = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        Astronaut,
        one,
        two,
        three,
        four,
        five,
        Astronaut,
        one,
        two,
        three,
        four,
        five,
        Astronaut,
        one,
        two
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-black">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
          <FiMousePointer />
          <span>Hover me</span>
        </p>
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
      { ease: "linear", duration: 0.5, delay: 5 }
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
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
