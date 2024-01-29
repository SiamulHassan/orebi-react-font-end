import * as Yup from "yup";
const authRules = {
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  telephone: Yup.string().required("Telephone is required"),
  addressOne: Yup.string().required("Address is required"),
  addressTwo: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  postCode: Yup.string().required("Post Code is required"),
  division: Yup.string().required("Division is required"),
  district: Yup.string().required("District is required"),
  password: Yup.string().min(8).required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must be match!")
    .required("Please Repeat your password"),
};

export const signUp = Yup.object({
  ...authRules,
});
export const signIn = Yup.object({
  email: authRules.email,
  password: authRules.password,
});
export const contact = Yup.object({
  name: Yup.string().required("Name must be Required"),
  email: authRules.email,
  message: Yup.string().min(5).max(100).required("Message must be Required"),
});
