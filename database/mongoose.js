const mongoose = require("mongoose");
const rules = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nhny3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
try {
  mongoose.connect(url, rules);
  console.log("Database connected!");
} catch (e) {
  console.log("===> Error while connecting database : ", e);
}
