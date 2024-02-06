import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  const baseClassName =
    "w-[100%] px-[2px  py-[12px]  rounded-[8px] block font-[700]  transition-all duration-300 border-[1px] border-[#b5acff] outline-none text-[#fff]";
  return (
    <button className={`${baseClassName} ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
