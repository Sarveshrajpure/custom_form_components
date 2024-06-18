import React, { useState } from "react";
import CustomButton from "../Components/CustomButton";
import CustomCheckBox from "../Components/CustomCheckBox/CustomCheckBox";

let checkBoxes = [
  { id: 1, label: "Page 1", value: "page1" },
  { id: 2, label: "Page 2", value: "page2" },
  { id: 3, label: "Page 3", value: "page3" },
  { id: 4, label: "Page 4", value: "page4" },
];

const HomePage = () => {
  const [selectedCheckBox, setSelectedCheckBox] = useState([]);
  const [selectAllCheckBox, setSelectAllCheckBox] = useState(false);
  console.log(selectedCheckBox);
  const handleChange = (e) => {
    let checkBoxValue = e.target.value;
    let checked = e.target.checked;
    if (checked === true) {
      setSelectedCheckBox((prev) => [...prev, checkBoxValue]);
    }

    if (checked === false) {
      setSelectAllCheckBox(false);
      setSelectedCheckBox(selectedCheckBox.filter((item) => item !== checkBoxValue));
    }
  };

  const handleCheckAllPages = (e) => {
    let checked = e.target.checked;
    setSelectAllCheckBox(checked);

    if (checked === true) {
      let newlySelectedCheckBoxes = [];

      checkBoxes.map((item) => newlySelectedCheckBoxes.push(item.value));

      setSelectedCheckBox(newlySelectedCheckBoxes);
    }

    if (checked === false) {
      setSelectedCheckBox([]);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div
        className="wrapper  py-[10px] w-max border-radius-[6px] 
       shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-md"
      >
        <div className="formWrapper">
          <CustomCheckBox
            label={"All pages"}
            value="allPages"
            checked={selectAllCheckBox}
            onChange={(e) => {
              handleCheckAllPages(e);
            }}
          />
          <div className="flex justify-center py-2.5 px-[15px]">
            <div className="border border-[#CDCDCD] w-[340px] " />
          </div>
          <div className="">
            {checkBoxes.map((item, index) => (
              <CustomCheckBox
                key={item.id}
                label={item.label}
                id={item.id}
                value={item.value}
                width={"w-[23px]"}
                height={"w-[23px]"}
                checked={selectedCheckBox.includes(item.value)}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            ))}
          </div>
          <div className="flex justify-center py-2.5 px-[15px]">
            <div className="border border-[#CDCDCD] w-[340px]" />
          </div>
          <div className="btnWrapper flex justify-center py-2.5 px-[15px]">
            <CustomButton
              width={"w-[340px]"}
              height={"h-[40px]"}
              backgroundColor={"bg-[#FFCE22]"}
              backgroundColorOnHover={"hover:bg-[#FFD84D]"}
              paddingTopBottom={"py-[10px]"}
              paddingLeftRight={"px-[20px]"}
              title={"Done"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
