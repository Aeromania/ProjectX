import React, { SetStateAction, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

type ToastProps = {
  open: string | undefined;
  setOpen: React.Dispatch<SetStateAction<string | undefined>>;
  className?: string;
};

export const Toast: React.FC<ToastProps> = ({
  open,
  setOpen,
  className
}): React.JSX.Element => {
  useEffect(() => {
    const dismissToast = () => {
      setTimeout(() => {
        setOpen(undefined);
      }, 3000);
    };
    if (open) {
      dismissToast();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div
        className={twMerge(
          "fixed bottom-5 -z-50 flex items-center justify-center rounded-xl border-t border-sky-500 bg-black py-3 pl-8 pr-3 text-white shadow-sm shadow-sky-500 transition-all duration-500 ease-in-out",
          open ? "left-1/2 z-30 -translate-x-1/2" : "right-[150%]",
          className
        )}
      >
        <div className="relative flex w-full items-center justify-center">
          <h1 className="text-center text-lg">{open}</h1>
          <IoMdClose
            size={20}
            onClick={() => setOpen(undefined)}
            className="ml-6 cursor-pointer text-gray-200 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
          />
        </div>
      </div>
    </>
  );
};
