/*
 * @Author: iChengbo
 * @Date: 2021-04-17 21:33:21
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-04-18 01:17:11
 * @FilePath: /react-native-error-helper/index.js
 */
import {
    getGlobaErrorHandler,
    setGlobaErrorHandler,
} from './src/globalError';

import { setPromiseOnUnhandled } from './src/promiseTracke';

import { withErrorBoundary } from './src/errorBoundary/withErrorBoundary';

export {
    setGlobaErrorHandler,
    getGlobaErrorHandler,
    setPromiseOnUnhandled,
    withErrorBoundary,
};