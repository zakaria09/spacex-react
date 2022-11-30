import axios from "axios";
import CONSTANTS from "../../constants/Config";

// Change below function to API call
export const GetLaunchesAPI = async () => {
  const launches = await axios.get(CONSTANTS.SPACE_X_API);
  return launches.data;
};
