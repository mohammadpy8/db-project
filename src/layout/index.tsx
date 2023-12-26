import React, { useState } from "react";
import Header from "../template/header";
import Footer from "../template/footer";
import { FaTimes } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

const index: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [openChat, setOpenChat] = useState<boolean>(false);
  return (
    <div className="relative">
      <div className="fixed bottom-8 right-4 z-[10000]">
        <button
          className="bg-primary-300 w-16 h-16 flex items-center justify-center rounded-full"
          onClick={() => setOpenChat(!openChat)}
        >
          {openChat ? (
            <IoChatbox color="#fff" size={35} />
          ) : (
            <FaTimes size={35} color="#fff" />
          )}
        </button>
      </div>
      <div
        className={
          openChat
            ? "opacity-100 transition-all duration-300 w-72 h-96 bg-white shadow-2xl fixed bottom-[120px] right-9 z-[10000] rounded-lg"
            : "opacity-0 transition-all duration-300 w-72 h-96 bg-white shadow-2xl fixed bottom-[120px] right-9 z-[10000] rounded-lg"
        }
      ></div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default index;
