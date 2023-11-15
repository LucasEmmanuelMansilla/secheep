import {View, Text, TextProps} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/globalStyles';

type Props = {
  styles?: TextProps['style'];
  text: string;
};

export default function CustomText({styles, text}: Props) {
  return (
    <View>
      <Text style={styles ? styles : GlobalStyles({}).textDarkgrey}>
        {text}
      </Text>
    </View>
  );
}
