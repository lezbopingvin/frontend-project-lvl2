import * as fs from 'fs';

export default (file1, file2) => {
  const json1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
  const key1 = Object.keys(json1);
  const key2 = Object.keys(json2);
  const keys = [...key1, ...key2].sort();
  const heh = keys
    .reduce((acc, item, index) => {
      const arr = keys.slice(index + 1);
      const removed = ' - ';
      const added = ' + ';
      const same = '   ';
      if (arr.includes(item)) {
        if (json1[item] === json2[item]) {
          return [...acc, `${same}${item}: ${json1[item]}`];
        }
        return [...acc, `${removed}${item}: ${json1[item]}`, `${added}${item}: ${json2[item]}`];
      }
      if (key1.includes(item) && !key2.includes(item)) {
        return [...acc, `${removed}${item}: ${json1[item]}`];
      }
      if (!key1.includes(item) && key2.includes(item)) {
        return [...acc, `${added}${item}: ${json2[item]}`];
      }
      return acc;
    }, []);
  return ['{', ...heh, '}'].join('\n');
};
