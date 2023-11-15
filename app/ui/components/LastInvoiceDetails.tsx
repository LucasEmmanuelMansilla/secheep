import {View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GlobalStyles from '../../styles/globalStyles';
import {LAST_INVOICE_DETAILS, LAST_UPDATE} from '../../utils/constants';
import PriceLastInvoice from './PriceLastInvoice';
import CustomText from './CustomText';

export default function LastInvoiceDetails() {
  const date: Date = new Date();
  return (
    <LinearGradient
      colors={['#3F51B5', '#2196F3']}
      style={GlobalStyles({}).gradientContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <CustomText styles={{}} text={LAST_INVOICE_DETAILS} />
      <PriceLastInvoice />
      <View style={[GlobalStyles({}).row, GlobalStyles({}).marginTop]}>
        <CustomText
          styles={GlobalStyles({}).textLightgrey}
          text={LAST_UPDATE}
        />
        <CustomText
          text={date.toLocaleDateString()}
          styles={GlobalStyles({}).marginLeft3}
        />
      </View>
    </LinearGradient>
  );
}
