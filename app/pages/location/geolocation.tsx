import React , { useEffect, useState } from "react";
import { Text, View } from "react-native";
import geolocation from "@react-native-community/geolocation"

const GeoLocation = () => {
    const [location, setLocation] = useState('')
    useEffect(() => {
      geolocation.getCurrentPosition((pos) => {
      console.log(pos)
        let coords = pos.coords;
        setLocation(coords.longitude + "," + coords.latitude)
      },(err)=>{
        console.log(err)
      })
    }, [])
    return (
      <View>
        <Text>hahhahah</Text>
        <Text>{location}</Text>
      </View>
    );
  };

export default GeoLocation