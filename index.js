/** @format */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Hello as appRootComp} from './src';
AppRegistry.registerComponent(appName, () => appRootComp);
