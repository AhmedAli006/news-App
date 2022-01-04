import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
 
  TouchableOpacity,
} from 'react-native';
import styling from '../../style';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
export default function Saved() {
  const [value, setValue] = useState()
  const s = StyleSheet.create(styling);
const getData = ()=>{
  AsyncStorage.getItem('key')
.then((value)=>{
setValue(value)
console.log(value);
})
}
getData()
    return (
      <>
 <View style={[s.main, s.bgWhite]}>
            <View style={[s.header, s.flexCenter]}>
              <Text style={[s.txtWhite, s.fs2]}>Saved</Text>
            </View>

            <Text>{value}</Text>
            </View>

      </>
    )
}
