import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { StackNavigator} from 'react-navigation'
import { Icon, Button, Text } from 'native-base'

import logSarApp from '../login/screens/Login'
import indexSarApp from '../indexSarApp/screens/index.js'
import listContacts from '../indexSarApp/screens/listContacts'
import chatBox from '../indexSarApp/screens/chatBox'
import Profile from '../profile/screens/profile'
import Setting from '../setting/screens/setting'
import regSarApp from '../register/screens/register'
import splashScreen from '../indexSarApp/screens/splashScreen'



const RootNavigator = StackNavigator({

  splashScreen:{
    screen: splashScreen,
    navigationOptions:{
      header: null
    }
  },
  logSarApp:{
    screen: logSarApp,
    navigationOptions:{
      header: null
    }
  },
  regSarApp:{
    screen: regSarApp,
    navigationOptions:{
      header: null
    }
  },
  indexSarApp:{
    screen: indexSarApp,
    navigationOptions: ({ navigation }) =>({
      title: 'SarApp',
      headerRight: ( <TouchableOpacity onPress={()=> navigation.navigate('Setting')}><Icon style={{marginRight: 10}} name='ios-cog' /></TouchableOpacity> )
    })
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
  Setting:{
    screen: Setting,
    navigationOptions:{
      title: null,
      headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    }
  },
})

export default RootNavigator;
