import { FC } from "react";
import emptyCart from "../../assets/images/basket.jpg"

const Cart: FC = () => {
  return (
    <div className="container mt-12">
      <div>
        <div><img src={emptyCart} alt="cart" className="w-[1000px] h-[500px] " /></div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
