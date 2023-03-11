import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const FormSubmit = ({ children }) => {
  return (
    <Flex align="center" m justifyContent="center">
      <Button
        colorScheme={"facebook"}
        width="100%"
        maxW="13.5rem"
        type="submit"
      >
        {children}
      </Button>
    </Flex>
  );
};

export default FormSubmit;
