import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="py-2
     px-4 
     bg-secondary 
     text-primary 
     rounded-md 
     uppercase 
     font-bold 
     text-base 
     transition-all
     hover:bg-[#1aa762]
     cursor-pointer
     disabled:pointer-events-none
     disable:opacity-50
     "
    >
      {children}
    </button>
  );
};
export default Button;
