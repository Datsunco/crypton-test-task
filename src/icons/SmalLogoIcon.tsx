//react, next
import React from "react";

//types
import { IconProps } from "@/models/icons";

export const SmalLogoIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      className={props?.className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="6.5"
        fill="white"
        stroke="black"
      />
      <line x1="4" y1="35.5" x2="36" y2="35.5" stroke="black" />
      <path
        d="M10.2 32V30.28L13.52 29.6V8.48L10.2 7.8V6.08H28.52V12.64H26.56L25.72 8.28H20.88L16.96 8.52V17.68H23.28L23.88 15.32H25.56V22.16H23.88L23.28 19.8H16.96V29.28C17.4667 29.4133 18.1333 29.52 18.96 29.6C19.7867 29.68 20.5867 29.72 21.36 29.72H26.04L26.92 25.44H28.88V32H10.2Z"
        fill="#A234A6"
      />
    </svg>
  );
};
