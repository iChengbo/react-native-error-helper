/*
 * @Author: iChengbo
 * @Date: 2021-04-18 09:56:10
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-04-18 09:57:33
 * @FilePath: /react-native-error-helper/src/index.js
 */
import {
    getGlobaErrorHandler,
    setGlobaErrorHandler,
} from './globalError';

import { setPromiseOnUnhandled } from './promiseTracke';

import { withErrorBoundary } from './errorBoundary/withErrorBoundary';

export {
    setGlobaErrorHandler,
    getGlobaErrorHandler,
    setPromiseOnUnhandled,
    withErrorBoundary,
};
