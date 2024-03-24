import React, { SetStateAction, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

type ToastProps = {
  toastMessage: string | undefined;
  setToastMessage: React.Dispatch<SetStateAction<string | undefined>>;
  className?: string;
};

export const Toast: React.FC<ToastProps> = ({
  toastMessage,
  setToastMessage,
  className
}): React.JSX.Element => {
  const dismissToast = () => {
    setTimeout(() => {
      setToastMessage(undefined);
    }, 3000);
  };

  useEffect(() => {
    if (toastMessage) {
      dismissToast();
    }
  }, [toastMessage]);

  return (
    <>
      <div
        className={twMerge(
          "fixed bottom-5 -z-50 flex w-[80%] items-center justify-center rounded-xl border-t border-sky-500 bg-black py-3 pl-8 pr-3 text-white shadow-sm shadow-sky-500 transition-all duration-500 ease-in-out lg:w-fit",
          toastMessage ? "left-1/2 z-30 -translate-x-1/2" : "right-[150%]",
          className
        )}
      >
        <div className="relative flex w-full items-center justify-center">
          <h1 className="text-center lg:text-lg">{toastMessage}</h1>
          <IoMdClose
            size={20}
            onClick={() => setToastMessage(undefined)}
            className="ml-6 cursor-pointer text-gray-200 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
          />
        </div>
      </div>
    </>
  );
};
