import { HStack, Box, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Header = () => {
  const [transform, setTransform] = useState('translateY(0)');
  const previousScrollY = useRef(0);



const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: faLinkedin },
  { name: 'GitHub', url: 'https://github.com', icon: faGithub },
  { name: 'Twitter', url: 'https://twitter.com', icon: faTwitter },
];

const handleClick = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > previousScrollY.current) {
        setTransform('translateY(-200px)');
      } else {
        setTransform('translateY(0)');
      }
      previousScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <Box bg="black" color="white" py={4}>
      <HStack justify="space-between" maxW="1200px" mx="auto" px={4}>
        <HStack spacing={4}>
          {socials.map((social) => (
            <Link key={social.name} href={social.url} isExternal>
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>
        <HStack spacing={4}>
          <Link href="#projects-section" onClick={handleClick}>
            Projects
          </Link>
          <Link href="#contactme-section" onClick={handleClick}>
            Contact Me
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
