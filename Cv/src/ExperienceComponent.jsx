import { useState } from "react";
import "./styles/Imput.css";

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
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start Date"
        value={startExDate}
        onChange={(e) => setStartExDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Date"
        value={endExDate}
        onChange={(e) => setEndExDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={locationEx}
        onChange={(e) => setLocationEx(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ExperienceComponent;
