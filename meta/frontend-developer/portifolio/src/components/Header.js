import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet"; // Importação do Helmet

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://www.github.com/sureskills",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sureskills/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@sureskills",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/sureskills",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Adicionando Helmet com as tags meta */}
      <Helmet>
        <meta property="og:title" content="descrever o título do artigo" />
        <meta property="og:type" content="tipo de conteúdo" />
        <meta property="og:image" content="url da imagem" />
        <meta property="og:url" content="url do conteúdo" />
        <meta property="og:description" content="descrição do conteúdo" />
      </Helmet>

      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        ref={headerRef}
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <HStack spacing={8}>
                {socials.map(({ icon, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={icon} size="2x" key={url} />
                  </a>
                ))}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                <a href="#projects" onClick={handleClick("projects")}>
                  Projects
                </a>
                <a href="#contactme" onClick={handleClick("contactme")}>
                  Contact Me
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Header;
