
import axios from "axios";
import { userIds } from "../constants/interfaces/riot";

class AccountService {
  async getAccountByTag({ name, tag, region = "europe" }: userIds) {
    try {
      if (!name || !tag) {
        throw new Error("Name and tag are required");
      }

      const response = await axios.get(
        `/api/riot/account?name=${encodeURIComponent(name)}&tag=${encodeURIComponent(tag)}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching account:", error);
      throw error;
    }
  }
}

export const accountService = new AccountService();
