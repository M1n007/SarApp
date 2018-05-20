import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native'
import { Container, Header, Content, List, 
ListItem, Left, Body, Right, Thumbnail, Text, Fab, Icon, Button,
Spinner, Card, SwipeRow
} from 'native-base'
import {connect} from 'react-redux'
import {getListProfiles} from '../actions'

class listContacts extends Component {

    componentDidMount(){
        this.props.dispatch(getListProfiles())
  	}
    
    navigateToChatBox(titleYourName){
        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'chatBox',
            params: {titleYourName: titleYourName}
        })
    }

    navigateToProfiles(id){
        this.props.dispatch({
            type:'Navigation/NAVIGATE',
            routeName:'Profile',
            params: {objectId: id}
        })
    }

  render() {
    return (
        <Container>
            <Content>
                <Text note>Swipe Right for view detail profile and swipe left for start chatting</Text>
					{
						this.props.listUserReducers.isLoading ?

		              	(<Spinner color='blue' />)

		              	:

		              	(
		              		this.props.listUserReducers.users.map((items, index) => (
					            	<Card key={index}>
			 							<SwipeRow 
			 								leftOpenValue =	{60}
                                            rightOpenValue ={-60}
			 								left={
			 									<Button onPress={()=> this.navigateToProfiles(id=items.objectId, titleYourName=items.name)}>
			 										 <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png' }} />
			 									</Button>
                                            }
                                             
			 								body={
                                                <List style={{marginLeft:20}}>
                                                    <Text>{items.name}</Text>
                                                    <Text note>{items.bio}</Text>
                                                </List>
                                            }
                                             
			 								right={
                                                <Button danger onPress={()=> this.navigateToChatBox()}>
                                                    <Icon active name="ios-chatboxes-outline" />
                                                </Button>
			 								}
			 							/>
			 						</Card>
					        ))
		              	)
					}
            </Content>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    listUserReducers: state.listUserReducers
});
  
export default connect(mapStateToProps)(listContacts)