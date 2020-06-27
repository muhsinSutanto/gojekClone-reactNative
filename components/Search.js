import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={{flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={styles.textSearch}
        />
        <Image
          style={styles.IconSearch}
          source={require('../assets/icons/search.png')}
        />
      </View>
      <View style={styles.qrContainer}>
        <Image source={require('../assets/icons/promo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    height: 60,
    paddingHorizontal: 17,
  },
  textSearch: {
    marginRight: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    paddingLeft: 45,
  },
  IconSearch: {
    position: 'relative',
    top: -35,
    left: 10,
  },
  qrContainer: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
