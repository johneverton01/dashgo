import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { Input } from '../components';

type SignInFormDate = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<SignInFormDate> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };


  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack>
            <Input
              name="email"
              type="email"
              label={"E-mail"}
              error={errors.email}
              {...register('email')}
            />
            <Input
              name="password"
              type="password"
              label={"Senha"}
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            size="lg"
            colorScheme="pink"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
