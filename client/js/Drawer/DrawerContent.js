import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DrawerItems } from 'react-navigation';

const DrawerContent = (props) => (
  <View style={{flex: 1}}>
    <ScrollView>
      <Text>
        Tu będzie logo SFI
      </Text>
      <DrawerItems {...props} />
    </ScrollView>
    <Text>
      :)
    </Text>
  </View>
);

export default DrawerContent;
