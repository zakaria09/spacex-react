import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
  //missing rocket name
  const { flight_number, mission_name, launch_date_utc, rocket } = item;

  return (
    <li key={index} className="launch-item">
      <div>
        <span className="flight-number">{`#${flight_number}`}</span>
        <span className="mission-name">{`${mission_name}`}</span>
      </div>
      <div>
        <span className="">
          {/* use moment here */}
          <span>{moment(launch_date_utc).format("LL")}</span>
          <h2>{rocket.rocket_name}</h2>
        </span>
      </div>
    </li>
  );
};
