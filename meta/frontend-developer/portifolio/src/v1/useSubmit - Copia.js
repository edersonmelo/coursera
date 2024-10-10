import { useState } from 'react';

// Simula uma requisição de envio de dados para uma API
export function useSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (formData) => {
    setIsLoading(true);
    // Simula uma chamada de API que alterna entre sucesso e erro
    return new Promise((resolve) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        const result = {
          type: success ? 'success' : 'error',
          message: success ? 'Formulário enviado com sucesso!' : 'Erro ao enviar o formulário.',
        };
        setResponse(result);
        setIsLoading(false);
        resolve(result);
      }, 1500);
    });
  };

  return { isLoading, response, submit };
}
