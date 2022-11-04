import React, { useEffect, useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";
import { getColor } from "../../utils/Utils";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const MapChartNorthAmerica = ({ emissionData }) => {
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [emissions, setEmissions] = useState([]);
  const markerOffset = 20;
  const [ratings, setRatings] = useState([]);
  
  useEffect(() => {
    let scores = []
    setEmissions(emissionData);

     const sortedCities = sortBy(emissions, (o) => -o.rating);
     setData(sortedCities);
    

     for (const emi of emissionData) {
      scores.push(emi.rating)
      setRatings(scores)
    }

  }, [emissions]);


  /*/  useEffect(() => {
      const sortedCities = sortBy(emissions, (o) => -o.rating);
      setData(sortedCities);
  
    }, [emissions]);
  */

  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 24]),
    [maxValue]
  );


  return (

    <div class="p-4 w-2/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">North America Map</h5>


    <ComposableMap 
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
      rotate: [100, -42.0, 0],
     scale: 500
   }}
   >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
          ))
        }
      </Geographies>
      {data.map(({ location, region, regionName, longitude, latitude, rating }) => {
        return (
          <Marker key={region} coordinates={[longitude, latitude]}>
            <circle fill={getColor(rating, ratings)} stroke="#FFF" r={popScale(rating)} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {regionName}
            </text>
          </Marker>
        );
      })}
    </ComposableMap>

    </div>
  );
};

export default MapChartNorthAmerica;
