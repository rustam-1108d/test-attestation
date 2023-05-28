/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

export default function solution(content) {
  // BEGIN
  // console.log(content);
  const rows = content.split('\n');
  // console.log(rows);

  const headlines = rows.slice(0, 1);
  // console.log(headlines);

  const data = rows.slice(1, -1);
  // console.log(data);

  const dataLinesCount = `Count: ${data.length}`
  console.log(dataLinesCount)
  // END
}
