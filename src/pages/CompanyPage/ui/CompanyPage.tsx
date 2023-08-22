import React from 'react';
import { Page } from 'widgets/Page';
import companyPageBackground from './companyPageBackground.png';

const CompanyPage = () => {
  return (
    <Page background={companyPageBackground}>
      <div className="company-content">
        <p className="company-description">
          Virid Future is a startup on a mission to revolutionize agriculture with cutting-edge AI technology. We are passionate about creating a sustainable future for our planet, and we believe that the key to achieving this is through the intelligent use of technology.
        </p>
      </div>
    </Page>
  );
}

export default CompanyPage;
