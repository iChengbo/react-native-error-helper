import React from 'react';
import { Text } from 'react-native';

class ErrorBoundary extends React.Component {
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

export default ErrorBoundary;
