import React from "react"; 
import {Box, Flex} from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Importa o ícone de coração

const Footer = () => { 
const currentYear = new Date().getFullYear(); // Obtém o ano atual
 return ( 
   <Box backgroundColor="#18181b"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="white" 
         justifyContent="center" 
         alignItems="center" 
         maxWidth="1024px" 
         height={16} 
       > 
         <p>Criado com NuvemFront <FontAwesomeIcon icon={faHeart} color="red" /> Todos os direitos reservados © {currentYear}</p> 
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer; 