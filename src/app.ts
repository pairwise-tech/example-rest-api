import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

/** ===========================================================================
 * Setup Server
 * ============================================================================
 */

const app = express();

// Enable cors
app.use(cors());

// Enable parsing body
app.use(bodyParser.json());

/**
 * Index route.
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Pairwise Example HTTP API is online 🎉");
});

/**
 * GET
 */
app.get("/api", (req: Request, res: Response) => {
  res.send("Got a GET request at /api 🎉");
});

/**
 * POST
 */
app.post("/api", (req: Request, res: Response) => {
  const { body } = req;
  const response = {
    requestBody: body,
    message: "Got a POST request at /api 🎉",
  };
  res.json(response);
});

/**
 * PUT
 */
app.put("/api", (req: Request, res: Response) => {
  const { body } = req;
  const response = {
    requestBody: body,
    message: "Got a PUT request at /api 🎉",
  };
  res.json(response);
});

/**
 * DELETE
 */
app.delete("/api", (req: Request, res: Response) => {
  res.send("Got a DELETE request at /api 🎉");
});

/** ===========================================================================
 * Run the Server
 * ============================================================================
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Pairwise HTTP API is running on http://localhost:${PORT}`);
});
