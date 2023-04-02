const app = require("./app");
const port = 3000;
app.listen(port,()=> {
    console.log(`server is running at http://localhost:${port}`);
})

app.get("/",(req,res)=> {
    res.json({
        message : "Hi Server is running successfully"
    })
})