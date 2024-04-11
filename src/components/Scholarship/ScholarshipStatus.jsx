import React, { useState } from 'react';
import Header from '../Header/Header';

const ScholarshipStatus = () => {

//      <div className='d-print-none'><Header /></div>

  return (
    <div className="container-fluid">
      <h4>Manage your Organization's Scholarship</h4>
      
      <h4>You haven't Applied for any of the Scjolarships Yet,Please Apply</h4>
      {/*
      <div>
        <button className="btn btn-primary mr-2 d-print-none" onClick={handlePrint}>Print</button>
        {fundsDisbursed ? (
          <button className="btn btn-primary d-print-none" onClick={handlePrintCertificate}>Print 80G Certificate</button>
        ) : (
          <button className="btn btn-success d-print-none" onClick={handleDisburseFunds}>Disbursed Funds to Applicants</button>
        )}
      </div>
      */}
    </div>
  );
};

export default ScholarshipStatus;
