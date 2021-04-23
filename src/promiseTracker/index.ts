export type PromiseUnCatchHandler = (id: string, error: Error) => void;

const noop: PromiseUnCatchHandler = () => { };

/**
 * 
 * @param {Function} customHandler
 * @param {Boolean} allowedInDevMode
 * @returns 
 */
export const setPromiseUnCatchHandler = (customHandler: PromiseUnCatchHandler = noop, allowedInDevMode = false) => {
    if (typeof customHandler !== 'function' || typeof allowedInDevMode !== 'boolean') {
        console.log('setPromiseUnCatchHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean');
        console.log('Not setting the JS handler .. please fix setPromiseUnCatchHandler call');
        return;
    }
    // @ts-ignore
    const allowed = allowedInDevMode ? true : !__DEV__;
    if (allowed) {
        // @ts-ignore
        require('promise/setimmediate/rejection-tracking').enable({
            allRejections: true,
            onUnhandled: customHandler,
            onHandled: (id: string) => {
                const warning =
                    `Promise Rejection Handled (id: ${id})\n` +
                    'This means you can ignore any previous messages of the form ' +
                    `"Possible Unhandled Promise Rejection (id: ${id}):"`;
                console.warn(warning);
            },
        });
    } else {
        console.log('Skipping setPromiseUnCatchHandler: Reason: In DEV mode and allowedInDevMode = false');
    }
};
