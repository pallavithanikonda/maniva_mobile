import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Maniva Consultation Services</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EventScreen', {
              data: 'Digital Development & Optimization',
            })
          }>
          <ImageBackground
            imageStyle={{borderRadius: 8}}
            source={require('../assets/service.png')}
            style={styles.imageBackground}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text
                style={{color: '#FFFFFF', left: 10, bottom: 15, fontSize: 10}}>
                Digital Development & Optimization
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EventScreen', {
              data: 'Strategic business review',
            })
          }>
          <ImageBackground
            imageStyle={{borderRadius: 8}}
            source={require('../assets/service.png')}
            style={styles.imageBackground}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text
                style={{color: '#FFFFFF', left: 10, bottom: 25, fontSize: 10}}>
                Strategic business review
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EventScreen', {
              data: 'Creating Customer Value',
            })
          }>
          <ImageBackground
            imageStyle={{borderRadius: 8}}
            source={require('../assets/service.png')}
            style={styles.imageBackground}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text
                style={{color: '#FFFFFF', left: 10, bottom: 15, fontSize: 10}}>
                Creating Customer Value
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EventScreen', {
              data: 'Digital Development & Optimization',
            })
          }>
          <ImageBackground
            imageStyle={{borderRadius: 8}}
            source={require('../assets/service.png')}
            style={styles.imageBackground}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text
                style={{color: '#FFFFFF', left: 10, bottom: 6, fontSize: 10}}>
                Digital Development & Optimization
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      {/* <FormButton buttonTitle="Logout" onPress={() => logout()} /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  welcome: {
    fontSize: 14,
    color: '#FFDF9B',
    marginTop: '5%',
    marginHorizontal: '5%',
    marginBottom: '15%',
  },
  imageBackground: {
    width: 160,
    height: 150,
  },
});
