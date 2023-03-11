import { Box, Card, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";
import LogoutButton from "../Components/LogoutButton";
import SkeletonCard from "../Components/SkeletonCard";
import useContactSearch from "../Functions/useContactSearch";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { contacts, loading, error } = useContactSearch(pageNumber);
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  return (
    <Box alignItems="center" maxW="60rem" margin="auto" w="95%">
      <LogoutButton />
      <Stack spacing="4" mt="30px" p="0.5rem">
        {contacts?.map((contact, index) => {
          if (contacts.length === index + 1) {
            return (
              <Card
                ref={lastElementRef}
                boxShadow="dark-lg"
                p="0.5rem"
                key={uuidv4()}
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Text>{`${contact?.name?.first} ${contact?.name?.last}`}</Text>
                  <Image
                    h="50px"
                    marginBlock="10px"
                    borderRadius="50%"
                    src={contact?.picture?.medium}
                    alt={`${contact?.name?.first} ${contact?.name?.last}`}
                  ></Image>
                </Flex>
              </Card>
            );
          } else {
            return (
              <Card boxShadow="dark-lg" p="0.5rem" key={contact?.id?.value}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Text>{`${contact?.name?.first} ${contact?.name?.last}`}</Text>
                  <Image
                    h="50px"
                    marginBlock="10px"
                    borderRadius="50%"
                    src={contact?.picture?.medium}
                    alt={`${contact?.name?.first} ${contact?.name?.last}`}
                  ></Image>
                </Flex>
              </Card>
            );
          }
        })}

        <SkeletonCard></SkeletonCard>
        {loading && <SkeletonCard></SkeletonCard>}
        {error && <Text>Sorry!, Couldn't find the Contacts</Text>}
      </Stack>
    </Box>
  );
};

export default Home;
