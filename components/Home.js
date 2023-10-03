// HomeScreen.js
import React from "react";
import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
          title: 'Home', 
        });
      }, []); 
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("../assets/citoyens.png")} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>Aller au menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // ou 'contain' selon vos besoins
  },
  button: {
    backgroundColor: '#31DE64', // Couleur du bouton
    padding: 10,
    borderRadius: 10, // Coins arrondis
    marginTop: 20,
  },
})

export default Home;
