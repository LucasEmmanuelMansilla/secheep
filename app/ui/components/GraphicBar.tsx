import {View, Text, Pressable} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/globalStyles';
import Animation from './Animation';
import {COLORS} from '../../styles/colors';

type Month = {
  name: string;
  consumption: number;
  pay: number;
};

type Props = {
  data: Array<Month>;
  index: number;
  item: Month;
  maxValuePay: number;
  maxValueConsumption: number;
};

export default function GraphicBar({
  data,
  index,
  item,
  maxValuePay,
  maxValueConsumption,
}: Props) {
  return (
    <View
      style={[
        GlobalStyles({}).flatListItemContainer,
        index === data.length - 1 && GlobalStyles({}).borderBottom,
        GlobalStyles({}).borderTop,
      ]}>
      <Text style={[GlobalStyles({}).textDarkgrey, GlobalStyles({}).width7]}>
        {item.name}
      </Text>
      <View style={GlobalStyles({}).paddingLeft5}>
        <Pressable>
          <Animation
            styles={[
              GlobalStyles({
                consumption: item.consumption,
                maxValue: maxValueConsumption,
              }).graphicConsumption,
              GlobalStyles({}).backgroundColorBlue,
            ]}
            color={COLORS.blue}
          />
        </Pressable>
        <Pressable>
          <Animation
            styles={[
              GlobalStyles({pay: item.pay, maxValue: maxValuePay}).graphicPay,
              GlobalStyles({}).backgroundColorPink,
            ]}
            color={COLORS.pink}
          />
        </Pressable>
      </View>
    </View>
  );
}
