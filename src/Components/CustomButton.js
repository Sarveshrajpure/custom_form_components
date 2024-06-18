import React from "react";

const CustomButton = ({
  width,
  height,
  backgroundColor,
  backgroundColorOnHover,
  paddingLeftRight,
  paddingTopBottom,
  borderRadius,
  title,
  fontSize,
}) => {
  return (
    <div>
      <button
        className={`${width ? width : "w-[100px]"} ${height ? height : ""}
        ${paddingLeftRight ? paddingLeftRight : "px-[10px]"} 
        ${paddingTopBottom ? paddingTopBottom : "py-[5px]"}
        ${borderRadius ? borderRadius : "rounded-[5px]"}
        ${fontSize ? fontSize : "text-sm"}
        ${backgroundColor ? backgroundColor : "bg-blue-400"}
        ${backgroundColorOnHover ? backgroundColorOnHover : "hover:bg-blue-300"}
         hover:transition-colors hover:duration-200
`}
      >
        {title ? title : "Submit"}
      </button>
    </div>
  );
};

export default CustomButton;
