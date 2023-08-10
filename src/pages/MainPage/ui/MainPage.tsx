import React from 'react';
import { Page } from 'widgets/Page';
import {
  Text,
  TextAlign,
  TextSize,
} from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import styles from './MainPage.module.scss';
import mainPageBackground from './mainPageBackground.jpg';

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
          <Text
            text="Welcome to Virid Future: Innovating Agriculture with AI"
            align={TextAlign.CENTER}
            size={TextSize.L /* Use NORMAL text size */} 
          />
          <Text
            text="At Virid Future, our mission is to revolutionize the world of agriculture through the power of AI. Whether you're a farmer, an agricultural corporation, or a dedicated user, our platform is your gateway to a smarter and more sustainable future."
            align={TextAlign.CENTER}
          />
          <Text
            text="Real-time insights and comprehensive data lie at the heart of what we do. Imagine having a bird's-eye view of your crops, right at your fingertips. Our cutting-edge technology not only provides you with detailed information about your fields but empowers you with actionable insights to optimize crop management, increase yields, and drive sustainable agricultural practices forward."
            align={TextAlign.CENTER}
          />
          <Text
            text="We're more than just a platform – we're your partner in cultivating success. Join us in harnessing the potential of AI to nurture healthier crops, foster resource efficiency, and create a greener tomorrow. Experience the future of agriculture with Virid Future."
            align={TextAlign.CENTER}
          />
        </VStack>
      </HStack>
    </Page>
  );
}

export default MainPage;
