import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import testRoute from "./routes/test.route.js";
// npx prisma db push
const app = express();

app.use(express.json());
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("server running on 8800");
});
