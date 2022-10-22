import http from "../http-common";

class EmissionsByLocationsDataService {


  getEmissionByLocation = async (region) => {
    return http.get("bylocation?location=" + region)
  };
}


export default new EmissionsByLocationsDataService();
