import { FC } from "react";
import { FiBarChart2 } from "react-icons/fi";

const PriceCrypto: FC = () => {
  return (
    <div className="mt-60">
      <div className="flex items-center gap-x-2">
        <div>
          <FiBarChart2 size={30} color="#3051f8" />
        </div>
        <div>
          <h1 className="text-xl font-Yek-SemiBold pt-2">
            قیمت لحظه ای ارزدیجیتال
          </h1>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default PriceCrypto;
