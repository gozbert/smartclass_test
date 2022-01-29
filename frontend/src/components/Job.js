import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/manage.svg";

const Job = (props) => {
  const {
    application_url,
    code,
    created_at,
    department,
    full_title,
    id,
    location,
    shortcode,
    shortlink,
    state,
    title,
    url,
  } = props.data;

  function formatDate(dateString) {
    let date = Date.parse(dateString);
    let dateIso = new Date(date);
    return dateIso.toLocaleDateString();
  }

  return (
    <div className="job-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="part1">
        <div className="company">
          <span className="cname">{department}</span>
          {props.state && <span className="new">{{ state }}</span>}
        </div>

        <Link className="position" to={`/viewJob/${shortcode}`}>{full_title}</Link>

        <div className="details">
          <span>{formatDate(created_at)}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location.country}</span>
        </div>

      </div>

      <div className="part2">
        <Link className="viewJob" to={`/viewJob/${shortcode}`}>View More</Link>
      </div>
    </div>
  );
};

export default Job;
