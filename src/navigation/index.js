import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from '../utils';
import {connect, useSelector} from 'react-redux';
import {setHeight, setUserInfoAction} from '../redux/actions';
import {height} from '../components';
import {
  useSafeAreaInsets,
  useSafeAreaFrame,
} from 'react-native-safe-area-context';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {constants} from '../theme';

//Stacks
import AuthStack from './auth';
import AppStack from './app';

const Routes = props => {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const HEIGHT =
    (Platform.OS === 'ios' ? height : frame.height) -
    (insets.bottom + insets.top);

  const user = useSelector(state => state.userReducer);

  useEffect(() => {
    getAsyncUserInfo();
    SetHeight();
  }, []);

  const SetHeight = async () => {
    await props.setHeight(HEIGHT);
  };

  const getAsyncUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem(constants.async.user);
      let data = userInfo != null ? JSON.parse(userInfo) : null;
      props.setUserInfoAction(data);
    } catch (e) {}
  };

  const LightTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      accent: '#E5E5E5',
      border: 'rgba(196,196,196,1)',
      subtext: '#141414',
      selection: 'rgba(63,81,181, 0.6)',
    },
  };

  return (
    <NavigationContainer
      ref={navigatorRef => Navigator.setTopLevelNavigator(navigatorRef)}>
      <PaperProvider theme={LightTheme}>
        {user !== null ? <AppStack /> : <AuthStack />}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default connect(null, {setUserInfoAction, setHeight})(Routes);
