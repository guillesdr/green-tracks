import http from "../http-common";
import regions from "../data/regions.json";

class EmissionsByLocationsDataService {

 
  getAllLocations = async () => {
    let emissions = []
    //console.log(regions)
    /*
    regions.map(region => {
      locations += 'location=' + region.RegionName + '&';
    })

    return http.get("bylocations?" + locations)
    */

    regions.map(region => {
    //  http.get("bylocation?location=" + region.RegionName).then (response => {
      //  return response.data
        //response.data ? emissions.push(response.data) : console.log('a');  

       
    })

    return http.get("bylocation?location=" + regions[0].RegionName)

    


  };
}
 

export default new EmissionsByLocationsDataService();
