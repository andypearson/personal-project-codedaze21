// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllDecks = async () => {
  const response = await axios.get(`/api/decks`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllDecks };
