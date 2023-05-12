import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';
const Search = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Home</Text>

      <TouchableOpacity
        style={{backgroundColor: '#aeaeae', padding: 5, margin: 10}}
        onPress={() =>
          navigation.navigate('Profile', {
            name: 'Rafaela',
          })
        }>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: '#aeaeae', padding: 5, margin: 10}}
        onPress={() => navigation.goBack()}>
        <Text>Return</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
