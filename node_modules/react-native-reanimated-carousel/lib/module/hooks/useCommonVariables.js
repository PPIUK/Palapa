import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
export function useCommonVariables(props) {
  const {
    vertical,
    height,
    width,
    data,
    defaultIndex
  } = props;
  const size = vertical ? height : width;
  const validLength = data.length - 1;
  const defaultHandlerOffsetX = -Math.abs(defaultIndex * size);
  const handlerOffsetX = useSharedValue(defaultHandlerOffsetX);
  React.useEffect(() => {
    handlerOffsetX.value = defaultHandlerOffsetX;
  }, [vertical, handlerOffsetX, defaultHandlerOffsetX]);
  return {
    size,
    validLength,
    handlerOffsetX
  };
}
//# sourceMappingURL=useCommonVariables.js.map