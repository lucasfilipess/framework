import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { useToast, useAuth } from 'hooks'
import { Input, Button } from 'components'

type FormValues = {
  name: string
  email: string
  password: string
}

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório.'),
  email: yup
    .string()
    .email('Email inválido.')
    .required('O email é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.')
})

const SignUp: React.FC = () => {
  const { createToast } = useToast()
  const { signUp } = useAuth()

  const initialValues: FormValues = {
    name: 'John Doe',
    email: 'johndoe@email.com',
    password: '12345678'
  }

  const onSubmit = (values: FormValues) => {
    try {
      signUp(values)
      createToast('Cadastro realizado com sucesso!', {
        type: 'success'
      })
    } catch (error) {
      createToast('Ocorreu um erro ao criar um novo usuário.', {
        type: 'error'
      })
    }
  }

  return (
    <div className="bg-gray-50 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crie uma conta gratuitamente
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ou{' '}
            <Link
              to="/"
              className="font-medium text-cyan-600 hover:text-cyan-500"
            >
              faça login se já possuir uma conta.
            </Link>
          </p>
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="relative block w-full rounded-t-md rounded-b-none focus:z-10"
                  placeholder="Nome"
                  value={values.name}
                  aria-describedby="name"
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name ? errors.name : ''}
                />
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full rounded-t-none rounded-b-none focus:z-10"
                  placeholder="Email"
                  value={values.email}
                  aria-describedby="email"
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email ? errors.email : ''}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="relative block w-full rounded-b-md rounded-t-none focus:z-10"
                  placeholder="Senha"
                  value={values.password}
                  aria-describedby="password"
                  onChange={handleChange}
                  isInvalid={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="group relative w-full flex justify-center"
                >
                  Cadastrar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default SignUp
