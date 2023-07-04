export default async function fetchWithRetry(fetchUrl, fetchOptions, retryDelay = 1500) {
    let counter = 0;

    const tryFetch = async (fetchUrl, fetchOptions, retryDelay) => {
        return await fetch(fetchUrl, fetchOptions)
            .then(response => {
                console.log(response.status)
                if (response.status === 200)
                    return response.json()
                else if (response.status >= 400)
                    throw new Error('Ressource unavailable')
            })
            .then(data => data)
            .catch(async () => {
                console.log("Fetch failed.")
                return await onError(fetchUrl, fetchOptions, retryDelay)
            })
    }

    const onError = async (errUrl, errOptions, retryDelay) => {
        counter++;
        return new Promise((resolve, reject) => {
            if (counter >= 5)
                reject("Too many tries.");

            setTimeout(async () => {
                console.log(`Retrying in ${retryDelay}ms...`);
                resolve(await tryFetch(errUrl, errOptions, retryDelay));
            }, retryDelay);
        })
    }

    return await tryFetch(fetchUrl, fetchOptions, retryDelay);
}
