import React from 'react'
import { HStack } from 'shared/ui/Stack'
import { Card } from 'shared/ui/Card/Card'
import { SuspenseWithSpinner } from 'shared/ui/SuspenseWithSpinner/SuspenseWithSpinner'
import { LoginForm } from 'features/LoginForm'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
  return (
    <HStack justify='center' maxWidth maxHeight>
      <Card className={styles.card}>
        <SuspenseWithSpinner>
          <LoginForm />
        </SuspenseWithSpinner>
      </Card>
    </HStack>
  )
}

export default AuthPage
