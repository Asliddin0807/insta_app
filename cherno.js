async function scraper(insta_url) {
    const url =
      "https://instagram-reels-downloader-api.p.rapidapi.com/download?url=" + insta_url;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9f4d378e6amsh09df1b3358cf08ep157cf3jsn74b3e88acf09",
        "x-rapidapi-host": "instagram-reels-downloader-api.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  scraper('https://www.instagram.com/reel/DDKUkT_MkB1/?igsh=MWk4M3hqZnhqMGliaw==');
  
  // https://www.instagram.com/reel/DDKUkT_MkB1/?igsh=MWk4M3hqZnhqMGliaw==
  