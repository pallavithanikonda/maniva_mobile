import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FormButton from '../components/FormButton';

const TimeScreen = (props) => {
  const {date, title} = props.route.params;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hours, setHours] = useState(false);
  const [minutes, setMinutes] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setHours(time.getHours());
    setMinutes(time.getMinutes());
    hideDatePicker();
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{top: 50, left: 40}}>
        {hours || minutes ? null : (
          <FormButton buttonTitle="Select time" onPress={showDatePicker} />
        )}
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.info}>
        <Text style={{left: 200, marginBottom: 30, top: 10}}>
          TIME | {hours}:{minutes} {hours >= 12 ? 'pm' : 'am'}
        </Text>

        <Text style={{fontSize: 22, marginBottom: 10}}>{title}</Text>

        <Text style={{color: '#B4B4B4', marginBottom: 10, fontSize: 16}}>
          {date}
        </Text>
        <Text style={{color: '#B4B4B4', marginBottom: 10, fontSize: 18}}>
          Magnus Ladulåsgatan 3, 118 65 Stockholm Sweden
        </Text>
        <View style={{top: 50, left: 40}}>
          <FormButton buttonTitle="Nasta" onPress={() => alert('Confirmed!')} />
        </View>
      </View>
    </View>
  );
};

export default TimeScreen;

const styles = StyleSheet.create({
  info: {
    padding: 10,
    width: '80%',
    height: '55%',
    marginTop: 90,
    backgroundColor: '#FEFCFC',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
