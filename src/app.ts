import express, { Request, Response } from "express";

/** ===========================================================================
 * Setup Server
 * ============================================================================
 */

const app = express();

/**
 * Index route
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the Pairwise server");
});

/** ===========================================================================
 * Run the Server
 * ============================================================================
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Pairwise HTTP API is running on http://localhost:${PORT}`);
});
