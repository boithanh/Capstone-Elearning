import axios from "axios";
export const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  timeout: 30000,
  headers: {
    tokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjMwLzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MTc4MjQwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYxOTU1MjAwfQ.mY5hShSv13byp427-ivl-4vJu3tJh8XOiJt6vkXxJ80"
  },
});
