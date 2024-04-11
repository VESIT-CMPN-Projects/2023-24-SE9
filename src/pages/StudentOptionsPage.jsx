import React, { useState } from "react";
import OrgOptionsForm from "../components/Scholarship/OrgOptionsForm";
import Header from "../components/Header/Header";
import OrganizationForm from "../components/Scholarship/OrganizationRegistartionForm";
import OrganizationTable from "../components/Login_&_Status/StudentOrganizationTable";
import ApplyForScholarship from "../components/Scholarship/ApplyForSchemes";
import StudentOptionsForm from "../components/Scholarship/StudentOptionsForm";
import ScholarshipStatus from "../components/Scholarship/ScholarshipStatus";
import StudentProfile from "../components/Login_&_Status/StudentProfile";
import { useParams } from "react-router-dom";
const StudentOptions = () => {

    const { applicationId } = useParams();
    const [isApplyForSchemeOpen, setApplyForSchemeOpen] = useState(false);
    const [isManageProfileOpen, setManageProfileOpen] = useState(true);
    const [isViewApplicantStatusOpen, setViewApplicantStatusOpen] = useState(false);

    const ApplyForSchemes = () => {
        setApplyForSchemeOpen(true);
        setManageProfileOpen(false);
        setViewApplicantStatusOpen(false);
    };
    const ManageProfile = () => {
        setApplyForSchemeOpen(false);
        setManageProfileOpen(true);
        setViewApplicantStatusOpen(false);
    };
    const ViewApplicantStatus = () => {
        setApplyForSchemeOpen(false);
        setManageProfileOpen(false);
        setViewApplicantStatusOpen(true);
    };

    return (
        <>
            <Header />
            <div className="p-4" style={{ fontFamily: 'Cambria, serif', display: 'flex', gap: '10px' }}>
                <div>
                <StudentOptionsForm 
                    isApplyForSchemeOpen={isApplyForSchemeOpen}
                    isManageProfileOpen={isManageProfileOpen}
                    isViewApplicantStatusOpen={isViewApplicantStatusOpen}
                    ApplyForSchemes={ApplyForSchemes}
                    ManageProfile={ManageProfile}
                    ViewApplicantStatus={ViewApplicantStatus}
                />
                </div>
                {isManageProfileOpen && <div className="container card-form shadow mt-0 p-2" style={{ fontFamily: 'Cambria, serif' }}>
                    <div className="card-body bg-white">
                        <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                            <strong>Manage Your Profile</strong>
                        </p>
                        <hr />
                        {/* <StudentProfile appId={applicationId}/> */}
                    </div>
                </div>}
                {isViewApplicantStatusOpen && <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
            <div className="card-body bg-white">
                <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                    <strong>Check Your Scholarship Status</strong>
                </p>
                <hr />
                <ScholarshipStatus />
            </div>
        </div>}
        {isApplyForSchemeOpen && <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
            <div className="card-body bg-white">
                <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                    <strong>Apply For Schemes</strong>
                </p>
                <hr />
                <ApplyForScholarship />
            </div>
        </div>}

            </div>
            
        </>
    );
}

export default StudentOptions;
