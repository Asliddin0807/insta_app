const ApiService = {
  async getData(insta_url) {
    const url =
      "https://instagram-reels-downloader-api.p.rapidapi.com/download?url=" +
      insta_url;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9f4d378e6amsh09df1b3358cf08ep157cf3jsn74b3e88acf09",
        "x-rapidapi-host": "instagram-reels-downloader-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return { data: result, status: '200' }
    } catch (error) {
      return { data: error, status: '500' } 
    }
  },
};

export default ApiService;
