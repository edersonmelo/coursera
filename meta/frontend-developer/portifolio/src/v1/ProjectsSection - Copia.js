import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const ProjectsSection = () => {
  return (
    <Box id="projects-section" py={10} bg="gray.200">
      <Heading textAlign="center" mb={8}>
        Meus Projetos
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} maxW="1200px" mx="auto">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
