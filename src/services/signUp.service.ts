export type SignUpDataProps = {
  name: string
  email: string
  imageUrl?: string
  token: string
}

export type SignUpProps = {
  data: SignUpDataProps
}

export type SignUpCredentialsProps = {
  name: string
  email: string
  password: string
}

export const signUpService = async (
  credentials: SignUpCredentialsProps
): Promise<SignUpProps> => {
  if (credentials.name !== '' && credentials.email !== '') {
    const response = {
      data: {
        name: credentials.name,
        email: credentials.email,
        token: 'token'
      }
    }
    return response
  } else {
    throw new Error('Não foi possível criar uma nova conta.')
  }
}
