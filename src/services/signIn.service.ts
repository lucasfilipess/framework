export type SignInDataProps = {
  name: string
  email: string
  imageUrl?: string
  token: string
}

export type SignInProps = {
  data: SignInDataProps
}

export type SignInCredentialsProps = {
  email: string
  password: string
}

export const signInService = async (
  credentials: SignInCredentialsProps
): Promise<SignInProps> => {
  if (
    credentials.email === 'lucasfilipedasilvasouza@gmail.com' &&
    credentials.password === '12345678'
  ) {
    const response = {
      data: {
        name: 'Lucas Filipe',
        email: 'lucasfilipedasilvasouza@gmail.com',
        imageUrl:
          'https://www.lucasfilipess.tech/_next/image?url=%2Fimg%2Flucas.jpeg&w=384&q=100',
        token: 'token'
      }
    }
    return response
  } else {
    throw new Error('Usuário inválido')
  }
}
