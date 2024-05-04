import {TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShowScreen from './screens/ShowScreen';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';
import { Provider } from './context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider>                                                        
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog Uygulaması' }}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={ ( {navigation} ) =>  (  // appbar kısmında ayarlamalar yaparım options ile
              {
                headerRight: () => (
                  <TouchableOpacity onPress={ () => {navigation.navigate('Create')} } >
                    <AntDesign name="plus" size={24} color="black" />
                  </TouchableOpacity> 
                )
              }
            )
          }
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen 
            name="Show" 
            component={ShowScreen} 
            options= {({navigation,route}) => (
              {
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})}>
                    <FontAwesome name="pencil" size={26} color="black" />
                  </TouchableOpacity>
                )
              }
            )}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};