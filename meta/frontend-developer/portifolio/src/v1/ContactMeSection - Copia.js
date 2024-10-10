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
    <Box as="form" onSubmit={formik.handleSubmit}>
      <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
        <Input
          id="firstName"
          placeholder="Seu nome"
          {...formik.getFieldProps('firstName')}
        />
        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.email && formik.errors.email}>
        <Input
          id="email"
          placeholder="Seu e-mail"
          {...formik.getFieldProps('email')}
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
        <Textarea
          id="comment"
          placeholder="Sua mensagem"
          {...formik.getFieldProps('comment')}
        />
        <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        isLoading={isLoading}
        mt={4}
        colorScheme="teal"
      >
        Enviar
      </Button>
    </Box>
  );
};

export default ContactMeSection;
