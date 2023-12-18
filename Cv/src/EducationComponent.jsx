import { useState } from "react";
import "./styles/EducationComponent.css";
import { FaGraduationCap } from "react-icons/fa6";

const EducationComponent = ({ onSave }) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    if (
      school.trim() !== "" &&
      degree.trim() !== "" &&
      startDate.trim() !== "" &&
      endDate.trim() !== "" &&
      location.trim() !== ""
    ) {
      onSave({ school, degree, startDate, endDate, location });
      setDegree("");
      setSchool("");
      setEndDate("");
      setStartDate("");
      setSchool("");
      setLocation("");
    }
  };

  return (
    <div className="input-container">
      <h1 className="education-component-header">
        <FaGraduationCap />
        Education
      </h1>
      <div className="education-component-container">
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>
      <div className="education-component-container">
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </div>
      <div className="education-component-container">
        <label htmlFor="start">Start Date</label>
        <input
          id="start"
          type="text"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="education-component-container">
        <label htmlFor="ends">End Date</label>
        <input
          id="end"
          type="text"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="education-component-container">
        <label htmlFor="location">Location</label>
        <input
          id={location}
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button id="saveBtn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default EducationComponent;
