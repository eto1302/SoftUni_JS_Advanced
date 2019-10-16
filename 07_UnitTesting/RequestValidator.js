function Validate(request) {
    let method = request.method;
    let uri = request.uri;
    let version = request.version;
    let message = request.message;
    const UriRegex = /([[:alnum:]]*)/gm;
    const MessageRegex = /^([^<>\\&'"]+)$/gm;

    if (!request.hasOwnProperty('method')) {
        throw new  Error('Invalid request header: Invalid Method');
    }
    if (method !== 'GET' && method !== 'POST' && method !== 'DELETE' && method !== 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }


    if (!request.hasOwnProperty('uri')) {
        throw new  Error('Invalid request header: Invalid URI');
    }
    if (uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (uri !== '*') {
        if (!uri.match(UriRegex)) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }


    if (!request.hasOwnProperty('version')) {
        throw new  Error('Invalid request header: Invalid Version');
    }
    if (version != 'HTTP/0.9' && version != 'HTTP/1.0' && version != 'HTTP/1.1' && version != 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!request.hasOwnProperty('message')) {
        throw new  Error('Invalid request header: Invalid Message');
    }
    if(!MessageRegex.test(message) && message !== ''){
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}