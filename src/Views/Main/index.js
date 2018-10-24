import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Container, Left, Right, Button, Icon, Title, Card, CardItem,Thumbnail } from 'native-base'
import styles from './styles'

export default class Main extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {};
        console.log("Inside Main");
    }

    render(){
        const uri = './profile_pic.png';
        return(
            <View style	={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.headingText} >Booked Rides</Text>
                    <Button style={styles.addRideButton} bordered onPress={() =>
                      this.props.navigation.navigate('SelectLocation')
                    }>
                        <Text style={styles.rideText}>Add New</Text>
                    </Button>
                </View>
                <Card>
                    <CardItem>
                        <Thumbnail square small source={{uri: uri}} />
                        <Text>Shaivi Vashistha</Text>
                        <Text>DPS, Fairdabad</Text>
                        <Text>Gold</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
            </View>
        );
    }
}
