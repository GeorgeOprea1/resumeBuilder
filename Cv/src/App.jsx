import EducationComponent from "./EducationComponent";
import ExperienceComponent from "./ExperienceComponent";
import "./styles/App.css";
import { useState } from "react";
import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import PersonalInfoComponent from "./PersonalInfoComponent";
import Header from "./Header";
import TemplateLoader from "./TemplateLoader";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const personalInfoDeleteBtn = (e) => {
    setFullName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
  };
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const handleEducationSave = (data) => {
    const updatedEducationData = [...educationData, data];
    setEducationData(updatedEducationData);
  };

  const handleExperienceSave = (data) => {
    const updatedExperienceData = [...experienceData, data];
    setExperienceData(updatedExperienceData);
  };

  const handleEducationDelete = (index) => {
    const updatedEducationData = educationData.filter((_, i) => i !== index);
    setEducationData(updatedEducationData);
  };

  const handleExperienceDelete = (index) => {
    const updatedExperienceData = experienceData.filter((_, i) => i !== index);
    setExperienceData(updatedExperienceData);
  };

  function deleteAll() {
    personalInfoDeleteBtn();
    handleExperienceDelete();
    handleEducationDelete();
    setEducationData([]);
    setExperienceData([]);
  }

  return (
    <div className="app-container">
      <Header />
      <div className="interface-container">
        <div className="inputs-container">
          <PersonalInfoComponent
            nameChange={handleFullNameChange}
            emailChange={handleEmailChange}
            phoneChange={handlePhoneNumberChange}
            addressChange={handleAddressChange}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            onDelete={personalInfoDeleteBtn}
          />
          <TemplateLoader deleteAll={deleteAll} />
          <EducationComponent onSave={handleEducationSave} />

          <ExperienceComponent onSave={handleExperienceSave} />
        </div>

        <div className="display-container">
          <DisplayPersonalInfo
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
          <DisplayEducation
            data={educationData}
            onDelete={handleEducationDelete}
          />
          <DisplayExperience
            data={experienceData}
            onDelete={handleExperienceDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
