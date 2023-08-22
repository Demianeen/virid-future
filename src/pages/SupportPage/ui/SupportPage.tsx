import React from 'react';
import { Page } from 'widgets/Page';

const SupportPage = () => {
  return (
    <Page>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'green' }}>Find Support</h2>
        <p>
          Need Help? We are Here for You!
          Whether you have questions, feedback, or need assistance, our team is ready to help.
        </p>
        <p>
          Reach out to us at{' '}
          <a href="mailto:viridfuture@gmail.com" style={{ color: 'lightgreen' }}>
            viridfuture@gmail.com
          </a>
          , and we will get back to you as soon as possible.
        </p>
      </div>
    </Page>
  );
};

export default SupportPage;
