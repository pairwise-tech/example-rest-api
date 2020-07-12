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
 * DELETE a resource by id
 */
app.delete("/api/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const response = {
    requestId: id,
    message: "Got a DELETE request at /api 🎉",
  };
  res.json(response);
});

/**
 * A test endpoint which checks request headers.
 */
app.get("/api/headers", (req: Request, res: Response) => {
  const { headers } = req;

  const token = headers.authorization;
  if (token === "Bearer as7d68f89sa6f98as67fd98as6f9") {
    res.status(200).send("OK!");
  } else {
    res.status(401).send("Try this token: as7d68f89sa6f98as67fd98as6f9");
  }
});

/**
 * Special endpoint to return different status codes.
 */
app.get("/api/status/:code", (req: Request, res: Response) => {
  const code = Number(req.params.code);

  let message;
  let statusCode;

  switch (code) {
    case 100:
      statusCode = 100;
      message = "Headers received! Client can continue to send request body.";
      break;
    case 200:
      statusCode = 200;
      message = "Successful HTTP Request!";
      break;
    case 300:
      statusCode = 301;
      message = "Resource has permanently moved! You need to be redirected.";
      break;
    case 400:
      statusCode = 401;
      message = "You are unauthorized to view this resource!";
      break;
    case 500:
      statusCode = 500;
      message = "The server encountered an error!";
      break;
    default: {
      statusCode = 500;
      message = `Unaccepted status code received: ${code}`;
    }
  }

  // Return the response:
  res.status(statusCode).send(message);
});

/** ===========================================================================
 * Run the Server
 * ============================================================================
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Pairwise HTTP API is running on http://localhost:${PORT}`);
});
