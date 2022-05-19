import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import TitleInner from '../components/common/TitleInner';
import {ListPageRequest} from '../constants/API';
import {body, colors, container} from '../constants/theme';

import ListElement from '../components/homescreen/ListElement';
import Separator from '../components/common/Separator';

export default function HomeScreenList({route, navigation}) {
  const {id, title} = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    ListPageRequest(id).then(res => setData(res));
  }, []);

  return  data ? (
        <FlatList
          data={data.items}
          contentContainerStyle={body}
          ListHeaderComponent={<TitleInner title={title} />}
          ItemSeparatorComponent={()=><Separator delay={data.items.length*300}/>}
          ListHeaderComponentStyle={{marginBottom:45}}
          renderItem={({item, index}) => (
            <ListElement
              item={item}
              index={index}
              onSelect={() =>
                navigation.navigate('Detail', {id: item.id, title: item.name})
              }
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
       <View style={{flex:1,justifyContent:'center',alignItems:'center',...body,paddingBottom:80}}>
         <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{marginTop: 40}}
        />
       </View>
      )
  
}
