import React, { useEffect, useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";
import regions from "../data/regions.json";
import emissionsService from '../services/emissions.service'

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const MapChart = () => {
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [emissions, setEmissions] = useState ([]);

  useEffect(() => {
            regions.forEach(region => {
                emissionsService.getEmissionByLocation(region.RegionName).then((data) => {
                    console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
                    let  apiData = data.data[0];
                    apiData.regionName = region.RegionName
                    apiData.latitude = region.Latitude
                    apiData.longitude = region.Longitude

                    setEmissions((emis => [...emis,apiData])
                    );
                  })
            })


    
    //csv("/data.csv").then((cities) => {
      const sortedCities = sortBy(emissions, (o) => -o.rating);
      //setMaxValue(sortedCities[0].rating);
      setData(sortedCities);
    //});
    
  }, []);

  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 24]),
    [maxValue]
  );

  return (
    <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
          ))
        }
      </Geographies>
      {data.map(({ region, longitude, latitude, rating }) => {
        return (
          <Marker key={region} coordinates={[longitude, latitude]}>
            <circle fill="#F53" stroke="#FFF" r={popScale(rating)} />
          </Marker>
        );
      })}
    </ComposableMap>
  );
};

export default MapChart;
