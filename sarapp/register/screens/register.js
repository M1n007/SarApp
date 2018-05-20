import React, { Component } from 'react';
import {View, StyleSheet, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import {
    Container,
    Content,
    Text,
    Form,
    Label,
    Input,
    Button,
    Item,
    Spinner
} from 'native-base';
import { connect } from 'react-redux';

import { postRegister } from '../actions'

class regSarApp extends Component{

    state = {
        name: '',
        email: '',
        pass: ''
    }
     
    
    handleRegist(){

        let valueName = this.state.name
        let valueEmail = this.state.email
        let valuePass = this.state.pass

        this.props.dispatch(postRegister(valueName, valueEmail, valuePass))

        if (this.props.registerReducer.isLoading == false) {
            
            alert('Berhasil Mendaftar')

            this.props.dispatch({
                type: 'Navigation/NAVIGATE',
                routeName: 'logSarApp'
            })

        }

    }

    render(){
        return(
            <Container style={{backgroundColor: '#ffffff'}}>
                <Content>
                    {/* <View style={styles.logo}>
                        <Image 
                            source={require('../assets/images/logo.png')} 
                            style={{resizeMode: 'contain',height: 250,}}
                        />
                    </View> */}
                    <Form>

                        <View style={styles.itemForm}>
                            <Label style={{marginTop:5}}>Name</Label>
                            <Item regular>
                                <Input 
                                placeholder="Input Your Name" 
                                placeholderTextColor='#D0D0D0'
                                onChangeText={name => this.setState({  name: name })}
                                />
                            </Item>
                        </View>

                        <View style={styles.itemForm}>
                            <Label style={{marginTop:5}}>Email</Label>
                            <Item regular>
                                <Input 
                                placeholder="Input Your Email" 
                                placeholderTextColor='#D0D0D0'
                                onChangeText={email => this.setState({ email: email} )}
                                />
                            </Item>
                        </View>

                        <View style={styles.itemForm}>
                            <Label style={{marginTop:5}}>Password</Label>
                            <Item regular>
                                <Input 
                                style={styles.inputForm}
                                secureTextEntry={true} 
                                placeholder="Input your password" 
                                placeholderTextColor='#D0D0D0' 
                                onChangeText={password => this.setState({ pass: password })}
                                />
                            </Item>
                        </View>

                        <View style={styles.itemForm}>
                            <Button block onPress={() => this.handleRegist()} style={{backgroundColor: '#026aa7'}}>
                                {this.props.registerReducer.isLoading == !true ? (
                                    <Text>Daftar</Text>
                                ) : (
                                    <Spinner color='white' />
                                )}
                            </Button>
                            <TouchableOpacity style={{marginTop:10, alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('logSarApp')}>
                                <Text style={{color: '#026aa7'}}>sudah punya akun ? Login</Text>
                            </TouchableOpacity>
                        </View>

                    </Form>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        registerReducer: state.registerReducer
    }
}

export default connect(mapStateToProps)(regSarApp)

const styles = StyleSheet.create({
    logo: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    itemForm: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30
    },
})