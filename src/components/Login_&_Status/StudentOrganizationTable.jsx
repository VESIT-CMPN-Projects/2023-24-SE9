import React, { useState } from 'react';
import Header from '../Header/Header';

const OrganizationTable = () => {
  const [fundsDisbursed, setFundsDisbursed] = useState(false);

  const dummyData = [
    {
      application_id: 1,
      date_of_application: "2023-01-15",
      candidate_name: "John Doe",
      current_year_of_study: "2nd",
      account_holder_name: "John Doe",
      account_number: "1234567890",
      IFSC_code: "ABCD0123456",
      bank_name: "Example Bank"
    },
    {
      application_id: 2,
      date_of_application: "2023-02-20",
      candidate_name: "Jane Smith",
      current_year_of_study: "3rd",
      account_holder_name: "Jane Smith",
      account_number: "9876543210",
      IFSC_code: "EFGH0987654",
      bank_name: "Sample Bank"
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handlePrintCertificate = () => {
    // Implement logic for printing 80G certificate here
    
  };

  const handleDisburseFunds = () => {
    // Implement fund dispersal logic here
    alert("Sent information about Funds disbursment!");
    setFundsDisbursed(true); // Set funds disbursed to true after disbursing
  };
//      <div className='d-print-none'><Header /></div>

  return (
    <div className="container-fluid">
      <h4>List of Students that applied to your Scholarship</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Date of Application</th>
            <th>Candidate Name</th>
            <th>Current Year of Study</th>
            <th>Account Holder Name</th>
            <th>Account Number</th>
            <th>IFSC Code</th>
            <th>Bank Name</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((organization, index) => (
            <tr key={index}>
              <td>{organization.application_id}</td>
              <td>{organization.date_of_application}</td>
              <td>{organization.candidate_name}</td>
              <td>{organization.current_year_of_study}</td>
              <td>{organization.account_holder_name}</td>
              <td>{organization.account_number}</td>
              <td>{organization.IFSC_code}</td>
              <td>{organization.bank_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary mr-2 d-print-none" onClick={handlePrint}>Print</button>
        {fundsDisbursed ? (
          <button className="btn btn-primary d-print-none" onClick={handlePrintCertificate}>Print 80G Certificate</button>
        ) : (
          <button className="btn btn-success d-print-none" onClick={handleDisburseFunds}>Disbursed Funds to Applicants</button>
        )}
      </div>
    </div>
  );
};

export default OrganizationTable;
