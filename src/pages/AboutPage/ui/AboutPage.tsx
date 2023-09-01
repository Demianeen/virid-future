import React from 'react';
import { Page } from 'widgets/Page';
import pricingBackground from './pricingBackground.png';

const AboutPage = () => {
  const planContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    margin: '1rem',
    width: '100%',
  };

  const planStyle = {
    width: '80%',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  };

  const subscribeButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    background: 'green', // Change to green background
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold', // Add this line to make the text bold
  };

  return (
    <Page background={pricingBackground}>
      <div style={planContainerStyle}>
        <h2>Pricing Plans</h2>
        <div style={planStyle}>
          <h3>Basic Plan</h3>
          <p>
            Access to Virid Punk platform
            <br />
            Land cover classification insights
            <br />
            Land use analysis recommendations
            <br />
            Price: $29/month (7 day free trial for early subscribers)
          </p>
          {/* Replace the following with your actual Stripe Payment Link URL */}
          <a href="https://buy.stripe.com/8wMbLq0CQaal4j63cc" style={subscribeButtonStyle}>
            Subscribe
          </a>
        </div>

        {/* Placeholder for Advanced Plan */}
        <div style={planStyle}>
          <h3>Advanced Plan (Coming Soon)</h3>
          <p>Stay tuned for more details!</p>
        </div>

        {/* Placeholder for Premium Plan */}
        <div style={planStyle}>
          <h3>Premium Plan (Coming Soon)</h3>
          <p>Exciting features to be announced!</p>
        </div>
      </div>
    </Page>
  );
};

export default AboutPage;
