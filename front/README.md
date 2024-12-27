This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

```
yarn install
yarn start
i (ios)
a (android)
```

* ios 실행이 안될 경우, ios > pod > xplat > Flipper > utils > FlipperTransportTypes.h 두번째 줄에 다음 내용 삽입
```
#include <functional>
```