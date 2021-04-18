/*
 * @Author: iChengbo
 * @Date: 2021-04-17 22:34:13
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-04-18 16:34:18
 * @FilePath: /react-native-error-helper/src/errorBoundary/withErrorBoundary.js
 */
import React from 'react';

export const withErrorBoundary = (params) => (WrappedComponent) => {
    const { renderBoundary, onDidCatch } = params;
    return class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hasError: false,
                error: null,
            };
        }

        static getDerivedStateFromError(error) {
            return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
            onDidCatch && onDidCatch(error, errorInfo);
        }

        render() {
            const { hasError, error } = this.state;
            if (hasError) {
                if (renderBoundary && typeof renderBoundary === 'function') {
                    return React.createElement(renderBoundary, {
                        error,
                    });
                } else {
                    return React.createElement(Text, null, 'Something went wrong.');
                }
            }
            return React.createElement(WrappedComponent, this.props);
        }
    };
};
