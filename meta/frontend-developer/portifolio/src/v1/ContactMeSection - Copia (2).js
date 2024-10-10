import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, FormControl, FormErrorMessage, Input, Textarea, VStack, Heading, FormLabel } from '@chakra-ui/react';
import * as Yup from 'yup';
import { useSubmit } from './useSubmit';
import { useAlertContext } from './alertContext';

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'general',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Nome é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      comment: Yup.string().required('Comentário é obrigatório'),
    }),
    onSubmit: async (values, actions) => {
      const response = await submit(values);
      if (response.type === 'success') {
        onOpen();
        actions.resetForm();
      }
    },
  });

  return (
    <Box id="contactme-section" py={10} bg="gray.300" h="100vh">
      <VStack
        as="form"
        onSubmit={formik.handleSubmit}
        spacing={4}
        align="center"
        justify="center"
        maxW="600px"
        mx="auto"
      >
        <Heading>Entre em Contato</Heading>
        <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
          <FormLabel>Nome</FormLabel>
          <Input {...formik.getFieldProps('firstName')} placeholder="Seu Nome" />
        </FormControl>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <FormLabel>Email</FormLabel>
          <Input {...formik.getFieldProps('email')} placeholder="Seu Email" />
        </FormControl>
        <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
          <FormLabel>Mensagem</FormLabel>
          <Textarea {...formik.getFieldProps('comment')} placeholder="Sua mensagem" />
        </FormControl>
        <Button type="submit" isLoading={isLoading}>Enviar</Button>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
