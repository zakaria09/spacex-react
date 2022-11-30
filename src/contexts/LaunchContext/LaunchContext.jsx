import React from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";

export const launchContextDefaults = {
  listLaunches: Function,
  items: [],
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
  years: [],
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [years, setYears] = React.useState([]);
  const getLaunchYears = (launches) => launches.map((l) => l.launch_year);

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: React.useCallback(async () => {
          setFilter("");
          const response = await GetLaunchesAPI();
          setItems(response);
          setYears(getLaunchYears(response));
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
        years,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
