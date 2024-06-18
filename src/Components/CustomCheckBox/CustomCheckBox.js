import React, { useState } from "react";
import "./CustomCheckBox.css";

const CustomCheckBox = ({
  checkBoxWidth,
  checkBoxHeight,
  checkBoxFontSize,
  label,
  labelFontSize,
  labelColor,
  id,
  value,
  onChange,
  checked,
}) => {
  return (
    <div className="wrapper min-w-[370px]  max-w-[370px] min-h-[42px] flex items-center justify-between py-[8px] pr-[15px] pl-[22px]">
      <label
        htmlFor="checkbox"
        className={`checkboxLabel ${labelFontSize ? labelFontSize : "text-sm"} ${
          labelColor ? labelColor : "text-black"
        } `}
      >
        {label ? label : "Checkbox"}
      </label>
      <input
        type="checkbox"
        id={id}
        value={value}
        className={`${checkBoxWidth ? checkBoxWidth : "h-[25px]"} ${
          checkBoxHeight ? checkBoxHeight : "w-[25px]"
        } ${checkBoxFontSize ? checkBoxFontSize : "text-[24px]"} bg-[#ffff]`}
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        checked={checked}
      />
    </div>
  );
};

export default CustomCheckBox;
