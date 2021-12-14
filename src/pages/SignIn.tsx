import React from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Input, Checkbox, Button } from 'components'
import { useToast, useAuth } from 'hooks'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido.')
    .required('O email é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.')
})

const SignIn: React.FC = () => {
  const { createToast } = useToast()
  const { signIn } = useAuth()

  const initialValues: FormValues = {
    email: 'lucasfilipedasilvasouza@gmail.com',
    password: '12345678',
    rememberMe: false
  }

  const onSubmit = (values: FormValues) => {
    try {
      signIn(values)
      createToast('Login efetuado com sucesso!', {
        type: 'success'
      })
    } catch (error) {
      createToast('Usuário não encontrado.', {
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
            Faça login em sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ou{' '}
            <Link
              to="/cadastrar"
              className="font-medium text-cyan-600 hover:text-cyan-500"
            >
              cadastre-se gratuitamente.
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
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full rounded-t-md rounded-b-none focus:z-10"
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
              <div className="flex items-center justify-between">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  label="manter conectado"
                  onChange={handleChange}
                  checked={values.rememberMe}
                />
                <div className="text-sm">
                  <Link
                    to="/"
                    className="font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  className="group relative w-full flex justify-center"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                      aria-hidden="true"
                    />
                  </span>
                  Entrar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default SignIn
