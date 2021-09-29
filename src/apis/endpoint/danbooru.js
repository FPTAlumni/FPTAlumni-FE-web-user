import { apiClient } from "../apiClient";

export function getPic() {
  return apiClient.get("/post/index.json?limit=100&tags=rating:s")
}
