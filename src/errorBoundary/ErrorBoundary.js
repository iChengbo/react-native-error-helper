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
        const { onDidCatch } = this.props;
        onDidCatch && onDidCatch(error, errorInfo);
    }

    render() {
        const { renderBoundary, children} = this.props;
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
        return children;
    }
};

export default ErrorBoundary;
