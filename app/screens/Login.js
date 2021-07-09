import React from 'react'
import Constants from 'expo-constants'
import { Text, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native'
import Logo from '../components/Logo';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const image = { uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613594790/login_1_osokeh.png' };

export default function Login({ navigation }) {
    let [fontsLoaded] = useFonts({
        'coolvetica': require('../../assets/fonts/coolvetica.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.bgimage}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Logo />
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 32 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 32, marginRight: 5, fontFamily: 'coolvetica' }}>Meet</Text>
                            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 32, fontFamily: 'coolvetica' }}>ear1,</Text>
                        </View>
                        <View style={{ marginBottom: 24 }}>
                            <TouchableOpacity style={styles.buttonone} onPress={() => navigation.navigate('Onboard')}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '400', fontSize: 19, fontFamily: 'coolvetica' }}>Login / Sign Up with Apple</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttontwo}>
                                <Text style={{ color: '#000', textAlign: 'center', fontWeight: '400', fontSize: 19, fontFamily: 'coolvetica' }}>Sign Up with Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonthree}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '400', fontSize: 19, fontFamily: 'coolvetica' }}>Sign Up with Twitter</Text>
                            </TouchableOpacity>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 12, marginRight: 2, fontFamily: 'coolvetica' }}>Have an account?</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 12, textDecorationLine: 'underline', fontFamily: 'coolvetica' }}>Login</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
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
    },
    buttonone: {
        borderRadius: 9999,
        marginBottom: 16,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#171817'
    },
    buttontwo: {
        borderRadius: 9999,
        marginBottom: 16,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#00BF69'
    },
    buttonthree: {
        borderRadius: 9999,
        marginBottom: 16,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#11ADFF'
    }
})
