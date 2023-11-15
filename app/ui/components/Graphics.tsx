import {View, Text, FlatList} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/globalStyles';
import data from '../../utils/data.json';
import Scale from './Scale';
import GraphicBar from './GraphicBar';

export default function Graphics() {
  const maxValuePay: number = Math.max(...data.map(item => item.pay));
  const maxValueConsumption: number = Math.max(
    ...data.map(item => item.consumption),
  );
  return (
    <View style={GlobalStyles({}).grapihicsContainer}>
      <View style={[GlobalStyles({}).flatListGraphicContainer]}>
        <View style={[GlobalStyles({}).row]}>
          <View style={[GlobalStyles({}).width7]} />
          <Scale value={maxValueConsumption} />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
          data={data}
          renderItem={({item, index}) => (
            <GraphicBar
              data={data}
              index={index}
              item={item}
              maxValueConsumption={maxValueConsumption}
              maxValuePay={maxValuePay}
            />
          )}
        />
        <View style={[GlobalStyles({}).row]}>
          <View style={[GlobalStyles({}).width7]} />
          <Scale value={maxValuePay} />
        </View>
      </View>
      <View style={[GlobalStyles({}).row]}>
        <View style={[GlobalStyles({}).row, GlobalStyles({}).squareContainer]}>
          <View
            style={[
              GlobalStyles({}).square,
              GlobalStyles({}).backgroundColorBlue,
            ]}
          />
          <Text style={GlobalStyles({}).textDarkgrey}>Consumo</Text>
        </View>
        <View style={[GlobalStyles({}).row, GlobalStyles({}).squareContainer]}>
          <View
            style={[
              GlobalStyles({}).square,
              GlobalStyles({}).backgroundColorPink,
            ]}
          />
          <Text style={GlobalStyles({}).textDarkgrey}>Pago</Text>
        </View>
      </View>
    </View>
  );
}
