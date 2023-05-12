import React from 'react';
import {View, Text} from 'react-native';

import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';

const Profile = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Home</Text>

      <TouchableOpacity
        style={{backgroundColor: '#aeaeae', padding: 5, margin: 10}}
        onPress={() => navigation.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: '#aeaeae', padding: 5, margin: 10}}
        onPress={() => navigation.goBack()}>
        <Text>Return</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
