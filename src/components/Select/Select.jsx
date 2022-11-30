import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, allowDisabledState }) => {
  const { setFilter, filter, years } = useLaunchContext();
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });
  return (
    <select
      name={label}
      className={selectClasses}
      placeholder={label}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
      <option value="">{label}</option>
      {years.map((launchYear, idx) => (
        <option key={idx} value={launchYear}>
          {launchYear}
        </option>
      ))}
    </select>
  );
};
