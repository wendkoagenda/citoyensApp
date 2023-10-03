// HomeScreen.js

// HomeScreen.js
import React from "react";
import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

// ...

const Menu = ({ navigation }) => {
    useEffect(() => {
      navigation.setOptions({
        title: 'Menu', 
      });
    }, []); 
      
    return (
      <View style={styles.container}>
        <Image source={require("../assets/citoyens.png")} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}  onPress={() => navigation.navigate('SignalisationForm')}>Signaler un suspect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Appuis et conseils</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Numeros d'urgence</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Messagerie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start', // Alignez les éléments à gauche
      justifyContent: 'flex-start', // Alignez les éléments en haut
      padding: 20, // Ajoutez un peu d'espace autour des éléments
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover', // ou 'contain' selon vos besoins
    },
    content: {
      flex: 1, // Permet au contenu de s'étendre sur tout l'espace disponible
      alignItems: 'center', // Centrez les éléments horizontalement
      justifyContent: 'center', // Centrez les éléments verticalement
    },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#E78424',
      padding: 20,
      borderRadius: 10,
      margin: 10,
      width: 150,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
    },
  });
  
  export default Menu;
  
