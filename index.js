const express = require("express");
const morgan = require("morgan")
const dbConnect = require("./config/dbconnect");
const { notFound, errorHandler } = require("./middleware/errorHandling");
const userRouter = require("./routes/userRoutes");
const app = express();

const PORT = 5000;
dbConnect();

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/user", userRouter);

// Handling errors and not founds
app.use(notFound)
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}`)
})