const noop = () => { };

/**
 * 
 * @param {Function} customHandler 
 * @returns 
 */
export const setPromiseOnUnhandled = (customHandler = noop) => {
    const type = typeof customHandler;
    if (type !== 'function') {
        console.log('setPromiseOnUnhandled should be callback function, but params is + ', type);
        console.log('Not setting the Promise handler .. please fix setPromiseOnUnhandled call');
        return;
    }
    require('promise/setimmediate/rejection-tracking').enable({
        allRejections: true,
        onUnhandled: customHandler,
        onHandled: (id) => {
            const warning =
                `Promise Rejection Handled (id: ${id})\n` +
                'This means you can ignore any previous messages of the form ' +
                `"Possible Unhandled Promise Rejection (id: ${id}):"`;
            console.warn(warning);
        },
    });
};
