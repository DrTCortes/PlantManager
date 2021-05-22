import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import { Wellcome } from '../pages/Wellcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Connfirmation';

import colors from '../styles/colors'

const Stack = createStackNavigator();

const AppRoutes: React.FC = ()=> (
    <Stack.Navigator
        headerMode={'none'}
        screenOptions={{cardStyle:{backgroundColor: colors.white}}}
    >
        <Stack.Screen
            name={'Wellcome'}
            component={Wellcome}
        />
        <Stack.Screen
            name={'UserIdentification'}
            component={UserIdentification}
        />
        <Stack.Screen
            name={'Confirmation'}
            component={Confirmation}
        />

    </Stack.Navigator>
)

export default AppRoutes;