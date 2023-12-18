import { useState } from "react";
import "./styles/Imput.css";

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
      <input
        type="text"
        placeholder="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EducationComponent;
