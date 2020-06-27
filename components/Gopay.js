import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Gopay = ({gopay_category}) => {
  // console.log(gopay_category);
  return (
    <View style={styles.gopayContainer}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/icons/gopay.png')} />
        <Text style={styles.topText}>Rp10.000</Text>
      </View>
      <View style={styles.gopayCategoryContainer}>
        {gopay_category.map((item, idx) => (
          <View key={idx} style={styles.gopayCategoryCard}>
            <Image source={item.image} />
            <Text style={styles.gopayCardText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gopayContainer: {
    paddingHorizontal: 17,
  },
  topContainer: {
    padding: 14,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2c5FB8',
  },
  topText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  gopayCategoryContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  gopayCategoryCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gopayCardText: {
    color: 'white',
    fontSize: 13,
    marginTop: 5,
  },
});

export default Gopay;
