const postMovie = async (userId: string | number, data: any, getToken: any) => {
  const token = await getToken();

  const movieData = {
    tmdb_id: data.id,
    name: data.title,
    score: data.vote_average,
    tmdb_genresIds: data.genre_ids,
    poster_image: `https://themoviedb.org/t/p/w200${data.poster_path}`,
    userId: "65574f2f3914bb1250ca0280",
  };

  console.log("movieData:", JSON.stringify(movieData));

  try {
    const response = await fetch(`http://localhost:8081/movies/${userId}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    });

    if (response.ok) {
      console.log("Succesfully send");
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default postMovie;
