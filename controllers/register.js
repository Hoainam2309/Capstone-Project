import { User } from "../models/user";
import { Validation } from "../models/validation";

//POST: thêm  user
document.querySelector("#btn-submit").oncick = function () {
  let user = new User();
  let validation = new Validation();
  //email
  user.email = document.querySelector("email").value;

  validation.kiemTraRong(
    user.email,
    "#error_required_email",
    "#required_email"
  );
  validation.kiemTraEmail(user.email, "#error_valid_email", "#required_email");
  //password
  user.password = document.querySelector("#password").value;
  validation.kiemTraRong(
    user.password,
    "#error_required_password",
    "#required_password"
  );

  //name
  user.name = document.querySelector("#name").value;
  validation.kiemTraRong(user.name, "#error_required_name", "#required_name");
  validation.kiemTraKyTu(user.name, "#error_required_name", "#required_name");

  //phone
  user.phone = document.querySelector("#phone").value;
  validation.kiemTraRong(
    user.phone,
    "#error_required_phone",
    "#required_phone"
  );
  validation.kiemTraSo(user.phone, "#error_required_phone", "#required_phone");

  //gender

  user.gender = document.querySelector("#gender input").checked;

  //passwordconfirm
  user.password_confirm = document.querySelector("#password_confirm").value;
  validation.kiemTraRong(
    user.password_confirm,
    "#error_required_password_confirm",
    "#required_password_confirm"
  );
  validation.kiemTraPassConfirm(
    user.password_confirm,
    "#error_required_password_confirm",
    "#required_password_confirm"
  );

  console.log("user", user);
};
