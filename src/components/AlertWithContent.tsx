import React, { SetStateAction, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

type AlertWithContentProps = {
  open: string | undefined;
  setOpen: React.Dispatch<SetStateAction<string | undefined>>;
};

export const AlertWithContent: React.FC<AlertWithContentProps> = ({
  open,
  setOpen
}): React.JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      setOpen(undefined);
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {open && (
        <div className="absolute bottom-5 left-1/2 flex w-1/2 -translate-x-1/2 items-center justify-center rounded-lg bg-green-600 px-4 py-3 text-white transition-all duration-300 ease-in-out">
          <div className="relative flex w-full items-center justify-center">
            <h1 className="text-center text-lg">{open}</h1>
            <IoMdClose
              size={30}
              color="gray"
              onClick={() => setOpen(undefined)}
              className="absolute right-2 cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
};
