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

		return(
			<Container>
				<Content>
					{/* <Image style={{height: 150}} source={require('../image/kyo.jpg')} /> */}
					<Card>
			            <CardItem>
			              {
			              	this.props.profileReducer.isLoading ?

			              	(<Spinner color='blue' />)

			              	:

			              	(
					            this.props.profileReducer.profiles.map((items, index) => (
					            	<Body key={index}>
							            <Thumbnail style={styles.thumbImg} large source={{uri: uri}} />
						                <Content style={{alignContent: 'center'}}>
						                	<Text>{items.name}</Text>
						                	<Text style={{fontSize: 10}}>posisi</Text>
						                	<Text note style={{fontSize: 10}}>sekolah</Text>
						                	<Text note style={{fontSize: 10}}>alamat</Text>
						                </Content>
						                <Row style={{marginLeft: 55, marginTop: 20}}>

						                	<Button bordered info>
						                		<Text>Message</Text>
						                	</Button>

						                	<Button info style={{marginLeft:5}}>
						                		<Text>Follow</Text>
						                	</Button>

						                </Row>
						                <Content style={{marginTop: 20}}>
						                	<Text style={{fontSize: 10}}>{items.bio}</Text>
						                </Content>
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
