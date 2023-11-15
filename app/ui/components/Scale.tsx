import {View, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/globalStyles';

interface Props {
  value: number;
}

export default function Scale({value}: Props) {
  return (
    <View style={GlobalStyles({}).scaleContainer}>
      <Text style={GlobalStyles({}).textDarkgrey}>0</Text>
      <Text style={GlobalStyles({}).textDarkgrey}>{value / 4}</Text>
      <Text style={GlobalStyles({}).textDarkgrey}>{value / 2}</Text>
      <Text style={GlobalStyles({}).textDarkgrey}>{value * 0.75}</Text>
      <Text style={GlobalStyles({}).textDarkgrey}>{value}</Text>
    </View>
  );
}
