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
