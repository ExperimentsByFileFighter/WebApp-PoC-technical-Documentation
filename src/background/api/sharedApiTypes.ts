/**
 * Interface describing the standard return value of the backend
 */
// FIXME implement it if needed.
export interface ApiStatusResponse {
    responseCode: number
    responseStatus: { statusMessage: string; message: string }
}
