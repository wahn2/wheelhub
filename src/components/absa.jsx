import React from 'react';
import './ABSAFinancing.css'; // Use same CSS file or update as needed

const CarFinancingOptions = () => {
  const financingOptions = [
    {
      name: 'ABSA Vehicle Finance',
      description: 'Apply for car financing through ABSA Bank with competitive interest rates and flexible repayment terms.',
      details: 'ABSA offers vehicle finance solutions for both new and used cars with quick approval processes.',
      url: 'https://www.absa.co.za/personal/loans/for-a-car/instalment-sale-agreement/',
    },
    {
      name: 'Equity Bank Car Loan',
      description: 'Get financing from Equity Bank for both personal and business vehicle purchases.',
      details: 'Equity Bank offers flexible repayment terms and financing for both new and used vehicles.',
      url: 'https://equitygroupholdings.com/ke/borrow/personal/equiloan/', // Example link, update if needed
    },
    {
      name: 'KCB Auto Loan',
      description: 'KCB provides auto loans with competitive rates and quick turnaround time for approval.',
      details: 'Financing is available for new and used personal or commercial vehicles.',
      url: 'https://ke.kcbgroup.com/sahl/corporate-sahl/get-financing/long-term-asset-based-financing',
    },
    {
      name: 'Co-operative Bank Asset Finance',
      description: 'Finance your car with Co-operative Bank’s Asset Finance facility for individuals and businesses.',
      details: 'They offer financing for personal vehicles, commercial fleets, and machinery.',
      url: 'https://www.co-opbank.co.ke/personal-banking/borrow/asset-finance/',
    },
  ];

  return (
    <div className="absa-financing-container">
      <h2>Car Financing Options</h2>
      {financingOptions.map((option, index) => (
        <div key={index} className="financing-option">
          <h3>{option.name}</h3>
          <p>{option.description}</p>
          <p className="absa-details">{option.details}</p>
          <a
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absa-apply-button"
          >
            Apply Now <span className="external-link-icon">↗</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CarFinancingOptions;
