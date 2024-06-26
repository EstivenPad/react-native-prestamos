import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from "../../constants";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarHideOnKeyboard: true
    }}>
        <Tabs.Screen 
            name="index"
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="bar-chart-outline" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen 
            name="clients"
            options={{
                tabBarLabel: 'Clientes',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="people-outline" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen 
            name="payments"
            options={{
                tabBarLabel: 'Cobros',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cash-outline" color={color} size={size} />
                ),
            }}
        />
    </Tabs>
  )
}

export default TabLayout;
