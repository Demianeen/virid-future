import React from 'react'
import { Page } from 'widgets/Page'
import { CardText } from 'shared/ui/CardText/CardText'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { VStack } from 'shared/ui/Stack'
import ProductsPageBackground from './productPageBackground.jpg'

const ProductsPage = () => {
  return (
    <Page background={ProductsPageBackground}>
      <VStack gap={1.25}>
        <CardText
          title='Products'
          text='Our MVP product called Virid Punk is a web-based platform that allows users to easily upload satellite images and view real-time information about their crops. Our platform provides crop classification, vegetation health analysis, yield prediction, and land use analysis, and utilizes pre-trained models and custom algorithms to process the satellite imagery. We also offer customization options to meet specific user needs.'
        />
        <Button as={AppLink} to={RoutePath.predict}>
          Request a demo
        </Button>
      </VStack>
    </Page>
  )
}

export default ProductsPage
