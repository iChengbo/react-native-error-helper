/*
 * @Author: iChengbo
 * @Date: 2021-04-17 21:33:21
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-04-17 22:20:01
 * @FilePath: /react-native-error-helper/index.js
 */
import {
    getGlobaErrorHandler,
    setGlobaErrorHandler,
} from './src/globalError';

import { setPromiseOnUnhandled } from './src/promiseTracke';

export default {
    setGlobaErrorHandler,
    getGlobaErrorHandler,
    setPromiseOnUnhandled,
};