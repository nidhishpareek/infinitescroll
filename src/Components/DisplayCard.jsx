import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const DisplayCard = ({ contact, lastBookElementRef }) => {
  return (
    <Card
      boxShadow="dark-lg"
      p="0.5rem"
      key={uuidv4()}
      ref={lastBookElementRef}
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
};

export default DisplayCard;
