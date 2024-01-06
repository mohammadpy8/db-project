import { FC } from "react";
import { FaTimes } from "react-icons/fa";

interface modal {
    changeModal : boolean,
    setChangeModal : (changeModal : boolean) => void,
}

const CustomeModal: FC<React.PropsWithChildren<modal>> = ({ children, setChangeModal, changeModal}) => {
  return (
    <div className={changeModal ? "customModal opened" : "customModal close"}>
      <div className="customModal-background"></div>
      <div className="modal-custom relative">
        <div className="absolute top-6 left-6">
          <button onClick={() => setChangeModal(!changeModal)}>
            <FaTimes color="#333" size={30}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomeModal;
