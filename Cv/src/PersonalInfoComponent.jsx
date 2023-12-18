const PersonalInfoComponent = (props) => {
  return (
    <div className="input-container">
      <h2>Personal Information</h2>
      <div className="personal-input-container">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={props.fullName}
          onChange={props.nameChange}
        />
      </div>
      <div className="personal-input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={props.email}
          onChange={props.emailChange}
        />
      </div>
      <div className="personal-input-container">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={props.phoneNumber}
          onChange={props.phoneChange}
        />
      </div>
      <div className="personal-input-container">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={props.address}
          onChange={props.addressChange}
        />
      </div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default PersonalInfoComponent;
