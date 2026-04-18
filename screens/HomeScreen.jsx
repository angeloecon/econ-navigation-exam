import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { HomeStyle } from '../styles/Styles';

export default function HomeScreen() {
 
  const nav = useNavigation();

  return (
    <SafeAreaView style={HomeStyle.container}>
      
      <View style={HomeStyle.header}>
        <Text style={HomeStyle.greeting}>Welcome back!</Text>
        <Text style={HomeStyle.subtitle}>Developer Dashboard</Text>
      </View>
 
      <View style={HomeStyle.grid}>
        <View style={HomeStyle.card}>
          <Text style={HomeStyle.cardLabel}>Net Acad Networking Basics</Text>
          <Text style={HomeStyle.cardValue}>12 / 17</Text>
        </View>

        <View style={HomeStyle.card}>
          <Text style={HomeStyle.cardLabel}>Anime API Status</Text>
          <Text style={HomeStyle.cardValue}>Online</Text>
        </View>
      </View>
 
      <View style={HomeStyle.actionContainer}>
 
        <Button 
          title="Go to Profile" 
          onPress={() => nav.navigate("ProfilePage")} 
        />
      </View>

    </SafeAreaView>
  );
}

 