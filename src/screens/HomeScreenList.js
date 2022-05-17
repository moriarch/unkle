import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator, TouchableOpacity,StyleSheet} from 'react-native';
import TitleInner from '../components/common/TitleInner';
import {ListPageRequest} from '../constants/API';
import {body, colors, font} from '../constants/theme';
export default function HomeScreenList({route, navigation}) {
  const {id, title} = route.params;
  const [data, setData] = useState(null);
  useEffect(() => {
    ListPageRequest(id).then(res => setData(res));
  }, []);

  return (
    <View style={body}>
      <TitleInner title={title} />
      {data ? (
        <FlatList
          data={data.items}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.name}>{item['preview_text']}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{marginTop: 40}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom:15
  },
  name:{
    color:'white',
    fontFamily:font.bold
  }
});
