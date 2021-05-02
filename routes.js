import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './pages/Favorites';
import Skills from './pages/Skills';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        //similar ao BrowserRouter do React Web
        <NavigationContainer>
            {/* headerShown false para impedir de mostrar o header padrão */}
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Favorites" component={Favorites} />
                <AppStack.Screen name="Skills" component={Skills} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}