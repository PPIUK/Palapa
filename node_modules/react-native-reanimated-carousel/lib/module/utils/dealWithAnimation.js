import { withSpring, withTiming } from 'react-native-reanimated';
export function dealWithAnimation(withAnimation) {
  'worklet';

  switch (withAnimation.type) {
    case 'spring':
      return (value, cb) => {
        return withSpring(value, withAnimation.config, isFinished => cb(isFinished));
      };

    case 'timing':
      return (value, cb) => {
        return withTiming(value, withAnimation.config, isFinished => cb(isFinished));
      };
  }
}
//# sourceMappingURL=dealWithAnimation.js.map