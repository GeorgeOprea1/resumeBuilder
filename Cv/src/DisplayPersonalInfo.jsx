import "./styles/DisplayPersonalInfo.css";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const DisplayPersonalInfo = (props) => {
  return (
    <div className="personal-info-container">
      <div className="name">{props.fullName} </div>
      <div className="resume-contact">
        {props.email ? (
          <div>
            <IoIosMail /> {props.email}
          </div>
        ) : null}
        {props.phoneNumber ? (
          <div>
            <FaPhone /> {props.phoneNumber}
          </div>
        ) : null}
        {props.address ? (
          <div>
            <FaLocationDot /> {props.address}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayPersonalInfo;
