import { useState } from "react";
import "./styles/ExperienceComponent.css";
import { FaSuitcase } from "react-icons/fa";

const ExperienceComponent = ({ onSave }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startExDate, setStartExDate] = useState("");
  const [endExDate, setEndExDate] = useState("");
  const [locationEx, setLocationEx] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (
      company.trim() !== "" &&
      description.trim() !== "" &&
      position.trim() !== "" &&
      startExDate.trim() !== "" &&
      endExDate.trim() !== "" &&
      locationEx.trim() !== ""
    ) {
      onSave({
        company,
        description,
        position,
        endExDate,
        locationEx,
        startExDate,
      });
      setCompany("");
      setPosition("");
      setStartExDate("");
      setEndExDate("");
      setLocationEx("");
      setDescription("");
    }
  };

  return (
    <div className="input-container">
      <h1 className="experience-component-header">
        {" "}
        <FaSuitcase />
        Experience
      </h1>
      <div className="experience-component-container">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="experience-component-container">
        <label htmlFor="position">Position </label>
        <input
          id="position"
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="experience-component-container">
        <label htmlFor="Start">Start Date</label>
        <input
          id="Start"
          type="text"
          placeholder="Start Date"
          value={startExDate}
          onChange={(e) => setStartExDate(e.target.value)}
        />
      </div>
      <div className="experience-component-container">
        <label htmlFor="End">End Date</label>
        <input
          id="End"
          type="text"
          placeholder="End Date"
          value={endExDate}
          onChange={(e) => setEndExDate(e.target.value)}
        />
      </div>
      <div className="experience-component-container">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={locationEx}
          onChange={(e) => setLocationEx(e.target.value)}
        />
      </div>
      <div className="experience-component-container">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button id="SaveBtn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ExperienceComponent;
