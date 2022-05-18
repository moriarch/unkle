import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import TitleInner from '../components/common/TitleInner';
import {DetailPageRequest} from '../constants/API';
import {body, container} from '../constants/theme';

export default function HomeScreenDetail({route, navigation}) {
  const {id, title} = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    DetailPageRequest(id).then(res => setData(res));
  }, []);
  return  data ? (
    <View style={body}>
      <TitleInner title={title} />
      <ScrollView style={{marginTop:45,...container}}>
      <Text style={{color: 'white', fontSize:20}}>{data['detail_text']}</Text>
      </ScrollView>
    </View>
  ): null
}
