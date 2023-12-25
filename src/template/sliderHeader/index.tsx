import { FC } from "react";
import SliderCoin from "../../module/sliderCoin";

const SliderHeader: FC = () => {
  return (
    <div className="sliderHeader w-full relative flex items-center h-[85px]">
      <div className="relative w-[10%]">
        <h1>mmkldefjre</h1>
      </div>
      <div className="w-[80%] relative">
        <SliderCoin />
      </div>
      <div className="relative w-[10%]">
        <h1>dksfjh</h1>
      </div>
    </div>
  );
};

export default SliderHeader;
