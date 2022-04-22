import React from 'react';
import { DATA_LENGTH } from '../constants';
export function useInitProps(props) {
  var _props$enableSnap;

  const {
    defaultIndex = 0,
    data: rawData = [],
    loop = true,
    enabled = true,
    autoPlayInterval: _autoPlayInterval = 1000,
    scrollAnimationDuration = 500,
    style = {},
    panGestureHandlerProps = {},
    pagingEnabled = true,
    snapEnabled = (_props$enableSnap = props.enableSnap) !== null && _props$enableSnap !== void 0 ? _props$enableSnap : true,
    width: _width,
    height: _height
  } = props;
  const width = Math.round(_width || 0);
  const height = Math.round(_height || 0);
  const autoPlayInterval = Math.max(_autoPlayInterval, 0);
  const data = React.useMemo(() => {
    if (!loop) return rawData;

    if (rawData.length === DATA_LENGTH.SINGLE_ITEM) {
      return [rawData[0], rawData[0], rawData[0]];
    }

    if (rawData.length === DATA_LENGTH.DOUBLE_ITEM) {
      return [rawData[0], rawData[1], rawData[0], rawData[1]];
    }

    return rawData;
  }, [rawData, loop]);

  if (props.mode === 'vertical-stack' || props.mode === 'horizontal-stack') {
    var _props$modeConfig$sho, _props$modeConfig;

    if (!props.modeConfig) {
      props.modeConfig = {};
    }

    props.modeConfig.showLength = (_props$modeConfig$sho = (_props$modeConfig = props.modeConfig) === null || _props$modeConfig === void 0 ? void 0 : _props$modeConfig.showLength) !== null && _props$modeConfig$sho !== void 0 ? _props$modeConfig$sho : data.length - 1;
  }

  return { ...props,
    defaultIndex,
    data,
    rawData,
    loop,
    enabled,
    autoPlayInterval,
    scrollAnimationDuration,
    style,
    panGestureHandlerProps,
    pagingEnabled,
    snapEnabled,
    width,
    height
  };
}
//# sourceMappingURL=useInitProps.js.map