import React from 'react';

import HomeStackScreen from '../navigations/HomeStackScreen';
import HomeIco from '../assets/tabicons/home'

import ContactsScreen from '../screens/ContactsScreen';
import ContactsIco from '../assets/tabicons/contacts'



import {colors} from '../constants/theme';

export const tabs = [
    {
      name: 'HomeTab',
      component: HomeStackScreen,
     
    },
    {
      name: 'Contacts',
      component: ContactsScreen,
      
    }
  ];


  export function Icon({name,focused}){
      if(name==='HomeTab')
      return <HomeIco color={focused? colors.primary :'white'}/>
      if(name==='Contacts')
      return <ContactsIco color={focused? colors.primary :'white'}/>

      return null
  }