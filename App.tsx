import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Appointment from './src/components/Appointment';
import Confirmation from './src/components/Confirmation';
import Catalog from './src/components/Catalog';
import Contact from './src/components/Contact';
import TestDriveRequest from './src/components/TestDriveRequest';
import Main from './src/components/Main';
import { Text } from 'react-native-paper';
import OffersPromotions from './src/components/OffersPromotions';
import QuotationRequest from './src/components/QuotationRequest';
import ServiceAppointment from './src/components/ServiceAppointment';
import ServiceHistory from './src/components/ServiceHistory';


const Drawer = createDrawerNavigator();

function app() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Catalog" component={Catalog} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Test Drive Request" component={TestDriveRequest} />
        <Drawer.Screen name="Offers Promotions" component={OffersPromotions} />
        <Drawer.Screen name="Quotation Request" component={QuotationRequest} />
        <Drawer.Screen name="Service Appointment" component={ServiceAppointment} />
        <Drawer.Screen name="Service History" component={ServiceHistory} />
        <Drawer.Screen name="Appointment" component={Appointment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default app;

