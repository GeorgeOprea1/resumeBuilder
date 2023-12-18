import "./styles/DisplayExperience.css";

const DisplayExperience = ({ data, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="display-container">
      <h2 className="experience-header">Professional Experience</h2>
      {data.map((item, index) => (
        <div key={index} className="experience-container">
          <div className="wraper">
            <div className="date-location-container">
              <div className="date-container">
                <p> {item.startExDate}</p>
                {item.endExDate ? <p> - {item.endExDate}</p> : null}
              </div>
              <p>{item.locationEx}</p>
            </div>
            <div className="company-description-container">
              <div className="company-container">
                <p> {item.company}</p>
                <p> {item.position}</p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>

          <button onClick={() => handleDelete(index)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayExperience;
