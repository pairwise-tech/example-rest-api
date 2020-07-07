import express, { Request, Response } from "express";

/** ===========================================================================
 * Setup Server
 * ============================================================================
 */

const app = express();

/**
 * GET
 */
app.get("/api", (req: Request, res: Response) => {
  res.send("Got a GET request at /api !!!");
});

/**
 * POST
 */
app.post("/api", (req: Request, res: Response) => {
  res.send("Got a POST request at /api");
});

/**
 * PUT
 */
app.put("/api", (req: Request, res: Response) => {
  res.send("Got a PUT request at /api");
});

/**
 * DELETE
 */
app.delete("/api", (req: Request, res: Response) => {
  res.send("Got a DELETE request at /api");
});

/** ===========================================================================
 * Run the Server
 * ============================================================================
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Pairwise HTTP API is running on http://localhost:${PORT}`);
});
