import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import HomeIco from '../assets/tabicons/home'

import ContactsScreen from '../screens/ContactsScreen';
import ContactsIco from '../assets/tabicons/contacts'



import {colors, sizes} from '../constants/theme';

export const tabs = [
    {
      name: 'Home',
      screen: HomeScreen,
     
    },
    {
      name: 'Contacts',
      screen: ContactsScreen,
      
    }
  ];


  export function Icon({name,focused}){
      if(name==='Home')
      return <HomeIco color={focused? colors.primary :'white'}/>
      if(name==='Contacts')
      return <ContactsIco color={focused? colors.primary :'white'}/>
  }