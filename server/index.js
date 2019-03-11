const express =  require("express");
const moongose = require("mongoose");
const config = require("./config/dev")
const FakeDb = require('./fake-db')
const rentalRoutes = require('./routers/rental')

let app = express();

moongose.connect(config.DB_URL).then(()=>{
    const fakedb = new FakeDb();
    fakedb.seedDb();

}).catch((error)=>{
    console.log(error)
})


app.use("/api/v1/rentals", rentalRoutes);

const PORT = process.env.PORT ||3001

app.listen(PORT, ()=>{
    console.log("i am runing  on ", PORT);
} )

