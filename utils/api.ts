export async function fetchFromApi(
  endpoint: string,
  options: RequestInit = {}
) {
  const baseUrl = "https://api.themoviedb.org/3";
  const url = endpoint.includes("http") ? endpoint : `${baseUrl}${endpoint}`;

  const defaultHeaders = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIE_DB_API_TOKEN}`,
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response;
}
