import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().min(2).required(),
  password: yup.string().min(2).max(20).required(),
});
