import api from "./api";
import { handleApiError } from "../utils/apiErrorHandler";

export const fetchJobs = async () => {
  try {
    const response = await api.get("/Jobs");

    return response.data.data;
  } catch (error) {
    throw handleApiError(
      error,
      "Failed to fetch jobs."
    );
  }
};

export const fetchJobsByID = async (jobId) => {
  try {
    const response = await api.get(`/Jobs/${jobId}`);

    return response.data.data;
  } catch (error) {
    throw handleApiError(
      error,
      "Failed to fetch job details."
    );
  }
};

export const updateJob = async (jobId, payload) => {
  try {
    const response = await api.put(
      `/Jobs/${jobId}`,
      payload
    );

    console.log(
      "Job updated successfully:",
      response.data
    );

    return response.data;
  } catch (error) {
    console.error("Error updating job:", error);

    if (error.response) {
      console.error(
        "API Error:",
        error.response.data
      );
    }

    throw handleApiError(
      error,
      "Failed to update job."
    );
  }
};