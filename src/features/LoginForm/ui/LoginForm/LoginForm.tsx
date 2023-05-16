import React, { memo, useCallback } from 'react'
import {
  Button,
  ButtonTheme,
} from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import {
  Text,
  TextAlign,
  TextSize,
  TextTheme,
} from 'shared/ui/Text/Text'
import type { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack, VStack } from 'shared/ui/Stack'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLoginFormEmail } from '../../modal/selectors/getLoginFormEmail/getLoginFormEmail'
import { getLoginFormPassword } from '../../modal/selectors/getLoginFormPassword/getLoginFormPassword'
import { getLoginFormError } from '../../modal/selectors/getLoginFormError/getLoginFormError'
import { getLoginFormIsLoading } from '../../modal/selectors/getLoginFormIsLoading/getLoginFormIsLoading'
import {
  loginActions,
  loginReducer,
} from '../../modal/slice/loginFormSlice'
import { loginByEmail } from '../../modal/services/loginByUsername/loginByEmail'

interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const reducersList: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(
  ({ className, onSuccess }: LoginFormProps) => {
    useDynamicModuleLoader(reducersList)
    const dispatch = useAppDispatch()

    const email = useSelector(getLoginFormEmail) ?? ''
    const password = useSelector(getLoginFormPassword) ?? ''
    const error = useSelector(getLoginFormError)
    const isLoading = useSelector(getLoginFormIsLoading)

    const navigate = useNavigate()
    const location = useLocation()

    const onChangeEmail = useCallback(
      (value: string) => {
        dispatch(loginActions.setEmail(value))
      },
      [dispatch]
    )

    const onChangePassword = useCallback(
      (value: string) => {
        dispatch(loginActions.setPassword(value))
      },
      [dispatch]
    )

    const onLogin = useCallback(
      async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const result = await dispatch(
          loginByEmail({ email, password })
        )
        if (result.meta.requestStatus === 'fulfilled') {
          onSuccess?.()
          navigate(location.state?.from ?? RoutePath.main)
        }
      },
      [
        dispatch,
        location.state?.from,
        navigate,
        onSuccess,
        password,
        email,
      ]
    )

    return (
      <VStack
        gap={1}
        maxWidth
        as='form'
        onSubmit={onLogin}
        className={className}
      >
        <Text
          title='Sign In'
          size={TextSize.L}
          align={TextAlign.CENTER}
        />
        {error && (
          <Text
            theme={TextTheme.ERROR}
            text='Username or password is incorrect'
          />
        )}
        <Input
          type='email'
          placeholder='Your email'
          onChange={onChangeEmail}
          value={email}
          label='Email'
          autoComplete='email'
          maxWidth
          autoFocus
        />
        <Input
          type='password'
          placeholder='Your password'
          onChange={onChangePassword}
          value={password}
          label='Enter password'
          autoComplete='current-password'
          maxWidth
        />
        <HStack justify='between' maxWidth>
          <Input
            label='Remember Me'
            type='checkbox'
            horizontal
          />
          <Button type='button' theme={ButtonTheme.CLEAR}>
            Forgot password
          </Button>
        </HStack>
        {isLoading && <Spinner />}
        <Button type='submit'>Sign in</Button>
        <p>
          {"Don't have and account? "}
          <Button
            theme={ButtonTheme.CLEAR}
            as={AppLink}
            to={RoutePath.signup}
          >
            Signup
          </Button>
        </p>
      </VStack>
      // <VStack
      //   as='form'
      //   onSubmit={onLogin}
      //   className={classNames(styles.loginForm, {}, [
      //     className,
      //   ])}
      // >
      //   <Text title={t('Login form')} />
      //   {error && (
      //     <Text
      //       theme={TextTheme.ERROR}
      //       text={t('Username or password is incorrect')}
      //     />
      //   )}
      //   <Input
      //     autoFocus
      //     type='text'
      //     placeholder={t('Your username')}
      //     className={styles.input}
      //     onChange={onChangeEmail}
      //     value={username}
      //     label={t('Enter username')}
      //     autoComplete='username'
      //     wrapperClassName={styles.inputWrapper}
      //     maxWidth
      //   />
      //   <Input
      //     type='password'
      //     placeholder={t('Your password')}
      //     className={styles.input}
      //     onChange={onChangePassword}
      //     value={password}
      //     label={t('Enter password')}
      //     autoComplete='current-password'
      //     wrapperClassName={styles.inputWrapper}
      //     maxWidth
      //   />
      //   {isLoading && <Spinner />}
      //   <Button
      //     theme={ButtonTheme.OUTLINE}
      //     className={styles.loginBtn}
      //     type='submit'
      //     disabled={isLoading}
      //   >
      //     {t('Login')}
      //   </Button>
      // </VStack>
    )
  }
)

LoginForm.displayName = 'LoginForm'

export default LoginForm
