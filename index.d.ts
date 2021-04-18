export type JSErrorHandler = (error: Error, isFatal: boolean) => void;
export type PromiseUnCatchHandler = (id: string, error: Error) => void;

declare const getGlobaErrorHandler: () => JSErrorHandler;

declare const setGlobaErrorHandler: (handler: JSErrorHandler, allowInDevMode?: boolean) => void;

declare const setPromiseUnCatchHandler: (handler: PromiseUnCatchHandler) => void;
