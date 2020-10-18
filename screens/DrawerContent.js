import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../navigation/AuthProvider';

const DrawerContent = (props) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, backgroundColor: '#FEAF06'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{user.displayName}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color="#FFFFFF" size={size} />
              )}
              label={() => <Text style={{color: '#FFFFFF'}}>Home</Text>}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color="#FFFFFF" size={size} />
              )}
              label={() => <Text style={{color: '#FFFFFF'}}>About Us</Text>}
              onPress={() => {
                props.navigation.navigate('EventScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color="#FFFFFF" size={size} />
              )}
              label={() => <Text style={{color: '#FFFFFF'}}>Book Online</Text>}
              onPress={() => {
                props.navigation.navigate('TimeScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color="#FFFFFF" size={size} />
              )}
              label={() => <Text style={{color: '#FFFFFF'}}>Portfolio</Text>}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color="#FFFFFF" size={size} />
              )}
              label={() => <Text style={{color: '#FFFFFF'}}>Methodology</Text>}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color="#FFFFFF" size={size} />
          )}
          label={() => <Text style={{color: '#FFFFFF'}}>Logout</Text>}
          onPress={() => {
            logout();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    color: '#FFFFFF',
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
