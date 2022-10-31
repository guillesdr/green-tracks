import http from "../http-common";

class EmissionsByLocationsDataService {


  getEmissionByLocation = async (region) => {
    return http.get("bylocation?location=" + region)
  };

  getEmissionByLocationAndTime = async (region, time1, time2) => {
    return http.get(`bylocation?location=${region}`)
  };
}


export default new EmissionsByLocationsDataService();
