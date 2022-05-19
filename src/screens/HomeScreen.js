import React, {useEffect, useState} from 'react';
import {ScrollView, ActivityIndicator, View, RefreshControl} from 'react-native';
import {body, colors} from '../constants/theme';
import SectionService from '../components/homescreen/SectionService';
import SectionLogo from '../components/homescreen/SectionLogo';
import SectionCalculator from '../components/homescreen/SectionCalculator';
import {MainPageRequest} from '../constants/API';

const HomeScreen = ({navigation}) => {

  const [data, setData] = useState(null);
  useEffect(() => {
    MainPageRequest().then(res => setData(res));
  }, []);
  const onRefresh = React.useCallback(() => {
    setData(false);
    MainPageRequest().then(res =>setData(res));
  }, []);

  return (
    <ScrollView style={body} showsVerticalScrollIndicator={false} refreshControl={
      <RefreshControl
        refreshing={data===false ? true : false}
        colors={[colors.primary,"white"]}
        progressBackgroundColor="transparent"
        title="Update screen"
        tintColor={colors.primary}
        titleColor="white"
        onRefresh={onRefresh}
      />
    }>
      <SectionLogo />
      <SectionCalculator goCalc={() =>
            navigation.navigate('Calculator')}/>
      <View style={{paddingBottom: 150}}>
        <Content data={data} />
      </View>
    </ScrollView>
  );
};
function Content({data}) {
  return data ? (
    data.map(section => <SectionService key={section.name} data={section} />)
  ) : (
    <ActivityIndicator
      size="large"
      color={colors.primary}
      style={{marginTop: 40}}
    />
  );
}
export default HomeScreen;
