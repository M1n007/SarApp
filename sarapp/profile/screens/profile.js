import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { 
	Container, Content, Body, Text, Header, Left, Right, Icon, 
	Card, CardItem, Thumbnail, Button, List, ListItem, Spinner

} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';

import {getProfiles} from '../actions'

class Profile extends Component{

	componentDidMount(){
        const profileId = this.props.navigation.state.params.objectId
    	this.props.dispatch(getProfiles(profileId))
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
			              	this.props.profileReducer.isLoading ?

			              	(<Spinner color='blue' />)

			              	:

			              	(
					            this.props.profileReducer.profiles.map((items, index) => (
					            	<Body key={index}>
						                <Content style={{alignSelf:'center'}}>
						                	<Body>
                                                {/* <Thumbnail style={styles.thumbImg} large source={{uri: uri}} /> */}
                                                <Text style={{fontSize: 25}}>{items.name}</Text>
                                                <Text note style={{fontSize: 20}}>`{items.bio}`</Text>
                                            </Body>
						                </Content>
						                
                                        <Row style={{marginLeft: 160, marginTop: 20}}>

						                	<Button bordered info>
						                		<Text>Kirim Pesan<Icon style={{color:'#48dbfb'}} name='ios-paper-plane'/></Text>
						                	</Button>

						                </Row>
					                </Body>
					            ))
			              	)
			              }
			            </CardItem>
			         </Card>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
  profileReducer: state.profileReducer
});

export default connect(mapStateToProps)(Profile)

const styles = StyleSheet.create({

	thumbImg: {
        marginLeft: 100,
	}

})
