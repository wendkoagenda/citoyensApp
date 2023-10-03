// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       <StatusBar style="auto" />
//       <Image
//         source={require('./assets/citoyens.png')}
//         style={styles.image}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover', // ou 'contain' selon vos besoins
//   },
// });

import React from 'react';
import Navigation from './Config/Navigation';

const App = () => {
  return <Navigation />;
};

export default App;
