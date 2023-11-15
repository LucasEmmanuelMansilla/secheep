import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';
import GlobalStyles from '../../../styles/globalStyles';
import LastInvoiceDetails from '../../components/LastInvoiceDetails';
import {WELCOME_MESSAGE} from '../../../utils/constants';
import TotalConsumtion from '../../components/TotalConsumtion';
import Graphics from '../../components/Graphics';

export default function LandingUI() {
  return (
    <View style={styles.container}>
      <CustomText text={WELCOME_MESSAGE} styles={GlobalStyles({}).title} />
      <LastInvoiceDetails />
      <TotalConsumtion />
      <Graphics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
