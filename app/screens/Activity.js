import React from 'react'
import Constants from 'expo-constants'
import { Text, TouchableOpacity, StyleSheet, View, ScrollView} from 'react-native'
import Logo from '../components/Logo';
import Search from '../components/Search';
import NotBanner from '../components/NotBanner';

import InRoom from '../components/inactive-icons/InRoom';
import InMess from '../components/inactive-icons/InMess';
import InEx from '../components/inactive-icons/InEx';
import Not from '../components/active-icons/Not';
import InAcc from '../components/inactive-icons/InAcc';

export default function Activity({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.con}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo />
                    <Text style={{ color: '#fff', fontSize: 32, fontWeight: '400', textAlign: 'center', marginBottom: 6, fontFamily: 'coolvetica' }}>Activity</Text>
                    <Search />
                </View>
                <ScrollView style={{ marginTop: 28 }}>
                    <View style={{ padding: 32, borderRadius: 32, }}>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <NotBanner />
                        </View>
                        <View style={{ marginTop: 60, marginBottom: 94 }}>
                            <Text style={{ color: '#fff', fontSize: 24, fontWeight: '400', textAlign: 'center', marginBottom: 6, fontFamily: 'coolvetica' }}>No Messages</Text>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 16, textAlign: 'center', marginTop: 16, fontFamily: 'coolvetica' }}>You didn't made any conversation yet, please select username.</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonone}>
                                <Text style={{ color: '#000', textAlign: 'center', fontWeight: '400', fontSize: 19, fontFamily: 'coolvetica' }}>Start a conversaiton</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ padding: 24, backgroundColor: '#00070F', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bottom: 0 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Room')}>
                        <InRoom />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <InMess />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                        <InEx />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Not />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <InAcc />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#00070F'
    },
    con: {
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