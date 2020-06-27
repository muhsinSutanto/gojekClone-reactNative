import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';

const Services = ({service_list}) => {
  return (
    <View style={styles.serviceContainer}>
      {service_list.map((item, idx) => (
        <View key={idx}>
          <View style={styles.serviceImage}>
            <Image source={item.image} />
          </View>
          <Text style={styles.serviceText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 17,
  },
  serviceImage: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 17,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default Services;
