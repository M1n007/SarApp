import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage } from 'react-native';
import { 
	Container, Content, Body, Text, Header, Left, Right, Icon, 
    Card, CardItem, Thumbnail, Button, List, ListItem, Spinner,
    Item, Input

} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';

import {getSettingProfiles, updateBio} from '../actions'

class Setting extends Component{

    state = {
        modeEdit: true,
        viewProfile: true,
        valueBio: '',
        objectID: ''
    }

    handleModeEdit(){
        this.setState({ 
            modeEdit: !this.state.modeEdit, 
        })
        let valueBio = this.state.valueBio
        this.props.dispatch(updateBio(valueBio))
    }

    handleLogOut(){
        AsyncStorage.multiRemove(['userToken', 'objectID', 'email'], (error, result) => {
           
        })

        alert('berhasil LogOut')

        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'logSarApp'
        })
    }

    handleView(){
        this.setState({ 
            viewProfile: !this.state.viewProfile, 
        })
        let valueId = this.state.objectID
        this.props.dispatch(getSettingProfiles(valueId))
    }

	componentDidMount(){
        AsyncStorage.getItem('objectID', (err, item) => {
            this.setState({
                objectID: item
            })
        })
    	this.props.dispatch(getSettingProfiles())
  	}


	render(){
        const uri = 'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'
        const uriKyk = 'https://wikianime.ru/i/series/7bc687c6fa61718b1b45b3d1be7ac5f1.jpg'

		return(
			<Container>
				<Content>
					<Image style={{height: 150}} source={{uri: uriKyk}} />
					<Card>
			            <CardItem style={{justifyContent: 'center', alignContent:'center', alignSelf:'center'}}>
			              {
                            this.state.viewProfile == true ?
                            (
                                <Button info onPress={()=> this.handleView()}>
                                    <Text>View Profile</Text>
                                </Button>
                            ) :
                                this.props.settingReducer.isLoading ?
  
                                (<Spinner color='blue' />)
  
                                :
  
                                (
                                  this.props.settingReducer.settings.map((items, index) => (
                                      <Body key={index}>
                                          <Content style={{alignSelf:'center'}}>
                                              <Body>
                                                  {/* <Thumbnail style={styles.thumbImg} large source={{uri: uri}} /> */}
                                                  <Text style={{fontSize: 25}}>{items.name}</Text>
                                                  {
                                                      this.state.modeEdit == true ? 
                                                      (
                                                          <Text note style={{fontSize: 20}}>`{items.bio}`<Icon onPress={()=> this.handleModeEdit()} style={{color:'#48dbfb'}} name='md-create'/></Text>
                                                         
                                                      )
                                                      :
                                                      (
                                                          <Item regular style={{width:200}}>
                                                              <Input 
                                                              value={items.bio}
                                                              placeholderTextColor='#D0D0D0'
                                                              onChangeText={(bio) => this.setState({valueBio: bio })}
                                                              />
                                                              <Icon onPress={()=> this.handleModeEdit()} style={{color:'#48dbfb'}} name='md-checkmark'/>
                                                          </Item>
                                                      )
                                                  }
                                              </Body>
                                          </Content>
                                      </Body>
                                  ))
                                )
                          }
			            </CardItem>
                        <CardItem>
                              <Left>
                                  <Text>LogOut</Text>
                              </Left>
                              <Body/>
                              <Right>
                                  <Button info onPress={() => this.handleLogOut()}>
                                    <Icon name='md-power'/>
                                  </Button>
                              </Right>
                        </CardItem>
			         </Card>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
  settingReducer: state.settingReducer
});

export default connect(mapStateToProps)(Setting)

const styles = StyleSheet.create({

	thumbImg: {
        marginLeft: 100,
	}
})
