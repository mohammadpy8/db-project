import { registerType } from "../types/loginTypes/LoginTypes";

const registerValidation = (data: registerType) => {
  const errors: registerType = { phone: "", password: "", fullName: "" };

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

  if (!data?.fullName?.trim()) {
    errors.fullName = "نام و نام خانوادگی خود را وارد کنید";
  } else if(data.fullName.length < 10) {
    errors.fullName = "نام و نام خانوادگی حداقل باید 10 کاراکتر داشته باشد"
  } else {
    delete errors.fullName;
  }

  return errors;
};

export default registerValidation;
