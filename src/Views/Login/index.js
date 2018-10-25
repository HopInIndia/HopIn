import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Label,Content, Item,Form,Left, Right, Input, Button, Icon, Title, Card, CardItem,Thumbnail } from 'native-base'
import styles from './styles'

export default class Login extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
            username: '',
            password: ''
        };
    }

    render(){
        return(
            <Container>
                <Content style={{padding: 5}}>
                    <Form>
                        <View style={{paddingRight: 10}}>
                            <Item style={{marginTop: 10}}>
                                <Icon active name='home' />
                                <Input placeholder='Phone Number'/>
                            </Item>
                            <Item style={{marginTop: 10}}>
                                <Icon active name='home' />
                                <Input placeholder='Password'/>
                            </Item>
                        </View>
                        <Text style={{padding: 10, marginTop: 10, width: '100%', textAlign: 'right'}}>Forgot Password?</Text>
                        <Button style={{margin: 10, borderColor: '#DEC11F'}} rounded bordered block onPress={() => this.props.navigation.navigate('Main') }>
                            <Text style={{fontSize: 20}}>LOGIN</Text>
                        </Button>
                        <Text style={{marginTop: 20, textAlign: 'center', width: '100%', }}>
                            Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign Up Here!</Text>
                        </Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}
