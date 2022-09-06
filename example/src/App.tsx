import * as React from 'react';

import { View } from 'react-native';
import { getStyleSheet } from 'react-native-stylesheet-plus';

const StyleSheetPlus = getStyleSheet();

export default function App() {
  const { styles } = StyleSheetPlus.useStyles(rawStyles);
  console.log('styles', styles.container);
  return (
    <View style={styles.container}>
      <View style={styles.testView} />
    </View>
  );
}

const rawStyles = StyleSheetPlus.createStyles({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
  },
  testView: {
    width: 'clamp(200, 100vw, 500)',
    height: 100,
    backgroundColor: 'red',
    alignSelf: 'center',
    fontSize: '10rem',
    textAlign: 'justify',
  },
  text: {
    fontSize: [20, 25],
    width: '100vw',
  },
});
