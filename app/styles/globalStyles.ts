import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from './colors';

type Props = {
  consumption?: number;
  pay?: number;
  maxValue?: number;
};

const GlobalStyles = ({consumption, pay, maxValue}: Props) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: hp('2%'),
      backgroundColor: 'white',
    },
    title: {
      fontSize: hp('2.5%'),
      color: COLORS.indigo,
      marginVertical: hp('2%'),
      fontWeight: 'bold',
    },
    banner: {
      width: wp('100%'),
    },
    row: {
      flexDirection: 'row',
    },
    marginTop: {
      marginTop: hp('2%'),
    },
    textLightgrey: {
      color: COLORS.lightGrey,
    },
    textDarkgrey: {
      color: COLORS.darkGrey,
    },
    gradientContainer: {
      width: '100%',
      height: hp('15%'),
      borderRadius: 10,
      marginVertical: hp('2%'),
      padding: hp('2%'),
    },
    marginLeft3: {
      marginLeft: wp('3%'),
    },
    paddingLeft5: {
      marginLeft: wp('5%'),
    },
    width7: {
      width: wp('7%'),
    },
    priceLastInvoiceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp('1%'),
    },
    priceLastInvoice: {
      fontWeight: 'bold',
      fontSize: hp('3%'),
    },
    priceLastInvoiceInterests: {
      color: COLORS.red,
    },
    darkText: {
      color: COLORS.black,
      fontSize: hp('2%'),
    },
    darkTextBold: {
      color: COLORS.black,
      fontSize: hp('3.5%'),
      fontWeight: 'bold',
    },
    totalConsumptionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp('5%'),
    },
    totalConsumption: {
      height: hp('15%'),
      justifyContent: 'space-around',
    },
    grapihicsContainer: {
      marginTop: hp('5%'),
    },
    flatListGraphicContainer: {
      height: hp('40%'),
    },
    flatListItemContainer: {
      flexDirection: 'row',
      height: hp('5%'),
      alignItems: 'center',
    },
    borderRight: {
      borderRightWidth: 1,
    },
    borderBottom: {
      borderBottomWidth: 1,
    },
    borderTop: {
      borderTopWidth: 1,
    },
    graphicConsumption: {
      height: hp('2%'),
      width: consumption && maxValue && (consumption * 200) / maxValue,
      borderBottomRightRadius: wp('1%'),
      borderTopRightRadius: wp('1%'),
    },
    graphicPay: {
      height: hp('2%'),
      width: pay && maxValue && (pay * 200) / maxValue,
      borderBottomRightRadius: wp('1%'),
      borderTopRightRadius: wp('1%'),
    },
    backgroundColorPink: {
      backgroundColor: COLORS.pink,
    },
    backgroundColorBlue: {
      backgroundColor: COLORS.blue,
    },
    barContainer: {
      position: 'absolute',
      bottom: 0,
    },
    scaleContainer: {
      flexDirection: 'row',
      width: wp('100%') / 2,
      justifyContent: 'space-between',
      marginLeft: wp('3.5%'),
    },
    squareContainer: {
      height: 100,
      marginLeft: wp('4%'),
      marginTop: hp('2%'),
    },
    square: {
      width: 20,
      height: 20,
      marginRight: wp('1%'),
    },
  });
export default GlobalStyles;
