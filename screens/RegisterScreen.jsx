import { Text, Button, View, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/Styles";
import { useState } from "react";

const RegisterScreen = () => {
  const nav = useNavigation();

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>WELCOME!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userEmail}
          placeholder="Email"
          onChangeText={setUserEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={phone}
          placeholder="Contact Number"
          onChangeText={setPhone}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={() => nav.navigate('LoginPage')} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen