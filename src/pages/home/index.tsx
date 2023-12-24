import { FC } from "react";
import Main from "../../template/main";
import Popular from "../../template/popular";
import MasterCart from "../../template/masterCart";
import Details from "../../template/details";
import PriceCrypto from "../../template/priceCrypto";
import SupportCrypto from "../../template/supportCrypto";

const HomePage: FC = () => {
  return (
    <div className="container">
      <Main />
      <Popular />
      <MasterCart />
      <Details />
      <PriceCrypto />
      <SupportCrypto />
    </div>
  );
};

export default HomePage;
