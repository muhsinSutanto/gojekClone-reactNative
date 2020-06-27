import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Navigation = ({routes}) => {
  return (
    <View style={styles.navigationContainer}>
      {routes.map((item, idx) => (
        <View key={idx} style={styles.navigationCard}>
          <Image style={styles.navigationIcon} source={item.image} />
          <Text style={styles.navigationText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    height: 54,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  navigationCard: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationIcon: {
    width: 26,
    height: 26,
  },
  navigationText: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
});

export default Navigation;
