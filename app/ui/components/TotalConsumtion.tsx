import {View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import GlobalStyles from '../../styles/globalStyles';
import {TOTAL_CONSUMTION} from '../../utils/constants';

export default function TotalConsumtion() {
  return (
    <View style={GlobalStyles({}).totalConsumption}>
      <CustomText text={TOTAL_CONSUMTION} styles={GlobalStyles({}).darkText} />
      <CustomText text="1000 w" styles={GlobalStyles({}).darkTextBold} />
      <View style={GlobalStyles({}).row}>
        <CustomText
          styles={GlobalStyles({}).priceLastInvoiceInterests}
          text="+ 200"
        />
        <CustomText
          styles={[GlobalStyles({}).textDarkgrey, GlobalStyles({}).marginLeft3]}
          text="éste último mes"
        />
      </View>
    </View>
  );
}
