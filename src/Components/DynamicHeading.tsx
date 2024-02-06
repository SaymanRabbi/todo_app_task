import React, { ReactNode } from "react";
interface TitleProps {
  children: ReactNode;
  className?: string;
}

const DynamicHeading: React.FC<TitleProps> = ({ children, className }) => {
    return <div className={`pb-[20px] font-[700] lg:text-[64px] text-[50px] leading-[82px] capitalize text-[#b5acff] text-center ${className}`}>{children}</div>;
};

export default DynamicHeading;