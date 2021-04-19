const noop = () => { };

/**
 * 
 * @param {Function} customHandler 
 * @param {Boolean} allowedInDevMode 
 * @returns 
 */
export const setGlobalErrorHandler = (
    customHandler = noop,
    allowedInDevMode = false,
) => {
    if (
        typeof allowedInDevMode !== 'boolean' ||
        typeof customHandler !== 'function'
    ) {
        console.log(
            'setGlobalErrorHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean',
        );
        console.log(
            'Not setting the JS handler .. please fix setGlobalErrorHandler call',
        );
        return;
    }
    const allowed = allowedInDevMode ? true : !__DEV__;
    if (allowed) {
        global.ErrorUtils.setGlobalHandler(customHandler);
        const consoleError = console.error;
        console.error = (...args) => {
            global.ErrorUtils.reportError(...args);
            consoleError(...args);
        };
    } else {
        console.log(
            'Skipping setGlobalErrorHandler: Reason: In DEV mode and allowedInDevMode = false',
        );
    }
};

/**
 * 
 * @returns 
 */
export const getGlobalErrorHandler = () => global.ErrorUtils.getGlobalHandler();
