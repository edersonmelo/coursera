import React from 'react';
import { ChakraProvider, Box, VStack, Container } from '@chakra-ui/react';
import { AlertProvider } from './alertContext';
import Header from './Header';
import LandingSection from './LandingSection';
import Card from './Card';
import ContactMeSection from './ContactMeSection';
import { projects } from './data'; // Assumindo que existe uma lista de projetos em 'data.js'

function App() {
  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ChakraProvider>
	<AlertProvider>
      <Box>
        {/* Cabeçalho */}
        <Header handleClick={handleClick} />

        {/* Seção de Destino */}
        <Container maxW="container.lg" mt={10}>
          <LandingSection />
        </Container>

        {/* Seção de Projetos */}
        <Box id="projects-section" mt={20}>
          <VStack spacing={12}>
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
              />
            ))}
          </VStack>
        </Box>

        {/* Seção de Contato */}
        <Box id="contactme-section" mt={20}>
          <ContactMeSection />
        </Box>
      </Box>
	  </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
