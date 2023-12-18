import "./styles/DisplayEducation.css";

const DisplayEducation = ({ data, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="display-container">
      <h2 className="education-header">Education</h2>
      {data.map((item, index) => (
        <div key={index} className="education-container">
          <div className="wraper">
            <div className="date-location-container">
              <div className="date-container">
                <p> {item.startDate} </p>
                {item.endDate ? <p> - {item.endDate}</p> : null}
              </div>
              <p>{item.location}</p>
            </div>
            <div className="school-container">
              <p>
                <strong>{item.school}</strong>
              </p>
              <p>{item.degree}</p>
            </div>
          </div>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayEducation;
