import React from 'react';
import {
  Text,
  Linking,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {body, colors, container, font, h1, input} from '../constants/theme';

const social = [
  {
    name: 'VKONTAKTE',
    url: 'https://vk.com',
  },
  {
    name: 'INSTAGRAM',
    url: 'https://instagram.com',
  },
  {
    name: 'Facelook',
    url: 'https://facebook.com',
  },
];

export default function ContactsScreen() {
  return (
    <ScrollView style={body}>
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset="20"
        style={{flex: 1, backgroundColor: 'black', ...container}}>
        <View style={{alignItems: 'center'}}>
          <Text style={h1}>Контакты</Text>
        </View>
        <Text
          onPress={() => {
            Linking.openURL('tel:+74956643579');
          }}
          style={{
            color: 'white',
            fontSize: 24,
            fontFamily: font.bold,
            marginTop: 45,
          }}>
          +7 (495) 664-35-79
        </Text>
        <View style={{alignItems: 'flex-start', marginBottom: 10}}>
          <Text
            onPress={() => {
              Linking.openURL('mailto:+74956643579');
            }}
            style={{
              color: 'white',
              fontSize: 24,
              fontFamily: font.normal,
              marginTop: 25,
              borderBottomWidth: 1,
              borderColor: colors.primary,
            }}>
            info@unkle.pro
          </Text>
        </View>
        {social.map(it => (
          <Text
            key={it.name}
            style={{
              fontFamily: font.normal,
              fontSize: 20,
              color: 'white',
              letterSpacing: 1,
              marginTop: 24,
              textTransform: 'uppercase',
            }}
            onPress={() => {
              Linking.openURL(it.url);
            }}>
            {it.name}
          </Text>
        ))}
        <View style={{paddingBottom: 150}}>
          <Text
            style={{
              fontFamily: font.normal,
              fontSize: 18,
              marginTop: 40,
              color: 'white',
            }}>
            Пишите нам
          </Text>
          <TextInput
            style={input}
            placeholder="Name"
            placeholderTextColor="#404040"
          />
          <TextInput
            style={input}
            placeholder="Name"
            placeholderTextColor="#404040"
          />
          <TextInput
            style={input}
            placeholder="Name"
            placeholderTextColor="#404040"
          />
          <TextInput
            style={input}
            placeholder="Name"
            placeholderTextColor="#404040"
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
