import {
    getGlobaErrorHandler,
    setGlobaErrorHandler,
} from './globalError';

import { setPromiseUnCatchHandler } from './promiseTracker';

import { withErrorBoundary } from './errorBoundary/withErrorBoundary';

export {
    setGlobaErrorHandler,
    getGlobaErrorHandler,
    setPromiseUnCatchHandler,
    withErrorBoundary,
};
