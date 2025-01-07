import express from "express";
import router from "./router.js";
import cors from "cors";
import mongoose from "mongoose";

const PORT = 5001;
const uri =
  "mongodb+srv://qmdqo:qmdqo@cluster0.4rjfv.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

async function startApp() {
  try {
    await mongoose.connect(uri);
    await app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}
startApp();
