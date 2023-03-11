import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "../Components/FormInput";
import { loginSchema } from "../Functions/yupSchema";
import { Icon, Stack } from "@chakra-ui/react";
import FormSubmit from "../Components/FormSubmit";
import { useContext } from "react";
import { LoginAuthentication } from "../Context/LoginAuthentication";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const { ToggleLoginauth } = useContext(LoginAuthentication);
  const { handleSubmit, ...formData } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const loginTrigger = (data) => {
    if (data.username === "foo" && data.password === "bar") {
      ToggleLoginauth();
      navigate("/home");
    } else {
      return null;
    }
  };

  return (
    <FormProvider {...formData}>
      <form onSubmit={handleSubmit(loginTrigger)}>
        <Stack spacing={4}>
          <FormInput
            name="username"
            placeholder="Enter Your Username"
            leftIcon={<Icon as={FaUserCircle} />}
            label="Username"
          />
          <FormInput
            name="password"
            placeholder="Enter Your Password"
            leftIcon={<Icon as={RiLockPasswordFill} />}
            label="Password"
            asPassword
          />
          <FormSubmit>Login</FormSubmit>
        </Stack>
      </form>
    </FormProvider>
  );
};
export default Loginpage;
