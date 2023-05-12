import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {propNavigationStack, propsStack} from '../../routes/Stack/Models';

const Home = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={{alignItems: 'center', flexDirection: 'column'}}>
      <Text style={{fontSize: 20}}>Home</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profile', {
            name: 'Rafaela',
          })
        }
        style={{backgroundColor: '#aeaeae', padding: 5, margin: 10}}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={{backgroundColor: '#aeaeae', padding: 5, margin: 10}}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
