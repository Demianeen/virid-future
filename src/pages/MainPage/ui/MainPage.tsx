import React from 'react'
import { Page } from 'widgets/Page'
import {
  Text,
  TextAlign,
  TextSize,
} from 'shared/ui/Text/Text'
import { HStack, VStack } from 'shared/ui/Stack'
import styles from './MainPage.module.scss'
import mainPageBackground from './mainPageBackground.jpg'

const MainPage = () => {
  return (
    <Page background={mainPageBackground}>
      <HStack
        className={styles.textBlockWrapper}
        justify='center'
        maxWidth
      >
        <VStack
          className={styles.textBlock}
          justify='center'
          gap={1.25}
          width='60%'
        >
          <Text
            title='VIRID FUTURE'
            size={TextSize.L}
            align={TextAlign.CENTER}
            maxWidth
          />
          <Text
            title='INNOVATING AGRICULTURE WITH AI'
            size={TextSize.L}
            align={TextAlign.CENTER}
            maxWidth
          />
          <Text
            text='We aim to help farmers, agriculture corporations, and users by providing real-time insights and detailed information about their crops. Our platform is designed to optimize crop management, increase yields, and promote sustainable agricultural practices.'
            align={TextAlign.CENTER}
          />
        </VStack>
      </HStack>
    </Page>
  )
}

export default MainPage
