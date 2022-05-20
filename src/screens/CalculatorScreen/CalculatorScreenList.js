import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TitleInner from '../../components/common/TitleInner';
import {body} from '../../constants/theme';

export default function CalculatorScreenList({route}) {
  const {name, items} = route.params;
  return (
    <ScrollView style={body}>
      <TitleInner title={name} />
      {items.section.map((section, i) => (
        <Section key={'inner' + i} data={section} />
      ))}
      
    </ScrollView>
  );
}
function Section({data}) {
  return (
    <View style={styles.section}>
      <Text style={styles.tile}>{data.name}</Text>
      {data.childs.type==='radio'?  data.childs.items.map(it=><Check data={it}/>): data.childs.items.map(it=><Radio data={it}/>)}
    </View>
  );
}

function Check({data}) {
  return (
    <View>
       <Text style={{color: 'white'}}>{data.name}</Text>
    </View>
  );
}

function Radio({data}) {
  return (
    <View>
       <Text style={{color: 'white'}}>{data.name}</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  tile: {
    color: '#8C8C8C',
    letterSpacing: 1,
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor:' rgba(206, 206, 206, 0.07)',
    padding:17
  },
  inputes:{
    color:'white',

  }
});
