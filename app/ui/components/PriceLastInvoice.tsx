import {View} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/globalStyles';
import CustomText from './CustomText';

export default function PriceLastInvoice() {
  return (
    <View style={GlobalStyles({}).priceLastInvoiceContainer}>
      <CustomText styles={GlobalStyles({}).priceLastInvoice} text="$ 10.000" />
      <CustomText
        styles={[
          GlobalStyles({}).priceLastInvoiceInterests,
          GlobalStyles({}).marginLeft3,
        ]}
        text="+ $1200"
      />
    </View>
  );
}
