import { FC } from "react";
import logo from "../../assets/images/kif.svg";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <div className="mt-32 border-t-2">
      <div className="mt-16 footer">
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="text-lg font-Yek-Regular text-justify">
            <span>
              کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگام کشور است
              که با سبک و استانداردهای جدید، سرویس‌های نگهداری رمز ارزهای
              الکترونیک را برای افراد حقیقی و حقوقی آماده کرده است.
            </span>
          </div>
          <div className="flex justify-between">
            <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <FaYoutube color="#0e33ea" size={35} />
            </div>
            <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <FaLinkedinIn color="#0e33ea" size={35} />
            </div>
            <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <FaInstagram color="#0e33ea" size={35} />
            </div>
            <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <FaTwitter color="#0e33ea" size={35} />
            </div>
            <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <FaTelegram color="#0e33ea" size={35} />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
