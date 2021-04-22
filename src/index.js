import {
    getGlobalErrorHandler,
    setGlobalErrorHandler,
} from './globalError';

import { setPromiseUnCatchHandler } from './promiseTracker';

import { ErrorBoundary } from './errorBoundary/ErrorBoundary';
import { withErrorBoundary } from './errorBoundary/withErrorBoundary';

export {
    setGlobalErrorHandler,
    getGlobalErrorHandler,
    setPromiseUnCatchHandler,
    ErrorBoundary,
    withErrorBoundary,
};
