import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "../Components/FormInput";
import { loginSchema } from "../Functions/yupSchema";
import { Flex, FormErrorMessage, Icon, Stack } from "@chakra-ui/react";
import FormSubmit from "../Components/FormSubmit";
import { useContext, useState } from "react";
import { LoginAuthentication } from "../Context/LoginAuthentication";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const { ToggleLoginauth } = useContext(LoginAuthentication);
  const defaultErrorValues = { status: false, message: "" };
  const [loginError, setLoginError] = useState(defaultErrorValues);
  const defaultUserValues = { username: "", password: "" };
  const { handleSubmit, reset, ...formData } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const loginTrigger = (data) => {
    if (data.username === "foo" && data.password === "bar") {
      ToggleLoginauth();
      navigate("/home");
    } else {
      setLoginError({ status: true, message: "Wrong username or password" });
      setTimeout(() => {
        setLoginError(defaultErrorValues);
      }, 1000);
      reset({ ...defaultUserValues });
    }
  };

  return (
    <FormProvider {...formData}>
      <form onSubmit={handleSubmit(loginTrigger)}>
        <Flex
          alignItems="center"
          h={"100svh" || "100vh"}
          justifyContent="center"
        >
          <Stack
            spacing={4}
            w="90%"
            maxW="25rem"
            boxShadow="dark-lg"
            p={["1rem 1rem", "3rem 2rem", "3rem 2rem", "3rem 2rem"]}
          >
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
            {loginError.status && (
              <FormErrorMessage>{loginError.message}</FormErrorMessage>
            )}
            <FormSubmit>Login</FormSubmit>
          </Stack>
        </Flex>
      </form>
    </FormProvider>
  );
};
export default Loginpage;
