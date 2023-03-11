import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
const FormInput = ({
  name,
  label,
  placeholder,
  asPassword,
  leftIcon,
  icon,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <FormControl isInvalid={errors?.[name]}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Stack spacing={4}>
          <InputGroup flexGrow={1}>
            {/* {leftIcon && ( */}
            <InputLeftElement pointerEvents="none" children={leftIcon} />
            {/* )} */}

            <Input
              name={name}
              id={name}
              type={asPassword && !show ? "password" : "text"}
              placeholder={placeholder}
              {...props}
              {...register(name)}
            />
            {asPassword && (
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            )}
          </InputGroup>
        </Stack>
        <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default FormInput;
