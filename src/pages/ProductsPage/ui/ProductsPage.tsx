import React from 'react';
import { Page } from 'widgets/Page';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import ProductsPageBackground from './productPageBackground.jpg';

const ProductsPage = () => {
  const greenStyle = { color: 'limegreen' };
  const whiteStyle = { color: 'white' };

  return (
    <Page background={ProductsPageBackground}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for darkness
          }}
        />
        <VStack gap={1.25}>
          <h2 style={{ ...greenStyle, zIndex: 1 }}>
            <span style={whiteStyle}>Introducing </span>
            <span style={greenStyle}>Virid Punk</span>
          </h2>
          <p style={{ zIndex: 1 }}>
            <span style={greenStyle}>Virid Punk</span> - Empowering Farmers with AI Insights          <br />
            <span style={greenStyle}>Virid Punk</span> is our flagship MVP product, a powerful web-based platform designed to transform the way farmers interact with their crops. With seamless satellite image uploads, real-time insights, and advanced AI algorithms, <span style={greenStyle}>Virid Punk</span> puts the power of data-driven farming at your fingertips.
            <br /><br />
            Key Features of <span style={greenStyle}>Virid Punk</span>:
            <br /><br />
            📸 Satellite Image Upload: Easily upload satellite or aerial images of your fields, giving you a bird's-eye view of your crops and surrounding land.
            <br />🌱 Land Cover Classification: <span style={greenStyle}>Virid Punk</span> utilizes cutting-edge AI models to classify different land cover types, enabling you to identify and monitor various vegetation types and land uses with precision.
            <br />🗺️ Land Use Analysis: Understand the optimal land usage for your farm with comprehensive land use analysis. Make informed decisions about crop rotation, irrigation, and more.
            <br />🔧 Customization Options: We understand that every farm is unique. <span style={greenStyle}>Virid Punk</span> offers customization options to tailor the platform to your specific needs and preferences.
            <br /><br />
            Why Choose <span style={greenStyle}>Virid Punk</span>?
            <br /><br />
            🚀 Cutting-Edge Technology: <span style={greenStyle}>Virid Punk</span> harnesses the power of advanced AI and satellite imagery to provide you with the latest insights and trends in precision agriculture.
            <br />💡 User-Friendly Interface: Our platform is designed with farmers in mind, offering an intuitive and user-friendly interface that requires no technical expertise.
            <br />🌱 Sustainable Farming: Embrace sustainable farming practices with data-driven decision-making. <span style={greenStyle}>Virid Punk</span> helps you optimize resource usage and minimize environmental impact.
            <br />🤝 Partnering for Success: We believe in building long-lasting partnerships with our users. Your success is our success, and we are committed to supporting you on your farming journey.
            <br />🌍 Cultivating a Greener Future: At Virid Future, we are passionate about a greener and more sustainable future. By empowering farmers with AI insights, we contribute to a healthier planet.
            <br /><br />
            Unlock the Power of Data-Driven Farming with <span style={greenStyle}>Virid Punk</span>!
            <br /><br />
            Ready to revolutionize the way you farm? Join the growing community of farmers using <span style={greenStyle}>Virid Punk</span> to make smarter, more informed decisions. Embrace the future of agriculture with <span style={greenStyle}>Virid Punk</span>'s AI-powered insights. Together, let's cultivate a brighter, greener, and more abundant tomorrow.
          </p>
        </VStack>
        {/* Shorter Button outside the overlay */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Button
            as={AppLink}
            to={RoutePath.predict}
            style={{ padding: '8px 16px' }} // Adjust padding to make the button shorter
          >
            Get Access
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default ProductsPage;
