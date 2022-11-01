

    export  function get_percentile(percentile, array) {
        let index
        let result

        array.sort(function (a, b) { return a - b; });
      
          index = (percentile/100) * array.length;
          if (Math.floor(index) == index) {
               result = (array[index-1] + array[index])/2;
          }
          else {
              result = array[Math.floor(index)];
          }
          return result;
      }
      

      export  const getColor = (value, array) =>{

        if (value <= get_percentile(25, array)) { return '#03A678'; }
        if (value <= get_percentile(50, array)) { return '#F29F05'; }           
        if (value <= get_percentile(75, array)) { return '#F2507B'; }           
        if (value <= get_percentile(100, array)) { return '#F2506E'; } 
        return '#F2506E'
      }
