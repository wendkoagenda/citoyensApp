
import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,Alert 
} from "react-native";

// ...

const SignalisationForm = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Formulaire de signalisation",
    });
  }, []);

  const [localite, setLocalite] = useState("");
  const [delis, setDelis] = useState("");
  const [sexe, setSexe] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = () => {
    // Vous pouvez traiter les données du formulaire ici
    // console.log("Nom:", name);
    // console.log("Email:", email);
    // console.log("Message:", message);
    // Réinitialisez les champs après la soumission si nécessaire
    setLocalite("");
    setDelis("");
    setSexe("");
    setAge("");
    setDescription("");

    Alert.alert('Succès', 'Formulaire envoyé avec succès', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/citoyens.png")} style={styles.image} />
      <Text style={styles.label}>Localité :</Text>
      <TextInput
        style={styles.input}
        value={localite}
        onChangeText={(text) => setLocalite(text)}
      />

      <Text style={styles.label}>Type de delis :</Text>
      <TextInput
        style={styles.input}
        value={delis}
        onChangeText={(text) => setDelis(text)}
        keyboardType="text"
      />

      <Text style={styles.label}>Sexe:</Text>
      <TextInput
        style={styles.input}
        value={sexe}
        onChangeText={(text) => setSexe(text)}
        keyboardType="text"
      />
       <Text style={styles.label}>Interval d'age :</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="number"
      />

      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start", // Alignez les éléments à gauche
    justifyContent: "flex-start", // Alignez les éléments en haut
    padding: 20, // Ajoutez un peu d'espace autour des éléments
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E78424",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    width: 350,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover", // ou 'contain' selon vos besoins
  },
  content: {
    flex: 1, // Permet au contenu de s'étendre sur tout l'espace disponible
    alignItems: "center", // Centrez les éléments horizontalement
    justifyContent: "center", // Centrez les éléments verticalement
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#31DE64",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default SignalisationForm;
