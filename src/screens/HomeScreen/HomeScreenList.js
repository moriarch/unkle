import React, {useEffect, useState} from 'react';
import {FlatList, View,Text} from 'react-native';
import TitleInner from '../../components/common/TitleInner';
import {ListPageRequest} from '../../constants/API';
import {body} from '../../constants/theme';
import Skeleton from '../../components/common/Skeleton';
import ListElement from '../../components/homescreen/ListElement';

export default function HomeScreenList({route, navigation}) {
  const {id, title} = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    ListPageRequest(id).then(res => setData(res));
  }, []);

  return data ? (
    <FlatList
      data={data.items}
      contentContainerStyle={body}
      ListHeaderComponent={<TitleInner title={title} />}
      ListHeaderComponentStyle={{marginBottom: 45}}
      renderItem={({item, index}) => (
        <ListElement
          item={item}
          index={index}
          all={data.items.length}
          onSelect={() =>
            navigation.navigate('Detail', {id: item.id, title: item.name})
          }
        />
      )}
     
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  ) : (
    <Loading count={5} title={title} />
  );
}

const Loading = ({count, title}) => (
  <View style={body}>
    <TitleInner title={title} />
    <View style={{marginTop: 45}}>
      {[...new Array(count)].map((it, i) => (
        <Skeleton
          key={'skelet' + i}
          style={{marginBottom: 15, borderRadius: 15, height: 70}}
        />
      ))}
    </View>
  </View>
);
