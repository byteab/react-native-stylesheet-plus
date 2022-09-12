# react-native-stylesheet-plus

#### An alternative to react native stylesheet

## Installation

```sh
npm install react-native-stylesheet-plus
```

## Usage

```js
import * as React from 'react';

import { View } from 'react-native';
import { getStyleSheet } from 'react-native-stylesheet-plus';

// make only one global StyleSheetPlus
// but if you want different breakpoints for different pages
// you can create as many StyleSheetPlus objects as you want
// export const StyleSheetPlus = getStyleSheet();
export const StyleSheetPlus = getStyleSheet({ tablet: 700, laptop: 1100, desktop: 1500 })

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
