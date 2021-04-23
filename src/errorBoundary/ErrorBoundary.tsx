import React, {
    Component,
    ComponentLifecycle
} from 'react';
import { Text } from 'react-native';

type ComponentDidCatch = ComponentLifecycle<{}, {}>["componentDidCatch"];

export interface ErrorBoundaryProps {
    renderBoundary: (error: any) => React.ReactNode | JSX.Element
    onDidCatch: NonNullable<ComponentDidCatch>
    children?: React.ReactNode | JSX.Element
}

export interface ErrorBoundaryState {
    hasError: boolean
    error: any
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true, error };
    }

    componentDidCatch(...args: Parameters<NonNullable<ComponentDidCatch>>) {
        const { onDidCatch } = this.props;
        onDidCatch && onDidCatch(...args);
    }

    render() {
        const { renderBoundary, children } = this.props;
        const { hasError, error } = this.state;
        if (hasError) {
            if (renderBoundary && typeof renderBoundary === 'function') {
                return renderBoundary({ error });
            } else {
                return <Text>Something went wrong.</Text>
            }
        }
        return children;
    }
};
