import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export const withErrorBoundary = (params) => (WrappedComponent) => {
    const { renderBoundary, onDidCatch } = params;
    return props => {
        return (
            <ErrorBoundary renderBoundary={renderBoundary} onDidCatch={onDidCatch}>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        )
    }
};
