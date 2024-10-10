import { createContext, useContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // controla o estado do alerta

  return (
    <AlertContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext deve ser usado dentro de um AlertProvider');
  }
  return context;
};
