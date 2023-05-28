/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

export default function solution(content) {
  // BEGIN
  // console.log(content);

  // step 1
  const rows = content.split('\n');
  // console.log(rows);

  const headlinesRow = rows.slice(0, 1);
  // console.log(headlines);

  const dataRows = rows.slice(1, -1);
  // console.log(data);

  const dataLinesCount = `Count: ${dataRows.length}`;
  console.log(dataLinesCount);

  // step 2

  const splitRows = (row) => row.split(',');

  // DATA TO USE
  const dataCells = dataRows.map(splitRows);
  // console.log(dataCells);
  // console.log(dataCells[0][7]);

  const extractCity = (row) => row[7];
  const citiesColumn = dataCells.map(extractCity);
  // console.log(citiesColumn);

  const uniqueCities = [];
  for (const city of citiesColumn) {
    if (!uniqueCities.includes(city)) {
      uniqueCities.push(city);
    }
  }
  // console.log(uniqueCities);

  const uniqueCitiesSorted = uniqueCities.sort();
  console.log(`Cities: ${uniqueCitiesSorted.join(', ')}`);

  // step 3
  // console.log(dataCells[0][3]);
  const extractHumidity = (row) => row[3];
  const humidityColumn = dataCells.map(extractHumidity);
  // console.log(humidityColumn);

  let minHumidity = humidityColumn[0];
  // console.log(minHumidity);
  for (const humidity of humidityColumn) {
    if (humidity < minHumidity) {
      minHumidity = humidity;
    }
  }
  // console.log(minHumidity);

  let maxHumidity = humidityColumn[0];
  // console.log(maxHumidity);
  for (const humidity of humidityColumn) {
    if (humidity > maxHumidity) {
      maxHumidity = humidity;
    }
  }
  // console.log(maxHumidity);

  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);

  // step 4

  // END
}
