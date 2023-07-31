import React from 'react';
import { Page } from 'widgets/Page';
import { CardText } from 'shared/ui/CardText/CardText';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import ProductsPageBackground from './productPageBackground.jpg';

const ProductsPage = () => {
  return (
    <Page background={ProductsPageBackground}>
      <VStack gap={1.25}>
        <CardText
          title="Welcome to Virid Future's Products Page - Introducing Virid Punk!"
          text="Virid Punk - Empowering Farmers with AI Insights

Virid Punk is our flagship MVP product, a powerful web-based platform designed to transform the way farmers interact with their crops. With seamless satellite image uploads, real-time insights, and advanced AI algorithms, Virid Punk puts the power of data-driven farming at your fingertips.

Key Features of Virid Punk:

📸 Satellite Image Upload: Easily upload satellite images of your fields, giving you a bird's-eye view of your crops and surrounding land.

🌱 Land Cover Classification: Virid Punk utilizes cutting-edge AI models to classify different land cover types, enabling you to identify and monitor various vegetation types and land uses with precision.

🗺️ Land Use Analysis: Understand the optimal land usage for your farm with comprehensive land use analysis. Make informed decisions about crop rotation, irrigation, and more.

🔧 Customization Options: We understand that every farm is unique. Virid Punk offers customization options to tailor the platform to your specific needs and preferences.

Why Choose Virid Punk?

🚀 Cutting-Edge Technology: Virid Punk harnesses the power of advanced AI and satellite imagery to provide you with the latest insights and trends in precision agriculture.

💡 User-Friendly Interface: Our platform is designed with farmers in mind, offering an intuitive and user-friendly interface that requires no technical expertise.

🌱 Sustainable Farming: Embrace sustainable farming practices with data-driven decision-making. Virid Punk helps you optimize resource usage and minimize environmental impact.

🤝 Partnering for Success: We believe in building long-lasting partnerships with our users. Your success is our success, and we are committed to supporting you on your farming journey.

🌍 Cultivating a Greener Future: At Virid Future, we are passionate about a greener and more sustainable future. By empowering farmers with AI insights, we contribute to a healthier planet.

Unlock the Power of Data-Driven Farming with Virid Punk!

Ready to revolutionize the way you farm? Join the growing community of farmers using Virid Punk to make smarter, more informed decisions. Embrace the future of agriculture with Virid Punk's AI-powered insights. Together, let's cultivate a brighter, greener, and more abundant tomorrow."
        />
        <Button as={AppLink} to={RoutePath.predict}>
          Request a demo
        </Button>
      </VStack>
    </Page>
  );
};

export default ProductsPage;
