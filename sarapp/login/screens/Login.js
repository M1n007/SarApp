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

import { loginDetail } from '../actions'

class logSarApp extends Component{

     
    state = {
        form: []
    }

    componentDidMount(){

        AsyncStorage.multiGet(['userToken', 'objectID', 'email'], (error, result) => {
            if (result) {
                if(result[0][1] !== null){
                    this.props.dispatch({
						type: 'Navigation/RESET',
						index: 0,
						key: null,
						actions: [{
							type: 'Navigation/NAVIGATE',
							routeName: 'indexSarApp'
						}]
					})
                }
            }
        });

    }

    handleLogin(){
        this.props.dispatch(loginDetail(this.state.form))

        .then(result => {

            AsyncStorage.multiSet([
                ['userToken', result.value.data['user-token']],
                ['objectID', result.value.data.objectId],
                ['email', result.value.data.email]
            ]);

            this.props.dispatch({
				type: 'Navigation/RESET',
				index: 0,
				key: null,
				actions: [{
					type: 'Navigation/NAVIGATE',
					routeName: 'indexSarApp'
				}]
			})

            alert('sukses login')

        }).catch(e => {
            alert(e)
        })
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
                            <Label style={{marginTop:5}}>Email</Label>
                            <Item regular>
                                <Input 
                                placeholder="Input Your Email" 
                                placeholderTextColor='#D0D0D0'
                                onChangeText={email => this.setState({ form: { ...this.state.form, login: email} })}
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
                                onChangeText={password => this.setState({ form: { ...this.state.form, password} })}
                                />
                            </Item>
                        </View>

                        <View style={styles.itemForm}>
                            <Button block onPress={() => this.handleLogin()} style={{backgroundColor: '#026aa7'}}>
                                {this.props.loginDetailReducers.isLoading == !true ? (
                                    <Text>Login</Text>
                                ) : (
                                    <Spinner color='white' />
                                )}
                            </Button>
                            <TouchableOpacity style={{marginTop:10, alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={{color: '#026aa7'}}>Don't have account ? Register</Text>
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
        loginDetailReducers: state.loginDetailReducers
    }
}

export default connect(mapStateToProps)(logSarApp)

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