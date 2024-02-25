import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        if (process.env.API_URL === undefined) {
            throw new Error('process.env.API_URL is undefined');
        }

        if (process.env.API_KEY === undefined) {
            throw new Error('process.env.API_KEY is undefined');
        }

        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
