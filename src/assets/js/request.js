const API_KEY = "b7427a59-230a-4d69-aa30-f19d093755fa";

const requests = {
  fetchBreeds: `/breeds?api_key=${API_KEY}`,
  fetchSearch: `/breeds/search?api_key=${API_KEY}`,
};

export default requests;
