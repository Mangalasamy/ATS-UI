import axios from "axios";
import { handleApiError } from "../utils/apiErrorHandler";
import api from "./api";

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);

    return response.data;
  } catch (error) {
    console.error("Create user error:", error);

    throw handleApiError(
      error,
      "Failed to create user."
    );
  }
};
