import React from 'react';
import { Page } from 'widgets/Page';
import { CardText } from 'shared/ui/CardText/CardText';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import ProductsPageBackground from './productPageBackground.jpg';

const ProductsPage = () => {
  // Define points for each topic
  const viridPunkPoints = [
    '📸 Satellite Image Upload: Easily upload satellite images of your fields, giving you a bird\'s-eye view of your crops and surrounding land.',
    '🌱 Land Cover Classification: Virid Punk utilizes cutting-edge AI models to classify different land cover types, enabling you to identify and monitor various vegetation types and land uses with precision.',
    '🗺️ Land Use Analysis: Understand the optimal land usage for your farm with comprehensive land use analysis. Make informed decisions about crop rotation, irrigation, and more.',
    '🔧 Customization Options: We understand that every farm is unique. Virid Punk offers customization options to tailor the platform to your specific needs and preferences.',
  ];

  const whyChooseViridPunkPoints = [
    '🚀 Cutting-Edge Technology: Virid Punk harnesses the power of advanced AI and satellite imagery to provide you with the latest insights and trends in precision agriculture.',
    '💡 User-Friendly Interface: Our platform is designed with farmers in mind, offering an intuitive and user-friendly interface that requires no technical expertise.',
    '🌱 Sustainable Farming: Embrace sustainable farming practices with data-driven decision-making. Virid Punk helps you optimize resource usage and minimize environmental impact.',
    '🤝 Partnering for Success: We believe in building long-lasting partnerships with our users. Your success is our success, and we are committed to supporting you on your farming journey.',
    '🌍 Cultivating a Greener Future: At Virid Future, we are passionate about a greener and more sustainable future. By empowering farmers with AI insights, we contribute to a healthier planet.',
  ];

  // Define a function to generate CardText components for each topic
  const renderCardText = (title, points) => {
    return (
      <CardText title={title} text={points.join('\n\n')} />
    );
  };

  return (
    <Page background={ProductsPageBackground}>
      <VStack gap={1.25}>
        {/* Render CardText for Virid Punk */}
        {renderCardText("Introducing Virid Punk!", viridPunkPoints)}

        {/* Render CardText for Why Choose Virid Punk */}
        {renderCardText('Why Choose Virid Punk?', whyChooseViridPunkPoints)}

        {/* Add other topics here as needed */}
        {/* For example:
        {renderCardText('Another Topic Title', ['Point 1', 'Point 2', 'Point 3'])}
        */}
        
        <Button as={AppLink} to={RoutePath.predict}>
          Request a demo
        </Button>
      </VStack>
    </Page>
  );
};

export default ProductsPage;
