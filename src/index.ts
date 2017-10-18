export default {
    on: (event?: string, callback?: Function) => {
        if(typeof event !== 'string') throw new TypeError('Specifying event is required when subscribing');
    }
};
