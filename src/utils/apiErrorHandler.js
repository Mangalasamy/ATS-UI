export const handleApiError = (error, defaultMessage = "Something went wrong") => {
    if (error.response) {
        // Server returned an error response
        return {
            success: false,
            status: error.response.status,
            message:
                error.response.data?.message ||
                error.response.data ||
                defaultMessage,
        };
    }

    if (error.request) {
        // Request was sent but no response received
        return {
            success: false,
            status: 0,
            message: "Unable to connect to the server.",
        };
    }

    // Something went wrong while creating the request
    return {
        success: false,
        status: 0,
        message: error.message || defaultMessage,
    };
};