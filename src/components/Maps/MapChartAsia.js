import React, { useEffect, useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json";

const MapChartAsia = ({ emissionData }) => {
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [emissions, setEmissions] = useState([]);
  const [rating, setRating] = useState([]);
  const markerOffset = 20;

  useEffect(() => {

    console.log('useeffects europe');
    setEmissions(emissionData);
    
    //setRating((rat => [...rat, emissionData.rating]));
    
     const sortedCities = sortBy(emissions, (o) => -o.rating);
     setData(sortedCities);
    

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
    <ComposableMap projectionConfig={{
      rotate: [-90, -20, 0],
      scale: 300
    }}>
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
            <circle fill="#F53" stroke="#FFF" r={popScale(rating)} />
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
  );
};

export default MapChartAsia;
