import React, { Component } from 'react';
import { Container, Content, List, 
ListItem, Left, Body, Right, Thumbnail, Text, Icon, Fab,
Card, CardItem, Button
} from 'native-base';

export default class Status extends Component {

  
  render() {
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'}} />
                                <Body>
                                    <Text>NativeBase</Text>
                                </Body>
                            </Left>
                    </CardItem>

                    <CardItem cardBody>
                        <Text style={{marginLeft: 20}}>ini Status</Text>
                    </CardItem>

                    <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right/>
                    </CardItem>
                </Card>
            </Content>
            <Fab>
                <Icon name="md-create" />
            </Fab>
        </Container>
    );
  }
}