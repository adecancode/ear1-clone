import React from 'react'
import Constants from 'expo-constants'
import { Text, TouchableOpacity, StyleSheet, View, ImageBackground} from 'react-native'
import Earone from '../components/Earone';

const image = { uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613597450/login_2_elsaps.png' };

export default function Onboard({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgimage}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: '400', fontFamily: 'coolvetica' }}>You’re all set</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonone} onPress={() => navigation.navigate('Username')}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Earone />
                            <Text style={{ color: '#000', fontWeight: '400', fontSize: 19, marginLeft: 16, fontFamily: 'coolvetica' }}>Start ranting</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', textAlign: 'center', fontWeight: '400', fontSize: 12, fontFamily: 'coolvetica' }}>Start ranting with friends, create groups have fun…</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#00070F'
    },
    bgimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonone: {
        borderRadius: 9999,
        marginBottom: 16,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#00BF69',

    },
})