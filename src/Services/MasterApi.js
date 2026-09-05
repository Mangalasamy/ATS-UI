import axios from "axios";
import { handleApiError } from "../utils/apiErrorHandler";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCountries = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/countries`
        );

        return response.data.data;
    } catch (error) {
        throw handleApiError(
            error,
            "Failed to fetch countries."
        );
    }
};

export const getCitiesByCountryId = async (countryId) => {
    try {
        if (!countryId) {
            return [];
        }

        const response = await axios.get(
            `${API_BASE_URL}/cities/country/${countryId}`
        );

       return response.data.data;
    } catch (error) {
        throw handleApiError(
            error,
            "Failed to fetch cities."
        );
    }
};

export const getCompaniesList = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/companies`
        );

        return response.data.data;
    } catch (error) {
        throw handleApiError(
            error,
            "Failed to fetch companies."
        );
    }
};

       