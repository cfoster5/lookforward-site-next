import { TMDB } from "tmdb-ts";

const token = process.env.TMDB_ACCESS_TOKEN;
if (!token) {
  throw new Error("TMDB access token not defined");
}

export const tmdb = new TMDB(token);
