import React, {useState, Fragment} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {createStackNavigator} from '@react-navigation/stack';

import FormButton from '../components/FormButton';

const Stack = createStackNavigator();

const EventScreen = (props) => {
  const title = props.route.params.data;

  const [selected, setSelected] = useState('');

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };
  const nextScreen = (date) => {
    props.navigation.navigate('TimeScreen', {
      title,
      date,
    });
  };

  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <Text style={styles.text}>Selected Date : {selected}</Text>
      <Calendar
        hideExtraDays
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
        }}
      />

      <View style={{left: 50, top: 60, width: '90%'}}>
        <FormButton buttonTitle="Ok" onPress={() => nextScreen(selected)} />
      </View>

      <View style={{left: 50, top: 90, width: '90%'}}>
        <FormButton buttonTitle="Cancel" />
      </View>
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
});
