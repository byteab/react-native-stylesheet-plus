import { remToPixels } from './remToPix';

export const resolveValueFromString = (
  value: string,
  options: {
    widthUnit: number;
    heightUnit: number;
  }
) => {
  if (value.match(/^\d*\.?\d*vh$/)) {
    return Number(value.replace('vh', '')) * options.heightUnit;
  } else if (value.match(/^\d*\.?\d*vw$/)) {
    return Number(value.replace('vw', '')) * options.widthUnit;
  } else if (value.includes('clamp')) {
    let arr = value
      .replace('clamp(', '')
      .replace(')', '')
      .split(',')
      .map((v) => {
        if (v.includes('vw')) {
          return Number(v.replace('vw', '')) * options.widthUnit;
        } else if (v.includes('vh')) {
          return Number(v.replace('vh', '')) * options.heightUnit;
        } else if (v.includes('rem') || v.includes('em')) {
          return remToPixels(value);
        } else {
          return Number(v);
        }
      });
    return Math.max(arr[0]!, Math.min(arr[1]!, arr[2]!)) as number;
  } else if (value.includes('rem') || value.includes('em')) {
    return remToPixels(value);
  } else {
    return value;
  }
};
