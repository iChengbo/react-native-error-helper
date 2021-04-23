import React, { ComponentType } from 'react';
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary';

/**
 * React HOC for creating ErrorBoundaryWrapper component.
 * @param params.renderBoundary
 * @param params.onDidCatch
 * @returns 
 */
export const withErrorBoundary = (params: ErrorBoundaryProps) => (WrappedComponent: ComponentType) => {
    const { renderBoundary, onDidCatch } = params;
    return (props: any) => {
        return (
            <ErrorBoundary renderBoundary={renderBoundary} onDidCatch={onDidCatch}>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        )
    }
};
