# react-native-error-helper

> A helper for React Native to catch global JS errors and provide some ways to resolve error boundaries.


![LICENSE](https://img.shields.io/badge/license-MIT-blue) ![npm-version](https://img.shields.io/npm/v/react-native-error-helper) ![npm](https://img.shields.io/npm/dm/react-native-error-helper.svg)


<!-- [![https://nodei.co/npm/react-native-error-helper.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-native-error-helper.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-error-helper) -->


## Table of Contents
- [Install](#Install)
- [Usage](#Usage)
  - [setGlobalErrorHandler](#setGlobalErrorHandler)
  - [setPromiseUnCatchHandler](#setPromiseUnCatchHandler)
  - [ErrorBoundary](#ErrorBoundary)
  - [withErrorBoundary](#withErrorBoundary)
- [LICENSE](#LICENSE)


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

### ErrorBoundary

```js
import { ErrorBoundary } from 'react-native-error-helper';

const App = () => (
  <ErrorBoundary>
    <BugComponent />
  </ErrorBoundary>
)
```

### withErrorBoundary

#### class component

```js
import { withErrorBoundary } from 'react-native-error-helper';

@withErrorBoundary({
  renderBoundary: ({error}) => {
    return <Text>catch error: {error.message}</Text>;
  },
})
class BugCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  render() {
    const {isError} = this.state;
    if (isError) {
      throw new Error('💥');
    } else {
      return (
        <Text
          onPress={() => {
            this.setState({
              isError: true
            });
          }}>
          {String(isError)}
        </Text>
      );
    }
  }
}
```
#### function component

```js
import { withErrorBoundary } from 'react-native-error-helper';

const BugCounter = props => {
  const [isError, setIsError] = useState();
  if (isError) {
    throw new Error('💥');
  } else {
    return (
      <Text
        onPress={() => {
          this.setState({
            isError: true
          });
        }}>
        {String(isError)}
      </Text>
    )
  }
}

const SafeCenter = withErrorBoundary({
  renderBoundary: ({error}) => {
    return <Text>catch error: {error.message}</Text>;
  },
})(BugCounter);
```

## LICENSE

MIT