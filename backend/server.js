import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

// creation server
const app = express();

// enable the server to read and accept JSON in a request's body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// initial routes
app.use("/api/v1/movies", movies);
// wildcard if route doesn't exist
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
