import React, {Component} from 'react'
import { View, Text,TextInput } from 'react-native'
import { Container, Header, Label,Content, Item,Form,Left, Right, Input, Button, Icon, Title, Card, CardItem,Thumbnail } from 'native-base'
import styles from './styles'
import { userInfo } from '../../Redux/User/actions'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props){
    	super(props);
        this.validateLogin = this.validateLogin.bind(this);
    }

    validateLogin() {
        let phone = this.phone._lastNativeText;
        let password = this.password._lastNativeText;
        this.props.userInfo({
            'phone': phone,
            'password': password
        });
    }

    render(){
        return(
            <Container>
                <Content style={styles.p5}>
                    <Form>
                        <View style={styles.pR10}>
                            <Item style={styles.mT10}>
                                <Icon active name='home' />
                                <TextInput placeholder='Phone Number' ref={input => (this.phone = input)}/>
                            </Item>
                            <Item style={styles.mT10}>
                                <Icon active name='home' />
                                <TextInput placeholder='Password' ref={input => (this.password = input)}/>
                            </Item>
                        </View>
                        {
                            !this.props.user.isLoggedIn && <Text style={styles.fail_message}>{this.props.user.error}</Text>
                        }
                        <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
                        <Button style={styles.loginButton} rounded bordered block onPress={this.validateLogin}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </Button>
                        <Text style={styles.noAccount}>
                            Don't have an account? <Text style={styles.boldText}>Sign Up Here!</Text>
                        </Text>
                        {
                            this.props.user.isLoggedIn && <Text style={styles.success_message}>Login Successful!</Text>
                        }
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
	console.log(state)
    return {
    	...state.UserReducer
    }
}
const mapDispatchToProps = { userInfo };

export default connect(mapStateToProps,mapDispatchToProps)(Login)
