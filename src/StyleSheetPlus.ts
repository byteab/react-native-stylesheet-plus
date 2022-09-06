import { useWindowDimensions, StyleSheet } from 'react-native';
import * as React from 'react';
import { resolveValueFromString } from './utils/resolveValueFromString';
import type { NamedStyles } from './types';

export type BreakPoints = {
  tablet: number;
  laptop: number;
  desktop: number;
};

export const getStyleSheet = (
  breakPoints = {
    /** mobile is always -1 */
    tablet: 550,
    laptop: 1100,
    desktop: 1500,
  }
) => {
  const createStyles = <T extends NamedStyles<T>>(styles: NamedStyles<T>) => {
    return styles;
  };

  const BREAK_POINT_NAMES = ['mobile', 'tablet', 'laptop', 'desktop'] as const;

  const useStyles = <T extends NamedStyles<T>>(rawStyles: NamedStyles<T>) => {
    const { width, height } = useWindowDimensions();

    const resolvedStyles = React.useMemo(
      () =>
        resolveStyles(
          rawStyles,
          pickCurrentDeviceTypeIndex(breakPoints, width),
          width,
          height
        ),
      [width, height, rawStyles]
    );

    return {
      styles: resolvedStyles,
      /** current break point */
      breakPoint:
        BREAK_POINT_NAMES[pickCurrentDeviceTypeIndex(breakPoints, width)],
    };
  };

  return { createStyles, useStyles };
};

const resolveStyles = <T extends NamedStyles<T>>(
  styles: NamedStyles<T>,
  currentDeviceTypeIndex: number,
  deviceWidth: number,
  deviceHeight: number
) => {
  const DEVICE_WIDTH_UNIT = deviceWidth / 100;
  const DEVICE_HEIGHT_UNIT = deviceHeight / 100;
  const resolvedStyles = (Object.keys(styles) as Array<keyof NamedStyles<T>>)
    .map((eachItemName) => {
      const eachItemProperties = styles[eachItemName];
      // pickup the correct value from array and then rebuild eachItem
      const eachItemResolvedProperties = (
        Object.keys(eachItemProperties) as Array<
          keyof typeof eachItemProperties
        >
      )
        .map((eachPropertyName) => {
          const eachPropertyValue = eachItemProperties[eachPropertyName];
          let pickedValue;
          if (
            eachPropertyValue instanceof Array &&
            eachPropertyValue.length > 0
          ) {
            pickedValue = eachPropertyValue[currentDeviceTypeIndex];
            let helperIndex = currentDeviceTypeIndex - 1;
            // if no value provided for specific device size fallback to values for previous sizes
            while (pickedValue === undefined) {
              pickedValue = eachPropertyValue[helperIndex--];
            }
          } else {
            pickedValue = eachPropertyValue;
          }
          if (typeof pickedValue === 'string') {
            pickedValue = resolveValueFromString(pickedValue, {
              widthUnit: DEVICE_WIDTH_UNIT,
              heightUnit: DEVICE_HEIGHT_UNIT,
            });
          }
          return { [eachPropertyName]: pickedValue };
        })
        .reduce((a, b) => ({ ...a, ...b }), {});
      return { [eachItemName]: eachItemResolvedProperties };
    })
    .reduce((a, b) => ({ ...a, ...b }), {});

  return StyleSheet.create(resolvedStyles);
};

function pickCurrentDeviceTypeIndex(
  { tablet, laptop, desktop }: BreakPoints,
  DEVICE_WIDTH: number
) {
  let currentTypeIndex = 0;
  if (DEVICE_WIDTH >= tablet) {
    currentTypeIndex = 1;
  }

  if (DEVICE_WIDTH >= laptop) {
    currentTypeIndex = 2;
  }

  if (DEVICE_WIDTH >= desktop) {
    currentTypeIndex = 3;
  }
  return currentTypeIndex;
}
