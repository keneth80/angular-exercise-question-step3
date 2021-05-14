/**
 * title: Response interface
 * description: backend response type
 */
export interface BackendResponse<T = any> {
    /**
     * response status code
     */
    status: number;

    /**
     * response status text
     */
    statusText: string;

    /**
     * response body
     */
    data: T;
}
