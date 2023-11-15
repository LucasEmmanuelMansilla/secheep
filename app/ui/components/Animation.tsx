import {useWindowDimensions, ViewProps, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Canvas, Fill, Rect} from '@shopify/react-native-skia';
type Props = {
  styles: ViewProps['style'];
  color?: string;
};

export default function Animation({styles, color}: Props) {
  const {width: windowWidth} = useWindowDimensions();
  const width = useSharedValue(40);
  const rect = useDerivedValue(() => {
    return {
      x: 0,
      y: 0,
      width: width.value,
      height: 15,
    };
  });
  useEffect(() => {
    width.value = withTiming(windowWidth, {duration: 2000});
  }, [width, windowWidth]);
  return (
    <View>
      <Canvas style={styles}>
        <Fill color="white" />
        <Rect rect={rect} color={color} />
      </Canvas>
    </View>
  );
}
