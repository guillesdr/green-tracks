import React, { useEffect, useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";
import {getColor} from "../../utils/Utils";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const MapChartWorld = ({emissionData}) => {
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [emissions, setEmissions] = useState ([]);
  const [ratings, setRatings] = useState ([]);
  const markerOffset = 20;

  useEffect(() => {

    let scores = []
                        setEmissions(emissionData);
                        //setRating((rat => [...rat, emissionData.rating]));
                        
                         const sortedCities = sortBy(emissions, (o) => -o.rating);
                        setData(sortedCities);

                       
                        for (const emi of emissionData){
                          scores.push(emi.rating)
                          setRatings(scores)
                        }

  }, [data]);


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
    <>


    <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}               fill="#EAEAEC"
            stroke="#D6D6DA"/>
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
            style={{ fontSize: "x-small", fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {regionName}
          </text>
          </Marker>
        );
      })}
    </ComposableMap>
    </>
  );
};

export default MapChartWorld;