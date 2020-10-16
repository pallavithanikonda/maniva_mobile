import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const validate = (email, password) => {
  //Check for the Name TextInput
  if (!email) {
    alert('Please Enter Email');
    return;
  }
  //Check for the Email TextInput
  if (!password) {
    alert('Please Enter Password');
    return;
  }
  return true;
};
