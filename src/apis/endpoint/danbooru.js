import { apiClient } from "../apiClient";

export function getPic() {
  return apiClient.get("/posts.json")
}
