const noop = () => { };

/**
 * 
 * @param {Function} customHandler 
 * @param {Boolean} allowedInDevMode 
 * @returns 
 */
export const setGlobaErrorHandler = (
    customHandler = noop,
    allowedInDevMode = false,
) => {
    if (
        typeof allowedInDevMode !== 'boolean' ||
        typeof customHandler !== 'function'
    ) {
        console.log(
            'setGlobaErrorHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean',
        );
        console.log(
            'Not setting the JS handler .. please fix setGlobaErrorHandler call',
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
            'Skipping setGlobaErrorHandler: Reason: In DEV mode and allowedInDevMode = false',
        );
    }
};

/**
 * 
 * @returns 
 */
export const getGlobaErrorHandler = () => global.ErrorUtils.getGlobalHandler();
