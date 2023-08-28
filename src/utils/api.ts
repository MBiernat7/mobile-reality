/* eslint-disable prettier/prettier */
export const fetcher = (url: string) => {
    const URL = `http://localhost:3005${url}`;

    return fetch(URL, {
        headers: {
            'x-api-key': 'thisisapikey',
        },
    }).then(r => {

        return r.json();
    });
};

export const postMethod = (
    url: string,
    body: Record<string, any>,
) => {
    const URL = `http://localhost:3005${url}`;

    return fetch(URL, {
        method: 'POST',
        headers: {
            'x-api-key': 'thisisapikey',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};


export const deleteMethod = (url: string, body: Record<string, any>) => {
    const URL = `http://localhost:3005${url}`;

    return fetch(URL, {
        method: 'DELETE',
        headers: {
            'x-api-key': 'thisisapikey',
        },
        body: JSON.stringify(body),
    });
};
