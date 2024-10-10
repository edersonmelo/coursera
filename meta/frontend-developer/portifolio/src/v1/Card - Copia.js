import { HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack spacing="24px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image boxSize="150px" src={imageSrc} alt={title} />
      <VStack align="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </VStack>
    </HStack>
  );
};

export default Card;
