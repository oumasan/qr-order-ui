
/**
 * GET API
 * @param uri 
 * @returns 
 */
export async function getApi(uri: string) {
    return fetch(uri)
}

/**
 * POST API
 * @param uri 
 * @param body 
 * @returns 
 */
export async function postApi(uri: string, body: any) {
    return fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
        body: JSON.stringify(body)
    })
}

/**
 * DELETE API
 * @param uri 
 * @returns 
 */
export async function deleteApi(uri: string) {
    return fetch(uri, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    })
}