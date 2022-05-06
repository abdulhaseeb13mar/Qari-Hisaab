import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import {constants} from '../../theme';

const Stack = createStackNavigator();

import {
  Home,
  AddDues,
  DueSelection,
  AllDuesOnOthers,
  MyDuesOnSomeone,
  SomeoneDuesOnMe,
  ConfirmDuesPaid,
  PaybackDetails,
  ProfileSettings,
  changePassword,
  allDuesOnMe,
} from '../../screens/app';

export default function AppStack() {
  const {appScreens} = constants;
  return (
    <Stack.Navigator
      initialRouteName={appScreens.Home}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}>
      <Stack.Screen name={appScreens.Home} component={Home} />
      <Stack.Screen name={appScreens.AddDues} component={AddDues} />
      <Stack.Screen name={appScreens.DueSelection} component={DueSelection} />
      <Stack.Screen
        name={appScreens.AllDuesOnOthers}
        component={AllDuesOnOthers}
      />
      <Stack.Screen name={appScreens.AllDuesOnMe} component={allDuesOnMe} />
      <Stack.Screen
        name={appScreens.ChangePassword}
        component={changePassword}
      />
      <Stack.Screen
        name={appScreens.ProfileSettings}
        component={ProfileSettings}
      />
      <Stack.Screen
        name={appScreens.PaybackDetails}
        component={PaybackDetails}
      />
      <Stack.Screen
        name={appScreens.confirmDuesPaid}
        component={ConfirmDuesPaid}
      />
      <Stack.Screen
        name={appScreens.MyDuesOnSomeone}
        component={MyDuesOnSomeone}
      />
      <Stack.Screen
        name={appScreens.SomeoneDuesOnMe}
        component={SomeoneDuesOnMe}
      />
    </Stack.Navigator>
  );
}
