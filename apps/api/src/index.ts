import express from "express";
import { ApiResponse } from "@packages/shared-types";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/health", (_req: any, res: { json: (arg0: ApiResponse<string>) => void; }) => {
  const response: ApiResponse<string> = {
    success: true,
    data: "API is VERY healthy"  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
