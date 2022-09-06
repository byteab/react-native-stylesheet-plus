import { useWindowDimensions, StyleSheet } from 'react-native';
import * as React from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type BreakPoints = {
  tablet: number;
  laptop: number;
  desktop: number;
};

type NamedStyles<T> = {
  [P in keyof T]:
    | {
        [key in keyof ViewStyle]:
          | ViewStyle[key]
          | [ViewStyle[key], ViewStyle[key], ViewStyle[key]?, ViewStyle[key]?];
      }
    | {
        [key in keyof TextStyle]:
          | TextStyle[key]
          | [TextStyle[key], TextStyle[key], TextStyle[key]?, TextStyle[key]?];
      }
    | {
        [key in keyof ImageStyle]:
          | ImageStyle[key]
          | [
              ImageStyle[key],
              ImageStyle[key],
              ImageStyle[key]?,
              ImageStyle[key]?
            ];
      };
};

export const getStyleSheet = (
  breakPoints = {
    /** mobile is always -1 */
    tablet: 549,
    laptop: 1099,
    desktop: 1499,
  }
) => {
  const createStyles = <T extends NamedStyles<T>>(styles: NamedStyles<T>) => {
    return styles;
  };

  const BREAK_POINT_NAMES = ['mobile', 'tablet', 'laptop', 'desktop'] as const;

  const useStyles = <T extends NamedStyles<T>>(rawStyles: NamedStyles<T>) => {
    const { width } = useWindowDimensions();

    const resolvedStyles = React.useMemo(
      () =>
        resolveStyles(
          rawStyles,
          pickCurrentDeviceTypeIndex(breakPoints, width)
        ),
      [width, rawStyles]
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
  currentDeviceTypeIndex: number
) => {
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
          if (eachPropertyValue instanceof Array) {
            pickedValue = eachPropertyValue[currentDeviceTypeIndex];
            let helperIndex = currentDeviceTypeIndex;
            // if no value provided for specific device size fallback to values for previous sizes
            while (pickedValue === undefined) {
              pickedValue = eachPropertyValue[helperIndex--];
            }
          } else {
            pickedValue = eachPropertyValue;
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
  let currentTypeIndex = -1;
  if (DEVICE_WIDTH >= tablet) {
    currentTypeIndex = 0;
  }

  if (DEVICE_WIDTH >= laptop) {
    currentTypeIndex = 1;
  }

  if (DEVICE_WIDTH >= desktop) {
    currentTypeIndex = 2;
  }

  return currentTypeIndex;
}

getStyleSheet({
  tablet: 11,
  laptop: 33,
  desktop: 43,
});
