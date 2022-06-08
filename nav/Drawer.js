import DrawerItems from '../constants/DrawerItems';
import NoScreen from '../screens/NoScreen';
import HomeScreen from '../screens/HomeScreen';
import Keberangkatan from '../screens/Keberangkatan';
import Kepulangan from '../screens/Kepulangan';
import NewsScreen from '../screens/News/NewsScreen';
import {ImigrasiStack, RestoranStack, EventsStack} from './Stack';
import KontakScreen from '../screens/Kontak/KontakScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export function MainDrawer(){
    return(
    <Drawer.Navigator 
    drawerType="front"
    initialRouteName="PALAPA"
    screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 10 },
    }}>
    {
        DrawerItems.map(drawer=><Drawer.Screen 
        key={drawer.name}
        name={drawer.name} 
        options={{
        drawerIcon:({focused})=>
        drawer.iconType==='Material' ? 
            <MaterialCommunityIcons 
            name={drawer.iconName}
            size={24} 
            color={focused ? "#e91e63" : "black"} 
        />
        :
        drawer.iconType==='Ionicons' ?
        <Ionicons 
            name={drawer.iconName}
            size={24} 
            color={focused ? "#e91e63" : "black"} 
        />
        :
        drawer.iconType==='Ant' ?
        <AntDesign 
            name={drawer.iconName}
            size={24} 
            color={focused ? "#e91e63" : "black"} 
        />
        :
        drawer.iconType==='Feather' ?
        <Feather 
            name={drawer.iconName}
            size={24} 
            color={focused ? "#e91e63" : "black"} 
        />
        :
        drawer.iconType==='MaterialIcons' ?
        <MaterialIcons 
            name={drawer.iconName}
            size={24} 
            color={focused ? "#e91e63" : "black"} 
        />
        :
        drawer.iconType==='FontAwesome' ?
        <FontAwesome 
            name={drawer.iconName}
            size={20} 
            color={focused ? "#e91e63" : "black"} 
        />
        :
        <FontAwesome5 
            name={drawer.iconName}
            size={24} 
            color={focused ? "#e91e63" : "black"} 
        /> ,
        headerShown : false
        }} 
        component={
            drawer.name==='PALAPA' ? HomeScreen 
            : drawer.name==='Keberangkatan' ? Keberangkatan 
            : drawer.name==='Kepulangan' ? Kepulangan
            : drawer.name==='Imigrasi' ? ImigrasiStack
            : drawer.name==='News' ? NewsScreen
            : drawer.name==='Events' ? EventsStack
            : drawer.name==='Restoran Indonesia' ? RestoranStack
            : drawer.name==='Kontak' ? KontakScreen
                : NoScreen
        }
        
    />)
        }
        
    </Drawer.Navigator>
    )
}