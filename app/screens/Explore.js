import React from 'react'
import Constants from 'expo-constants'
import { Text, TouchableOpacity, StyleSheet, View, Image, ScrollView} from 'react-native'
import Logo from '../components/Logo';
import Search from '../components/Search';
import Eartag from '../components/Eartag';

import InRoom from '../components/inactive-icons/InRoom';
import InMess from '../components/inactive-icons/InMess';
import Ex from '../components/active-icons/Ex';
import InNot from '../components/inactive-icons/InNot';
import InAcc from '../components/inactive-icons/InAcc';

export default function Explore({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.con}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo />
                    <Text style={{ color: '#fff', fontSize: 32, fontWeight: '400', textAlign: 'center', marginBottom: 6, fontFamily: 'coolvetica' }}>Explore</Text>
                    <Search />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16, marginRight: 46, marginBottom: 5, fontFamily: 'coolvetica' }}>PEOPLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Room')}>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 16, fontFamily: 'coolvetica' }}>ROOMS</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ marginTop: 24 }}>
                    <View style={{ padding: 32, borderRadius: 32, backgroundColor: '#0D131B' }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image style={{ width: 116, height: 116, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613602659/Group_13_qylgc9.png' }} />
                            <Eartag />
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>Muheez Akanni</Text>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 16, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>@creathor</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: 16 }}>
                            <View>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>12</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Rooms</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>2,215</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Followers</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>15</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Following</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 32 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Public Rooms</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                                <Image style={{ width: 124, height: 32 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613603732/Group_3_Copy_x2ga7g.png' }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 34, paddingRight: 34, borderRadius: 9999, borderColor: '#00BF69', borderWidth: 1, width: 150 }}>
                                <Text style={{ color: '#00BF69', fontWeight: '400', fontSize: 19, textAlign: 'center', fontFamily: 'coolvetica' }}>Unfollow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ padding: 32, borderRadius: 32, marginTop: 24, backgroundColor: '#0D131B' }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image style={{ width: 116, height: 116, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613602659/Group_13_qylgc9.png' }} />
                            <Eartag />
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>Muheez Akanni</Text>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 16, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>@creathor</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: 16 }}>
                            <View>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>12</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Rooms</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>2,215</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Followers</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 24, textAlign: 'center', fontFamily: 'coolvetica' }}>15</Text>
                                <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Following</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 32 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica', fontFamily: 'coolvetica' }}>Public Rooms</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                                <Image style={{ width: 124, height: 32 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613603732/Group_3_Copy_x2ga7g.png' }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 34, paddingRight: 34, borderRadius: 9999, width: 150, backgroundColor: '#00BF69' }}>
                                <Text style={{ color: '#fff', fontWeight: '400', fontSize: 19, textAlign: 'center', fontFamily: 'coolvetica' }}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ padding: 24, backgroundColor: '#00070F', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Room')}>
                        <InRoom />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <InMess />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                        <Ex />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <InNot />
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