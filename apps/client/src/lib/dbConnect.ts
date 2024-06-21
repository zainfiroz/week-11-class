import mongoose from "mongoose";

let alreadyDone = false;

export async function ensureDbConnected() {
    if (alreadyDone) {
        return;
    }
    await mongoose.connect('mongodb+srv://zainfiroz007:UvyBEqCUB9lqC4Js@cluster0.aky1x0c.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
    alreadyDone = true;
}