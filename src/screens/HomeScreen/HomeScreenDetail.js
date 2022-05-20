import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import TitleInner from '../../components/common/TitleInner';
import {DetailPageRequest} from '../../constants/API';
import {body, container, colors, font} from '../../constants/theme';

export default function HomeScreenDetail({route, navigation}) {
  const {id, title} = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    DetailPageRequest(id).then(res => setData(res));
  }, []);
  return data ? (
    <View style={body}>
      <TitleInner title={title} />
      <ScrollView style={{marginTop: 45}}>
        <Text style={{color: 'white', fontSize: 20,...container, fontFamily:font.normal}}>
          {data['detail_text']}
        </Text>
      </ScrollView>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...body,
        paddingBottom: 80,
      }}>
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={{marginTop: 40}}
      />
    </View>
  );
}
