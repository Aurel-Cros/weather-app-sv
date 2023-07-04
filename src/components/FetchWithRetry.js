export default class FetchWithRetry {
    static tryFetch = async (fetchUrl, fetchOptions, retryDelay = 1500) => {
        return await fetch(fetchUrl, fetchOptions)
            .then(response => response.json())
            .then(data => data)
            .catch(async () => {
                return await FetchWithRetry.#onError(fetchUrl, fetchOptions, retryDelay)
            })
    }

    static #onError = async (errUrl, errOptions, retryDelay) => {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                console.log(`Fetch failed, retrying in ${retryDelay}ms...`);
                resolve(await FetchWithRetry.tryFetch(errUrl, errOptions, retryDelay));
            }, retryDelay);
        })
    }
}