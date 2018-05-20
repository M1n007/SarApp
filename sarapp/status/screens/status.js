import React, { Component } from 'react';
import { Container, Content, List, 
ListItem, Left, Body, Right, Thumbnail, Text, Icon, Fab,
Card, CardItem, Button, Spinner
} from 'native-base';
import { connect } from 'react-redux'
import { getStatus } from '../actions'

class Status extends Component {

  componentDidMount(){
      this.props.dispatch(getStatus())
  }
  render() {
    return (
        <Container>
            <Content>
                {
                   this.props.statusReducer.isLoading ?

                   (<Spinner color='blue' />)

                   :

                   (
                    this.props.statusReducer.status.map((items, index) => (
                        <Card key={index}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'}} />
                                    <Body>
                                        <Text>{items.user.name}</Text>
                                    </Body>
                                    {alert(JSON.stringify(items.user.name))}
                                </Left>
                            </CardItem>

                            <CardItem cardBody>
                                <Text style={{marginLeft: 20}}>{items.txtStatus}</Text>
                            </CardItem>

                            <CardItem>
                                    <Left>
                                        <Button transparent>
                                        <Icon active name="thumbs-up" />
                                        <Text>{items.txtLike} Likes</Text>
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
                    ))
                   )
                }
            </Content>
            <Fab>
                <Icon name="md-create" />
            </Fab>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    statusReducer: state.statusReducer
});
  
export default connect(mapStateToProps)(Status)