# react-native-stylesheet-plus

a responsive alternative to react native stylesheet

## Installation

```sh
npm install react-native-stylesheet-plus
```

## Usage

```js
import * as React from 'react';
import { View, Text } from 'react-native';
import { getStyleSheet } from 'react-native-stylesheet-plus';

const reStyleSheet = getStyleSheet();

function App() {
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
