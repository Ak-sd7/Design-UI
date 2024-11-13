import { app } from "./index.js";

app.listen(3000, ()=>{
    console.log(`Server working on http://localhost:3000 in ${process.env.NODE_ENV} mode`);
})