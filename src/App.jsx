import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import {StudentRegistrationGuidelines, OrganizationRegistrationGuidelines} from "./components/Scholarship/NewRegistrationPage";
import StudentRegistrationForm from "./pages/StudentRegistrationPage";
import OrganizationRegistration from "./pages/OrganizationRegistration";
import StudentLogin from "./components/Login_&_Status/StudentLogin";
import StudentApplicationSchemeInfo from "./components/Login_&_Status/StudentApplicationSchemeInfo";
import StudentDetailForm from "./pages/StudentDetailFormPage";
import InstituteLogin from "./components/Login_&_Status/InstituteLogin"
import StudentListForInstitute from "./components/Login_&_Status/StudentListInstitute";
import OrganizationDetailForm from "./pages/OrganizationFormPage";
import OrganizationLogin from "./components/Login_&_Status/OrganizationLogin";
import OrganizationTable from "./components/Login_&_Status/StudentOrganizationTable";
import OrgOptions from "./pages/OrganisationOptionsPage";
import StudentOptions from "./pages/StudentOptionsPage";
import EditScheme from "./pages/OrganisationEditSchemePage";

function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/registration-student" element={<StudentRegistrationGuidelines />} />
            <Route path="/student-registration" element={<StudentRegistrationForm />} />
            <Route path="/registration-organization" element={<OrganizationRegistrationGuidelines />} />
            <Route path="/organization-registration" element={<OrganizationRegistration />} />
            <Route path="/student-application-status" element={<StudentLogin />} />
            <Route path="/student-application-Info" element={<StudentApplicationSchemeInfo />} />
            <Route path="/student-information-form" element={<StudentDetailForm />} />
            <Route path="/institute-login" element={<InstituteLogin />} />
            <Route path="/student-list-for-verification" element={<StudentListForInstitute />} />
            <Route path="/organization-form" element={<OrganizationDetailForm />} />
            <Route path="/organization-login" element={<OrganizationLogin />} />
            <Route path="/organization-table" element={<OrganizationTable />} />
            <Route path="/organization-options/regId/:registrationId" element={<OrgOptions />} />
            <Route path="/student-options/:applicationId" element={<StudentOptions />} />
            <Route path="/edit-scheme/regId/:registrationId/schemeId/:schemeId" element={<EditScheme />} />
        </Routes>
    );
}

export default App;