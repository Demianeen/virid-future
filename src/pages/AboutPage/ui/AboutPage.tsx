import React from 'react'
import { Page } from 'widgets/Page'
import { CardText } from 'shared/ui/CardText/CardText'

const AboutPage = () => {
  return (
    <Page>
      <CardText
        title='About Us'
        text='Virid Future is a startup dedicated to revolutionizing the way we approach agriculture. We believe that the use of cutting-edge technologies like artificial intelligence and machine learning can help us achieve unprecedented levels of efficiency and sustainability in farming, without harming our planet.'
      />
    </Page>
  )
}

export default AboutPage
