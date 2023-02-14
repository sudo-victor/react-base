import React from 'react';
import FormFactory from '../../shared/components/form/form-factory';

import * as S from './styles';

function Login() {
  const dataForm = [
    {
      items: [
        {
          name: 'email',
          component: 'Input',
          value: '',
          placeholder: 'Digite aqui',
          type: 'email',
          title: 'E-mail',
          label: 'E-mail',
          required: true,
          validations: 'emailRequired',
          style: { marginBottom: '15px' },
        },
        {
          name: 'password',
          component: 'Input',
          value: '',
          placeholder: 'Digite aqui',
          type: 'password',
          title: 'Senha',
          label: 'Senha',
          required: true,
          secureTextEntry: true,
          passwordInput: true,
          validations: 'passwordRequired',
        },
        {
          name: 'button',
          component: 'Button',
          title: 'Entrar',
          submittingText: 'Entrando...',
        },
      ],
    },
  ]

  const onSubmit = async (values:any): Promise<void> => {
    const { email, password } = values
    console.log(email, password)
    // try {
    //   await HelperAmplify.signIn(email, password)
    //   const { user } = await makeMe().load()

    //   const permissions = formatPermissions(user.profiles)
    //   const userIsManager = (Array.from(permissions) as string[]).some((permission: string) => (
    //     adminPermissions.includes(permission)
    //   ))

    //   if (userIsManager || user.profiles.length === 0) {
    //     updateMe(user)
    //     history.push('/dashboard')
    //   } else {
    //     setErrorMessage('Usuário sem permissão de acesso')
    //   }
    // } catch (error: any) {
    //   const msg = I18n.get(error.name) as string
    //   setErrorMessage(msg)
    // }
  }

  return (
    <S.Container>
      <S.FormWrapper>
        <FormFactory
          data={dataForm}
          onSubmit={onSubmit}
          // submitErrorMessage={errorMessage}
        />
      </S.FormWrapper>
    </S.Container>
  )
}

export default Login;
