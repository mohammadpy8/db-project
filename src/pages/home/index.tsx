import { FC } from "react";
import Main from "../../template/main";
import Popular from "../../template/popular";
import MasterCart from "../../template/masterCart";
import Details from "../../template/details";
import CryptoLastDay from "../../template/cryptoLastDay";

const HomePage: FC = () => {
  return (
    <div className="container">
      <Main />
      <Popular />
      <MasterCart />
      <Details />
      <CryptoLastDay />
    </div>
  );
};

export default HomePage;
