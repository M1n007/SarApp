import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';
import { Container, Content, Text, Body } from 'native-base';

export default class splashScreen extends Component{

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('logSarApp')
        }, 1000);
    }

    render(){
        return(
            <Container style={{backgroundColor:'#3498db'}}>
                <Content>
                    <Body>
                     <Image style={{width:1100, marginTop:200}} source={require("../images/Sar.png")} />
                     <Text style={{color:'white'}}>Sarana Application Chatting Untuk Para Wibu</Text>
                    </Body>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3498db',
        alignSelf: 'center',
        marginTop: 100,
        flex: 1
    }
})