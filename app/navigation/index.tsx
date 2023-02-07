import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@ui/screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootTabScreenProps } from './types';
import COLORS from '@ui/theme/color';
import { Text, View } from 'react-native';
import AddItemScreen from '@ui/screens/AddItemScreen';
import ExpiredScreen from '@ui/screens/ExpiredScreen/ExpiredScreen';
import RecipesScreen from '@ui/screens/RecipesScreen';

const Stack = createNativeStackNavigator();
const FallbackScreen = ({ route }: RootTabScreenProps<'Home'>) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.BLACK,
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <Text>{route?.name}</Text>
    </View>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{ headerShown: false, presentation: 'modal' }}
      >
        <Stack.Screen name="AddItem" component={AddItemScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const tabBarLabelStyle = { fontFamily: 'NunitoSans_300Light', fontSize: 10 };
const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: COLORS.GRAY_100,
        tabBarActiveTintColor: COLORS.YELLOW_MAIN,
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.GRAY_500 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarLabelStyle,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-sharp" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={({ navigation }: RootTabScreenProps<'Recipes'>) => ({
          tabBarLabelStyle,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book-sharp" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Add Item"
        component={FallbackScreen}
        options={() => ({
          tabBarLabelStyle,
          tabBarIcon: ({ color }) => <TabBarIcon name="add" color={color} />,
        })}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('AddItem');
          },
        })}
      />

      <BottomTab.Screen
        name="Expired"
        component={ExpiredScreen}
        options={({ navigation }: RootTabScreenProps<'Expired'>) => ({
          tabBarLabelStyle,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="warning-sharp" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="User"
        component={FallbackScreen}
        options={({ navigation }: RootTabScreenProps<'User'>) => ({
          tabBarLabelStyle,
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
