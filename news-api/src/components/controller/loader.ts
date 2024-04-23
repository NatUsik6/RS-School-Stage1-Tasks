import { RequestModel, RequestOptions, ResponseModel, StatusCodes } from '../../types';

class Loader {
    constructor(
        private baseLink: string,
        private options: RequestOptions
    ) {}

    getResp(
        { endpoint, options }: RequestModel,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === StatusCodes.Unauthorized || res.status === StatusCodes.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(endpoint: string, options?: RequestOptions) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof RequestOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: ResponseModel) => void, options?: RequestOptions) {
        fetch(this.makeUrl(endpoint, options), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
