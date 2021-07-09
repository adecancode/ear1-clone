import React from 'react'
import Constants from 'expo-constants'
import { Text, TouchableOpacity, StyleSheet, View, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native'

export default function Username({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.formcon}>
                    <View style={{  }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: '400', textAlign: 'center', marginBottom: 6, fontFamily: 'coolvetica' }}>Create username</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', textAlign: 'center', fontWeight: '400', fontSize: 12, fontFamily: 'coolvetica' }}>Please create your username to continue</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 32, fontWeight: '400', color: '#fff', marginRight: 10, fontFamily: 'coolvetica' }}>@</Text>
                        <TextInput 
                            placeholder='username'
                            placeholderTextColor='rgba(255, 255, 255, 0.501502)'
                            style={{ fontSize: 32, fontWeight: '400', color: '#fff', fontFamily: 'coolvetica' }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonone} onPress={() => navigation.navigate('Explore')}>
                            <Text style={{ color: '#000', textAlign: 'center', fontWeight: '400', fontSize: 19, fontFamily: 'coolvetica' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#00070F'
    },
    formcon: {
        flex: 1,
        padding: 20,
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
