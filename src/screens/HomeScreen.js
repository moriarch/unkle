import React from 'react';
import {ScrollView} from 'react-native';
import {body} from '../constants/theme';
import SectionService from '../components/homescreen/section_service';
import SectionLogo from '../components/homescreen/section_logo';
import SectionCalculator from '../components/homescreen/section_calculator';
const HomeScreen = () => {
  return (
    <ScrollView style={body}>
      <SectionLogo />
      <SectionCalculator />
      <SectionService />
    </ScrollView>
  );
};

export default HomeScreen;
