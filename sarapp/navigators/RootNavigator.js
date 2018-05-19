import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator} from 'react-navigation'
import { Icon, Button, Text } from 'native-base'

import logSarApp from '../login/screens/Login'
import indexSarApp from '../indexSarApp/screens/index.js'
import listContacts from '../indexSarApp/screens/listContacts'
import chatBox from '../indexSarApp/screens/chatBox'
import Profile from '../profile/screens/profile'


const RootNavigator = StackNavigator({
  logSarApp:{
    screen: logSarApp,
    navigationOptions:{
      header: null
    }
  },
  indexSarApp:{
    screen: indexSarApp,
    navigationOptions:{
      title: 'SarApp',
      headerRight: ( <Icon style={{marginRight: 10}} name='md-more' /> )
    }
  },
  listContacts:{
    screen: listContacts,
    navigationOptions:{
      title: 'Pilih User',
    }
  },
  chatBox:{
    screen: chatBox,
    navigationOptions:{
      header: null,
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      title: null,
      headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    }
  },
})

export default RootNavigator;
