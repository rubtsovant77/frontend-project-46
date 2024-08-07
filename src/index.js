import { readFile, getExtension } from './utils.js';
import parsers from './parsers.js';
import makeDiff from './diffTree.js';
import formatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const file1Extension = getExtension(filepath1);
  const file2Extension = getExtension(filepath2);
  const parseFile1 = parsers(file1, file1Extension);
  const parseFile2 = parsers(file2, file2Extension);
  const strGetDiff = makeDiff(parseFile1, parseFile2);
  return formatter(strGetDiff, format);
};

export default genDiff;
