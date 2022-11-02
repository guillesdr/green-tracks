import http from "../http-common";

class EmissionsByLocationsDataService {


  getEmissionByLocation = async (region) => {
    return http.get("bylocation?location=" + region)
  };

  getEmissionByLocationAndTime = async (region, time1, time2) => {
    return http.get(`bylocation?location=${region}`)
  };

  getForecastEmissionByLocationAndTime = async (region, time1, time2, windowSize) => {
    return http.get(`/forecasts/current?location=${region}&dataStartAt=${time1}&dataEndAt=${time2}&windowSize=${windowSize}`)
  };

  getEmissionByLocationAndTimeBest = async (region, time1, time2, windowSize) => {
    return http.get(`/bylocations/best?location=${region}&dataStartAt=${time1}&dataEndAt=${time2}&windowSize=${windowSize}`)
  };
  
  
}


export default new EmissionsByLocationsDataService();
