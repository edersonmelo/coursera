import { VStack, Image, Heading, Text, Box } from '@chakra-ui/react';

const LandingSection = () => {
  const greeting = "Olá, sou o Ederson Melo";
  const bio1 = "Engenheiro de Software com experiência em IA e Machine Learning.";
  const bio2 = "Especialista em React, DevOps e Infraestrutura.";

  return (
    <Box id="landing-section" h="100vh" bg="gray.100">
      <VStack justify="center" align="center" h="100%" spacing={6}>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://i.pravatar.cc/150?img=7"
        alt="Avatar"
      />
      <Heading as="h1">{greeting}</Heading>
      <Text>{bio1}</Text>
      <Text>{bio2}</Text>
    </VStack>
	 </Box>
  );
};

export default LandingSection;
