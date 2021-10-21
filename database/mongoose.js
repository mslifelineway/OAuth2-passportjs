const mongoose = require("mongoose");
const rules = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

try {
  mongoose.connect(process.env.DB_URL, rules);
  console.log("Database connected!");
} catch (e) {
  console.log("===> Error while connecting database : ", e);
}
