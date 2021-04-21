<!--
 * @Author: iChengbo
 * @Date: 2021-04-17 21:56:05
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-04-22 00:22:18
 * @FilePath: /react-native-error-helper/README.md
-->
# react-native-error-helper ![npm](https://img.shields.io/npm/dm/react-native-error-helper.svg)

[![https://nodei.co/npm/react-native-error-helper.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-native-error-helper.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-error-helper)

## Install

> yarn add react-native-error-helper

## Usage

### setGlobalErrorHandler

```js
import { setGlobalErrorHandler } from 'react-native-error-helper';

setGlobalErrorHandler((error, isFatal) => {
  console.log('global error：', error, isFatal);
}, true);
```

### setPromiseUnCatchHandler

```js
import { setPromiseUnCatchHandler } from 'react-native-error-helper';

setPromiseUnCatchHandler((id, err) => {
  console.log('promise un catch：', err);
}, true);
```

### withErrorBoundary

```js
import { withErrorBoundary } from 'react-native-error-helper';

@withErrorBoundary({
  renderBoundary: ({error}) => {
    return <Text>自定义错误: {error.message}</Text>;
  },
})
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 || this.props.init,
    };
  }

  render() {
    const {count} = this.state;
    if (count === 5) {
      throw new Error('I error');
    } else {
      return (
        <View>
          <Text
            onPress={() => {
              this.setState({
                count: count + 1,
              });
            }}>
            {String(count)}
          </Text>
        </View>
      );
    }
  }
}
```