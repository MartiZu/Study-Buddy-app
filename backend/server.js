import { app } from "./app.js";

const PORT = process.env.PORT ?? 7000;
const HOST = process.env.HOST ?? "0.0.0.0.";

app.listen(PORT,HOST, () => {
  console.log(`Server listening on port ${PORT}`);
});
