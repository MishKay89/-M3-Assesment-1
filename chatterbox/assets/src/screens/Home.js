//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import serviceData from '../Data/Data';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{}}>
            <FlatList
                data={serviceData}
                contentInset={{padding: 12,}}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => {navigation.navigate('Details')}}
                            style={{
                                margin: 10, 
                                height: windowHeight * 0.1 , 
                                backgroundColor: item.bgColor, 
                                borderRadius: 10,
                            }}>
                            <View style={{backgroundColor: item.bgColor, borderRadius: 10,}}>
                                <Text style={styles.category}>
                                    { item.category }
                                </Text>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>
                                <Text>
                                    {item.numberListners}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    category: {
        fontSize: 24,
        fontWeight: '200',
        color: 'white',
    },
    name: {
        fontSize: 16,
        color: 'white',
    },

});

//make this component available to the app
export default Home;
