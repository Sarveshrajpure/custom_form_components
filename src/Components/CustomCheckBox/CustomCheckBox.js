import React from "react";
import "./CustomCheckBox.css";

const CustomCheckBox = ({
  checkBoxWidth,
  checkBoxHeight,
  checkBoxFontSize,
  label,
  labelFontSize,
  labelColor,
}) => {
  return (
    <div className="wrapper min-w-[370px]  max-w-[370px] min-h-[42px] flex items-center justify-between py-[8px] pr-[15px] pl-[22px]">
      <label
        for="checkbox"
        className={`checkboxLabel ${labelFontSize ? labelFontSize : "text-sm"} ${
          labelColor ? labelColor : "text-black"
        } `}
      >
        {label ? label : "Checkbox"}
      </label>
      <input
        type="checkbox"
        className={`${checkBoxWidth ? checkBoxWidth : "h-[25px]"} ${
          checkBoxHeight ? checkBoxHeight : "w-[25px]"
        } ${checkBoxFontSize ? checkBoxFontSize : "text-[24px]"} bg-[#ffff]`}
      />
    </div>
  );
};

export default CustomCheckBox;
