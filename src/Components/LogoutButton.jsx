import { Button, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { LoginAuthentication } from "../Context/LoginAuthentication";

const LogoutButton = () => {
  const { ToggleLoginauth } = useContext(LoginAuthentication);

  return (
    <Flex align="center" justify="flex-end" marginBlock="20px">
      <Button colorScheme={"facebook"} onClick={() => ToggleLoginauth()}>
        Logout
      </Button>
    </Flex>
  );
};

export default LogoutButton;
