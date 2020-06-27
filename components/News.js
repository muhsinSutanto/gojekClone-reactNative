import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const News = () => {
  return (
    <View style={styles.newsContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/covid.jpg')}
        />
        <View style={styles.overlay} />
        <Image
          style={styles.whiteIcon}
          source={require('../assets/icons/white.png')}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>GO-NEWS</Text>
        <Text style={styles.contentDesc}>
          Covid-19 saat ini sudah menyerang sebagian besar daerah di Indonesia,
          tetapi banyak warga acuh menggunakan masker
        </Text>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnText}>Read</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    paddingTop: 15,
    paddingHorizontal: 17,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: 7,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  whiteIcon: {
    position: 'absolute',
    width: 55,
    height: 15,
    top: 15,
    left: 15,
  },
  contentContainer: {
    paddingVertical: 16,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentDesc: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  btnWrapper: {
    marginTop: 11,
    paddingHorizontal: 12,
    paddingVertical: 11,
    backgroundColor: '#61A756',
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default News;
