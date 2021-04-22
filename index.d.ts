export type JSErrorHandler = (error: Error, isFatal: boolean) => void;
export type PromiseUnCatchHandler = (id: string, error: Error) => void;

declare const getGlobalErrorHandler: () => JSErrorHandler;

declare const setGlobalErrorHandler: (handler: JSErrorHandler, allowInDevMode?: boolean) => void;

declare const setPromiseUnCatchHandler: (handler: PromiseUnCatchHandler, allowInDevMode?: boolean) => void;
