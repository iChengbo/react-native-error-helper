import {
    getGlobalErrorHandler,
    setGlobalErrorHandler,
} from './globalError';

import { setPromiseUnCatchHandler } from './promiseTracker';

import { withErrorBoundary } from './errorBoundary/withErrorBoundary';

export {
    setGlobalErrorHandler,
    getGlobalErrorHandler,
    setPromiseUnCatchHandler,
    withErrorBoundary,
};
