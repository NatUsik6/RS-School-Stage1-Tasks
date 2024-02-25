export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ResponseModel {
    status: string;
}

export interface EverythingResponse extends ResponseModel {
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse extends ResponseModel {
    sources: Source[];
}

export interface RequestModel {
    endpoint: string;
    options: RequestOptions;
}

export interface RequestOptions {
    apiKey: string;
    sources: string;
}
