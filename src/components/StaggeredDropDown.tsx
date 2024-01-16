import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type staggeredDropDownProps = {
  title: string;
  setActiveRoute: Dispatch<SetStateAction<string | null>>;
  routeName: string[];
};

const StaggeredDropDown: React.FC<staggeredDropDownProps> = ({
  title,
  routeName,
  setActiveRoute
}): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const checkIsActive = () => {
    return open ? "scale-x-1" : "scale-x-0";
  };

  return (
    <div className="flex items-center justify-center bg-transparent py-1 md:py-0">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative"
        ref={dropdownRef}
      >
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="group flex items-center gap-2 rounded-md bg-transparent text-white transition-colors"
        >
          <span className="font-sans text-base font-normal">
            {title}
            <span
              className={twMerge(
                "inset-x-0 -bottom-1 hidden h-0.5 scale-x-0 bg-sky-600 font-sans text-lg font-normal transition-all duration-300 group-hover:origin-center group-hover:scale-x-100 group-hover:transform md:absolute md:inline",
                checkIsActive()
              )}
            />
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          key={title}
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="absolute left-[80%] top-[200%] z-50 flex w-48 flex-col gap-2 overflow-hidden rounded-lg bg-neutral-700 py-1 md:bg-white md:shadow-sm md:shadow-sky-600"
        >
          {routeName.map((route) => (
            <Option
              key={route}
              text={route}
              onClick={() => {
                setActiveRoute(route);
                setOpen(false);
                navigate(route);
              }}
            />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap text-sm font-normal text-white transition-colors hover:bg-sky-600 hover:text-white md:text-slate-700"
    >
      <span className="px-4 py-2">{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren"
    }
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren"
    }
  }
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 }
};
