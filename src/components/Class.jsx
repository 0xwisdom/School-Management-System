import React, { Fragment } from "react";
import Table from "../Table";
import Footer from "../Footer.jsx";

const Class = () => {
  return (
    <Fragment>
      <select id="class-select">
        <option value="">Pick a class</option>
        <optgroup label="Junior Secondary">
          <option value="jss1">JSS1</option>
          <option value="jss2">JSS2</option>
          <option value="jss3">JSS3</option>
        </optgroup>
        <optgroup label="Senior Secondary">
          <option value="sss1">SSS1</option>
          <option value="sss2">SSS2</option>
          <option value="sss3">SSS3</option>
        </optgroup>
      </select>
      <Table />
      <Footer />
    </Fragment>
  );
};

export default Class;
