import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68b379e4888b4eae978a3b0ba3aa5a7a",
  },
});
