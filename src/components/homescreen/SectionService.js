import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import TitleBorder from '../common/TitleBorder';
import Slide from './Slide';



export default function SectionService({data}) {
  

  return (
    <>
      <TitleBorder title={data.name} route="List" />
      <FlatList
        data={data.items}
        renderItem={Slide}
        keyExtractor={item => item.id}
        // removeClippedSubviews
        style={{marginTop: 24}}
        initialNumToRender={4}
        contentContainerStyle={{paddingLeft:15}} 

        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
