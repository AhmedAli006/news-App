import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function News({navigation}) {
  const s = StyleSheet.create(styling);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const api =
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4b5aaa475d2c40a4933d26aa2e70ec5a';
    axios.get(api).then(res => {
      setNews(res.data.articles);
    });
  }, []);
  const nav = () =>{
      navigation.navigate('Saved')
  }
  // useEffect(() => {
  //   console.log(news);
  // }, [news]);
  const save = () => {
    AsyncStorage.setItem(2 ,"data sent");
  };
  return (
    <>
      {news.length > 0 ? (
        <>
          <View style={[s.main, s.bgWhite]}>
            <View
              style={[
                s.header,
                s.flexRow,
                s.flexCenter,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[s.txtWhite, s.fs2, s.p2]}>NEWS</Text>
              <TouchableOpacity onPress={ nav} style={[{backgroundColor:"#e5e5e5",borderRadius:15,marginRight:15}]}>
                <Text style={[{margin:12 }]}>Saved</Text>
              </TouchableOpacity>
            </View>

            {/* cards */}

            <ScrollView style={{flex: 1}}>
              {news.map((e, key) => {
                return (
                  <View key={key} style={(s.container, s.shadow3, s.p1)}>
                    <Image
                      resizeMode="cover"
                      style={{width: '100%', height: 250}}
                      source={{
                        uri: e.urlToImage,
                      }}
                    />
                    <View style={[{backgroundColor: '#a4ac86'}, s.w100]}>
                      <Text
                        style={[
                          s.p1,
                          s.fs6,
                          {textAlign: 'justify', fontWeight: '700'},
                        ]}>
                        {e.title}
                      </Text>
                    </View>

                    <View
                      style={[
                        {backgroundColor: '#e5e5e5', textAlign: 'justify'},
                        s.p1,
                      ]}>
                      <Text>{e.content}</Text>
                    </View>
                    <Text
                      style={[
                        s.flexCenter,
                        s.textCenter,
                        s.fs,
                        s.p1,
                        {textAlign: 'justify'},
                      ]}>
                      {e.description}
                    </Text>
                    <View style={{alignItems: 'flex-end'}}>
                      <TouchableOpacity onPress={save(key)}>
                        <Text style={[s.btn]}>save</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" style={[s.flexCenter, {flex: 1}]} />
      )}
    </>
  );
}

export default News;
