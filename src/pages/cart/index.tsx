import { FC } from 'react'
import emptyCart from '../../assets/images/shopping-cart.png'
import { MdOutlineAddCard } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Cart: FC = () => {
  return (
    <div className="container mt-12">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div>
          <h1 className="text-5xl font-Yek-ExtraBlack text-primary-500">
            سبد خرید شما خالی است :)
          </h1>
        </div>
        <div>
          <img src={emptyCart} alt="cart" className="w-[300px] h-[300px] " />
        </div>
        <div className="text-3xl font-Yek-ExtraBlack">
          <h1>برای ثبت سفارش به لینک زیر مراجعه کنید!</h1>
        </div>
        <div className="pb-10">
          <Link to="/arz-shop">
            <button className="flex gap-x-2 bg-primary-300 text-white p-3 rounded-2xl font-Yek-ExtraBold items-center hover:ring-[7px] transition-all duration-300">
              <MdOutlineAddCard color="#fff" size={30} />
              <span className="text-xl">ثبت سفارش</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
