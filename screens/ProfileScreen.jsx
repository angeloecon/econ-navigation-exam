import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { ProfileStyle } from '../styles/Styles';

export default function ProfileScreen() {
  const nav = useNavigation();

  const handleUpdateAndReturn = () => {
    nav.navigate("HomePage");
  };

  return (
     <SafeAreaView style={ProfileStyle.container}>
      
      <View style={ProfileStyle.profileHeader}>
        <Image 
          source={require('../assets/face.png')} 
          style={ProfileStyle.avatar} 
        /> 
        <Text style={ProfileStyle.name}>Lorem Ipsum Dela Cruz</Text>
        <Text style={ProfileStyle.bio}>Holy Cross of Davao College | React Native Dev</Text>
      </View>
      
      <View style={ProfileStyle.statsRow}>
        <View style={ProfileStyle.statBox}>
          <Text style={ProfileStyle.statNumber}>4</Text>
          <Text style={ProfileStyle.statLabel}>Anime APIs Built</Text>
        </View>
        <View style={ProfileStyle.statBox}>
          <Text style={ProfileStyle.statLabel}>Status: Online</Text>
        </View>
      </View>

      <View style={ProfileStyle.actionSection}>
         <Button title="Save & Return to Dashboard" onPress={handleUpdateAndReturn} />
         
         <View style={{height: 15}} /> 
         
         <Button title="Logout" onPress={() => nav.replace("LoginPage")} color="#ff4444" />
      </View>

     </SafeAreaView>
  )
}