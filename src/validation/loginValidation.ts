import { loginType } from "../types/loginTypes/LoginTypes";

const loginValidation = (data: loginType) => {
  const errors: loginType = {
    password: "",
    phone: "",
  };
  if (!data.phone) {
    errors.phone = "شماره تلفن را وارد کنید";
  } else if (!/^0?9[0-9]{9}$/.test(data.phone)) {
    errors.phone = "شماره تلفن را درست وارد کنید";
  } else {
    delete errors.phone;
  }

  if (!data.password) {
    errors.password = "رمز عبور خود را وارد کنید";
  } else if (data.password.length < 9) {
    errors.password = "رمز عبور شما حداقل باید 8 رقم باشد";
  } else {
    delete errors.password;
  }
  return errors;
};

export default loginValidation;
