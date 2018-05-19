import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Header, Content, List, 
ListItem, Left, Body, Right, Thumbnail, Text, Fab, Icon, Button } from 'native-base';
import { connect } from 'react-redux'


const btnFabIcon = ['ios-close-outline', 'add']

class Chats extends Component {

    state = {
        active: false,
        btnFab: true
    };

    handleFab(){
        this.setState({ 
            active: !this.state.active, 
            btnFab: !this.state.btnFab
        })
    }

    navigateToListContacts(){
        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'listContacts'
        })
    }

    navigateToChatBox(){
        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'chatBox'
        })
    }

  render() {
    return (
        <Container>
            <Content>
                <TouchableOpacity onPress={()=> this.navigateToChatBox()}>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </TouchableOpacity>
            </Content>
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.handleFab()}>
                {this.state.btnFab == true ? (<Icon name='add' />) : (<Icon name='ios-close' />)}
                <Button style={{ backgroundColor: '#2980b9' }} onPress={()=> this.navigateToListContacts()}>
                    <Icon name="ios-chatbubbles-outline" />
                </Button>
            </Fab>
        </Container>
    );
  }
}


export default connect()(Chats)