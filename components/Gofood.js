import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

const Gofood = () => {
  return ( <View style={{paddingHorizontal: 17}}>
    <View style={{height:15, width:60}}>
      <Image source={require('../assets/icons/go-food-logo.png')} />
    </View>
    <View>
      <Text>Nearby Restaurants</Text>
      <Text>See All</Text>
    </View>
    <View>
        <View>
          <View>
            <Image />
          </View>
        </View>
    </View>
  </View>  );
}
 
export default Gofood;