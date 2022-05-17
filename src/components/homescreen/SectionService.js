// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import TitleBorder from '../common/TitleBorder';
import Slide from './Slide';


import {useNavigation} from '@react-navigation/native';

export default function SectionService({data}) {
  const navigation = useNavigation();

  return (
    <>
      <TitleBorder title={data.name} route="List" category={data.id} />
      <FlatList
        data={data.items}
        renderItem={({item}) => (
        <Slide item={item} onSelect={() =>
          navigation.navigate('Detail', {id: item.id, title: item.name})
        }/>
     )}
        keyExtractor={item => item.id}
        style={{marginTop: 24}}
        initialNumToRender={4}
        contentContainerStyle={{paddingLeft:15}} 

        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
