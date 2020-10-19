# Maniva
Assignment project for Maniva in react-native


# Description :

- The project consists of :
 1. Splash screen 
 2. Signup Module 
 3. Login Module 
 4. Selection of Maniva Consultation Services  (on the website they can book consulting time for any service they select )   
 5. Select Date , Select Time  and confirmation .

# Process : 

- Users can Signup by choosing Password and Email ,  I have Made a service to store this data for every user in GoogleFirebase . 
- Users can use the same Signup details they selected to Login to App. 
- They can also use Social Signup service , I have implemented a  service so they can use their Gmail account if they need to login as well .
- After Login they can select  What service they need to  have consultation for on Services Screen .
- After Services selection they can select what day and at  what time they need to book a consultation on Date Time screens after which they can receive it in their calendar or in email or as push notifications.

# Tech Stack:
- For the basic Mockups I have used Adobe XD , logos and some resources were taken from Maniva digital's website .
- App is implemented using React Native  same code can be used to  make Build for IOS and Android both.
- For User's signup data I have used Google's Firebase in order to save and load Data. Also Authentication has been implemented using Firebase 
- For Social Signup  from Google's login Module from React  Native  has been used and Date is synchronized by Firebase.

# Extras ( Future Possible  Integrations)  : 

1. There can be calendar notifications that the app can send upon booking ,
2. Social logins can be increased to support Facebook and Instagram etc as well . 
3. Navigation screen has static content from sites that can be pasted like About  US , Portfolio , services etc.


Build from the App has been tested on 2 Devices  using Android Version 10 .


# Tech Details 
Assignment is built with React-Native and number of other resources to work properly:

[react-native] - build using this library
[react-navigation] - navigation package for react-native
[native-base] - native components for both OS.


Installation
Assignment requires Node.js v4+ to run.


Clone the repo and install the dependencies and devDependencies and start the server.

$ cd Maniva

$ npm install 

$ npx react-native run-android (for android)
