import { useRef, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type EncryptButtonProps = {
  className?: string;
  onClick: () => void;
  title?: string;
  showIcon?: boolean;
  animationHidden?: boolean;
  customAnimationColor?: string;
  animation?: string;
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

// const CHARS = "!@#$%^&*():{};|,.<>/?";
const CHARS = "TCATNOC^&*():{};|,.<>/?SU";

const EncryptButton: React.FC<EncryptButtonProps> = ({
  className,
  onClick,
  title = "Contact Us",
  showIcon = true,
  animationHidden = false,
  customAnimationColor,
  animation
}): React.JSX.Element => {
  const intervalRef = useRef(null);
  const TARGET_TEXT = title;

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    // @ts-expect-error "types not available"
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025
      }}
      whileTap={{
        scale: 0.975
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={twMerge(
        "group relative w-[60%] overflow-hidden rounded-lg border border-input py-2 font-mono font-medium uppercase text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-300 lg:w-fit lg:px-4 xl:px-6 xl:py-3",
        className
      )}
      onClick={onClick}
      data-aos={animation && animation}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {showIcon && <FaRegEnvelope />}
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%"
        }}
        animate={{
          y: "-100%"
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear"
        }}
        className={twMerge(
          "absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-sky-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          animationHidden ? "hidden" : "",
          customAnimationColor
        )}
      />
    </motion.button>
  );
};

export default EncryptButton;
