import React, {useEffect, useState} from 'react';

import {body, container, h1} from '../../constants/theme';
import {FlatList, Text, View} from 'react-native';
import Skeleton from '../../components/common/Skeleton';
import {CalculatorPageRequest} from '../../constants/API';
import FadeInUp from '../../components/animated/FadeInUp';
import CalculateListItem from '../../components/calculatescreen/CalculateListItem';

export default function CalculatorScreen({navigation}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    CalculatorPageRequest().then(res => setData(res));
  }, []);

  return (
    <View style={body}>
      {data ? (
        <Content data={data} goList={navigation} />
      ) : (
        <Loading count={6} />
      )}
    </View>
  );
}

const Loading = ({count}) => (
  <>
    <Text style={[container, h1, {paddingBottom: 80}]}>Калькулятор</Text>
    {[...new Array(count)].map((it, i) => (
      <Skeleton
        key={'skelet' + i}
        style={{marginBottom: 15, borderRadius: 15, height: 70}}
      />
    ))}
  </>
);

function Content({data, goList}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<Text style={[container, h1]}>Калькулятор</Text>}
      ListHeaderComponentStyle={{marginBottom: 45}}
      contentContainerStyle={{paddingBottom: 80}}
      renderItem={({item, index}) => (
        <FadeInUp delay={300 * index}>
          <CalculateListItem
            data={item}
            goList={() =>
              goList.navigate('CalculatorList', {
                name: item.name,
                items: item,
              })
            }
          />
        </FadeInUp>
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}
