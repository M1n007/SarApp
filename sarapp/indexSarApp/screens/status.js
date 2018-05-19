import React, { Component } from 'react';
import { Container, Content, List, 
ListItem, Left, Body, Right, Thumbnail, Text, Icon, Fab} from 'native-base';

export default class Status extends Component {

  
  render() {
    return (
        <Container>
            <Content>
                    {/* <Left>
                        <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png' }} />
                    </Left>
                    <Body>
                        <Text>My Status</Text>
                    </Body>
                    <Right>
                        <Icon name='md-more' />
                    </Right> */}
            </Content>
            <Fab>
                <Icon name="md-create" />
            </Fab>
        </Container>
    );
  }
}