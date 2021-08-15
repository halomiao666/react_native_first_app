import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import GeoLocation from '../location/geolocation'
const Login = () => {
  return (
    <View>
      <GeoLocation></GeoLocation>
      <Image
        source={require('../../common/img/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});

export default Login;
