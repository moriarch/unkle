import React, {useEffect, useState} from 'react';

import {body, container, h1} from '../constants/theme';
import {FlatList, Text, View} from 'react-native';
import Skeleton from '../components/common/Skeleton';
import {CalculatorPageRequest} from '../constants/API';
import FadeInUp from '../components/animated/FadeInUp';
import CalculateListItem from '../components/calculatescreen/CalculateListItem';

export default function CalculatorScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    CalculatorPageRequest().then(res => setData(res));
  }, []);

  return (
    <View style={body}>
      {data ? <Content data={data} /> : <Loading count={5} />}
    </View>
  );
}

const Loading = ({count}) =>
  [...new Array(count)].map((it,i) => <Skeleton key={'skelet'+i} style={{marginBottom: 40}} />);

function Content({data}) {
  return (
    <FlatList
      data={data}
      // contentContainerStyle={body}
      ListHeaderComponent={<Text style={[container, h1]}>Калькулятор</Text>}
      ListHeaderComponentStyle={{marginBottom: 45}}
      renderItem={({item, index}) => (
        <FadeInUp delay={300 * index}>
            <CalculateListItem data={item}/>
        </FadeInUp>
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}
