import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Gopay from './components/Gopay';
import Services from './components/Services';
import News from './components/News';
import Gofood from './components/Gofood';
import Data from './assets/dummy/data';
import Routes from './assets/dummy/routes';

const App = () => {
  return (
    <View style={styles.screen}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Search />
        <Gopay gopay_category={Data.GOPAY_CATEGORY} />
        <Services service_list={Data.SERVICES} />
        <View style={styles.borderSection} />
        <News />
        {/* <Gofood/> */}
      </ScrollView>
      <Navigation routes={Routes.NAVIGATION} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  borderSection: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 15,
  },
});

export default App;
