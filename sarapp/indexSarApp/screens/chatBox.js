import React, { Component } from 'react'
import { Container, Header, Content, Left,
     Body, Right, Icon, Thumbnail, Title
} from 'native-base'
import {connect} from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'

class chatBox extends Component{

    backToPreviousPage(){
        this.props.dispatch({
            type:'Navigation/BACK',
            routeName: 'indexSarApp'
        })
    }

    state = {
        message: []
    }

    componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ],
        })
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon name='md-arrow-round-back' onPress={()=> this.backToPreviousPage()}/>
                    </Left>
                    <Body>
                        <Title>yy</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                    _id: 1,
                    }}
                />
            </Container>
        );
    }
}

export default connect()(chatBox)