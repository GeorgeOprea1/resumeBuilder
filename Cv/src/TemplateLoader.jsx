import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./styles/TemplateLoader.css";

const TemplateLoader = (props) => {
  return (
    <div className="template-loader">
      <button className="clear-resume" onClick={props.deleteAll}>
        <FaTrashAlt />
        Delete All
      </button>
      <button className="load-example">Load Example</button>
    </div>
  );
};

export default TemplateLoader;
