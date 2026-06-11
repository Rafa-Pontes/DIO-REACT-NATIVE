import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './tab.routes'; 
import GalleryScreen from '../screens/GalleryScreen';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes(){
    return(
        <Navigator>
            {/* A tela principal do Drawer agora carrega as suas Tabs inferiores */}
            <Screen 
                name='HomeTabs'
                component={TabRoutes}
                options={{ title: 'Início' }}
            />
            {/* Você pode manter a Galeria aqui se quiser acessá-la pelo menu lateral também */}
            <Screen
                name='gallery'
                component={GalleryScreen}
                options={{ title: 'Galeria' }}
            />
        </Navigator>
    )
}