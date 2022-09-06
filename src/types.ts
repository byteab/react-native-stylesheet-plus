import type {
  ColorValue,
  FlexAlignType,
  FontVariant,
  ImageStyle,
} from 'react-native';

// @see https://reactnative.dev/docs/text#style
interface TextStyleAndroid extends ViewStyle {
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  includeFontPadding?: boolean | undefined;
}
interface TextStyleIOS extends ViewStyle {
  fontVariant?: FontVariant[] | undefined;
  letterSpacing?: number | undefined | string;
  textDecorationColor?: ColorValue | undefined;
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
  writingDirection?: 'auto' | 'ltr' | 'rtl' | undefined;
}
export interface FlexStyle {
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  alignSelf?: 'auto' | FlexAlignType | undefined;
  aspectRatio?: number | undefined | string;
  borderBottomWidth?: number | undefined | string;
  borderEndWidth?: number | string | undefined;
  borderLeftWidth?: number | undefined | string;
  borderRightWidth?: number | undefined | string;
  borderStartWidth?: number | string | undefined;
  borderTopWidth?: number | undefined | string;
  borderWidth?: number | undefined | string;
  bottom?: number | string | undefined;
  display?: 'none' | 'flex' | undefined;
  end?: number | string | undefined;
  flex?: number | undefined;
  flexBasis?: number | string | undefined;
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  flexGrow?: number | undefined;
  flexShrink?: number | undefined;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  height?: number | string | undefined;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  left?: number | string | undefined;
  margin?: number | string | undefined;
  marginBottom?: number | string | undefined;
  marginEnd?: number | string | undefined;
  marginHorizontal?: number | string | undefined;
  marginLeft?: number | string | undefined;
  marginRight?: number | string | undefined;
  marginStart?: number | string | undefined;
  marginTop?: number | string | undefined;
  marginVertical?: number | string | undefined;
  maxHeight?: number | string | undefined;
  maxWidth?: number | string | undefined;
  minHeight?: number | string | undefined;
  minWidth?: number | string | undefined;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  padding?: number | string | undefined;
  paddingBottom?: number | string | undefined;
  paddingEnd?: number | string | undefined;
  paddingHorizontal?: number | string | undefined;
  paddingLeft?: number | string | undefined;
  paddingRight?: number | string | undefined;
  paddingStart?: number | string | undefined;
  paddingTop?: number | string | undefined;
  paddingVertical?: number | string | undefined;
  position?: 'absolute' | 'relative' | undefined;
  right?: number | string | undefined;
  start?: number | string | undefined;
  top?: number | string | undefined;
  width?: number | string | undefined;
  zIndex?: number | undefined;

  /**
   * @platform ios
   */
  direction?: 'inherit' | 'ltr' | 'rtl' | undefined;
}

export interface ShadowStyleIOS {
  shadowColor?: ColorValue | undefined;
  shadowOffset?:
    | { width: number | string; height: number | string }
    | undefined;
  shadowOpacity?: number | undefined | string;
  shadowRadius?: number | undefined | string;
}

interface PerpectiveTransform {
  perspective: number | string;
}

interface RotateTransform {
  rotate: string;
}

interface RotateXTransform {
  rotateX: string;
}

interface RotateYTransform {
  rotateY: string;
}

interface RotateZTransform {
  rotateZ: string;
}

interface ScaleTransform {
  scale: number | string;
}

interface ScaleXTransform {
  scaleX: number | string;
}

interface ScaleYTransform {
  scaleY: number | string;
}

interface TranslateXTransform {
  translateX: number | string;
}

interface TranslateYTransform {
  translateY: number | string;
}

interface SkewXTransform {
  skewX: string;
}

interface SkewYTransform {
  skewY: string;
}

interface MatrixTransform {
  matrix: number[];
}

export interface TransformsStyle {
  transform?:
    | (
        | PerpectiveTransform
        | RotateTransform
        | RotateXTransform
        | RotateYTransform
        | RotateZTransform
        | ScaleTransform
        | ScaleXTransform
        | ScaleYTransform
        | TranslateXTransform
        | TranslateYTransform
        | SkewXTransform
        | SkewYTransform
        | MatrixTransform
      )[]
    | undefined;
  /**
   * @deprecated Use matrix in transform prop instead.
   */
  transformMatrix?: Array<number> | undefined;
  /**
   * @deprecated Use rotate in transform prop instead.
   */
  rotation?: number | undefined | string;
  /**
   * @deprecated Use scaleX in transform prop instead.
   */
  scaleX?: number | undefined | string;
  /**
   * @deprecated Use scaleY in transform prop instead.
   */
  scaleY?: number | undefined | string;
  /**
   * @deprecated Use translateX in transform prop instead.
   */
  translateX?: number | undefined | string;
  /**
   * @deprecated Use translateY in transform prop instead.
   */
  translateY?: number | undefined | string;
}

export interface ViewStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
  backfaceVisibility?: 'visible' | 'hidden' | undefined;
  backgroundColor?: ColorValue | undefined;
  borderBottomColor?: ColorValue | undefined;
  borderBottomEndRadius?: number | undefined | string;
  borderBottomLeftRadius?: number | undefined | string;
  borderBottomRightRadius?: number | undefined | string;
  borderBottomStartRadius?: number | undefined | string;
  borderBottomWidth?: number | undefined | string;
  borderColor?: ColorValue | undefined;
  borderEndColor?: ColorValue | undefined;
  borderLeftColor?: ColorValue | undefined;
  borderLeftWidth?: number | undefined | string;
  borderRadius?: number | undefined | string;
  borderRightColor?: ColorValue | undefined;
  borderRightWidth?: number | undefined | string;
  borderStartColor?: ColorValue | undefined;
  borderStyle?: 'solid' | 'dotted' | 'dashed' | undefined;
  borderTopColor?: ColorValue | undefined;
  borderTopEndRadius?: number | undefined | string;
  borderTopLeftRadius?: number | undefined | string;
  borderTopRightRadius?: number | undefined | string;
  borderTopStartRadius?: number | undefined | string;
  borderTopWidth?: number | undefined | string;
  borderWidth?: number | undefined | string;
  opacity?: number | undefined | string;
  testID?: string | undefined;
  /**
   * Sets the elevation of a view, using Android's underlying
   * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
   * This adds a drop shadow to the item and affects z-order for overlapping views.
   * Only supported on Android 5.0+, has no effect on earlier versions.
   *
   * @platform android
   */
  elevation?: number | undefined | string;
}

interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
  color?: ColorValue | undefined;
  fontFamily?: string | undefined;
  fontSize?: number | undefined | string;
  fontStyle?: 'normal' | 'italic' | undefined;
  /**
   * Specifies font weight. The values 'normal' and 'bold' are supported
   * for most fonts. Not all fonts have a variant for each of the numeric
   * values, in that case the closest one is chosen.
   */
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined
    | 'string';
  letterSpacing?: number | undefined | string;
  lineHeight?: number | undefined | string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
  textDecorationColor?: ColorValue | undefined;
  textShadowColor?: ColorValue | undefined;
  textShadowOffset?:
    | { width: number | string; height: number | string }
    | undefined;
  textShadowRadius?: number | undefined | string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  testID?: string | undefined;
}

export type NamedStyles<T> = {
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
