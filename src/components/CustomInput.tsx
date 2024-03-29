import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  className,
  ...props
}): React.JSX.Element => {
  return (
    <>
      <input
        className={twMerge(
          "my-1 flex text-wrap rounded-md border-b border-neutral-700 bg-transparent px-3 py-2 text-base shadow-sm transition-colors file:cursor-pointer file:rounded-md file:bg-[#242424] file:text-muted-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input",
          className
        )}
        {...props}
      />
    </>
  );
};
