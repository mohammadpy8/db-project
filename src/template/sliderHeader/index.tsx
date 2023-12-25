import { FC } from "react";
import SliderCoin from "../../module/sliderCoin";

const SliderHeader: FC = () => {
  return (
    <div className="sliderHeader h-16">
      <div className="overflow-hidden">
        <SliderCoin />
      </div>
    </div>
  );
};

export default SliderHeader;
