import React from 'react'
import Constants from 'expo-constants'
import { Text, TouchableOpacity, StyleSheet, View, Image, ScrollView} from 'react-native'
import Logo from '../components/Logo';
import Search from '../components/Search';
import Eartag from '../components/Eartag';

import InRoom from '../components/inactive-icons/InRoom';
import InMess from '../components/inactive-icons/InMess';
import InEx from '../components/inactive-icons/InEx';
import InNot from '../components/inactive-icons/InNot';
import Acc from '../components/active-icons/Acc';

export default function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.con}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo />
                    <Text style={{ color: '#fff', fontSize: 32, fontWeight: '400', textAlign: 'center', marginBottom: 6, fontFamily: 'coolvetica' }}>Account</Text>
                    <Search />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16, marginRight: 46, marginBottom: 5, fontFamily: 'coolvetica' }}>PROFILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 16, fontFamily: 'coolvetica' }}>SETTINGS</Text>
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
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Photos</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                                <Image style={{ width: 82, height: 82, borderRadius: 16 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608881/Rectangle_Copy_4_nhvcdv.png' }} />
                                <Image style={{ width: 82, height: 82, borderRadius: 16 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608883/Rectangle_Copy_5_cwsygm.png' }} />
                                <Image style={{ width: 82, height: 82, borderRadius: 16 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 32 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Public Rooms</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608881/Rectangle_Copy_4_nhvcdv.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608883/Rectangle_Copy_5_cwsygm.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 32 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.501502)', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 4, fontFamily: 'coolvetica' }}>Private Rooms</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608881/Rectangle_Copy_4_nhvcdv.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608883/Rectangle_Copy_5_cwsygm.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                                <Image style={{ width: 50, height: 50, borderRadius: 9999 }} source={{ uri: 'https://res.cloudinary.com/dudhmrdin/image/upload/v1613608886/Rectangle_Copy_6_bvzcjz.png' }} />
                            </View>
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
                        <InEx />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <InNot />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <Acc />
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