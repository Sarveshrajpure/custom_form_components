import React from "react";
import CustomButton from "../Components/CustomButton";
import CustomCheckBox from "../Components/CustomCheckBox/CustomCheckBox";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div
        className="wrapper  py-[10px] w-max border-radius-[6px] 
       shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-md"
      >
        <div className="formWrapper">
          <CustomCheckBox label={"All pages"} />
          <div className="flex justify-center py-2.5 px-[15px]">
            <div className="border border-[#CDCDCD] w-[340px] " />
          </div>
          <div className="">
            <CustomCheckBox label={"Page 1"} />
            <CustomCheckBox label={"Page 2"} />
            <CustomCheckBox label={"Page 3"} />
            <CustomCheckBox label={"Page 4"} />
          </div>
          <div className="flex justify-center py-2.5 px-[15px]">
            <div className="border border-[#CDCDCD] w-[340px] " />
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
