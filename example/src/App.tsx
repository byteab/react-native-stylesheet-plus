import * as React from 'react';

import { View, Text } from 'react-native';
import { getStyleSheet } from 'react-native-responsive-stylesheet';

const reStyleSheet = getStyleSheet();

export default function App() {
  const { styles } = reStyleSheet.useStyles(rawStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is some random text!!</Text>
      <Text style={styles.text}>This is some random text!!</Text>
    </View>
  );
}

const rawStyles = reStyleSheet.createStyles({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
  },
  text: {
    fontSize: [20, 25],
  },
});