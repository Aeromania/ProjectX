import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const CustomInput: React.FC<CustomInputProps> = (
  props,
  { className }
): React.JSX.Element => {
  return (
    <>
      <input
        {...props}
        className={twMerge(
          "my-1 flex w-full text-wrap rounded-md border border-neutral-700 bg-[#242424] px-3 py-2 text-base shadow-sm transition-colors file:bg-[#242424] file:text-muted-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input",
          className
        )}
      />
    </>
  );
};
