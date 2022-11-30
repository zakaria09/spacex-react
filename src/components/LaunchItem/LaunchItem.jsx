import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
  //missing rocket name
  const { flight_number, mission_name, launch_date_utc, rocket } = item;

  return (
    <li key={index}>
      <div>
        <span>{`#${flight_number}`}</span>
        <span>{`${mission_name}`}</span>
      </div>
      <div>
        <span>
          {/* use moment here */}
          <span>{moment(launch_date_utc).format("DD/MM/YYYY")}</span>
          {rocket.rocket_name}
        </span>
      </div>
    </li>
  );
};
