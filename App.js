import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import ProfilePage from './screens/ProfileScreen'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const RootTab = createBottomTabNavigator();
const MainTab = createNativeStackNavigator();

const LoginStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function MainTabNavigator () {
  return (
    <RootTab.Navigator screenOptions={{headerShown: true}}>
      <RootTab.Screen name='HomePage' component={HomeScreen}/>
      <RootTab.Screen  name='ProfilePage' component={ProfilePage}/>
    </RootTab.Navigator>
  )
}

function LoginStackNavigator() {

}

export default function App() {
  return(
    <NavigationContainer>
      <MainTab.Navigator screenOptions={{headerShown:false}}>
        <MainTab.Screen name='LoginPage' component={LoginScreen}/>
        <MainTab.Screen name='RegisterPage' component={RegisterScreen} />

        <MainTab.Screen name='MainPages' component={MainTabNavigator}/>
      </MainTab.Navigator>
    </NavigationContainer>
  )
}