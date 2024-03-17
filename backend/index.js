import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
const API_URL = "https://kodessphere-api.vercel.app";
const device="bulb"
const state=1
const data={
        "teamid": "H1H8GJF",
        "device": "bulb",
        "value": 1  
}

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

app.get("/", async (req, res) => {
  //const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL+"/Devices/H1H8GJF");
    console.log(result)
    res.render("index.ejs", { content:JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content:"error"});
  }
});

// app.get("/post-secret", async (req, res) => {
//   try{
//     const result=await axios.post(API_URL);
//     res.render("index.ejs",{
//       content:JSON.stringify(result.data)
//     });
//   }
//   catch(error){
//     res.render("index.ejs",{
//       content:JSON.stringify(error.response.data)
//     });
//   }
// });

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const device="bulb"
const state=1
  const data={
    "teamid": "H1H8GJF",
    "device": "bulb",
    "value": 1  
}
  try{
  const result=await axios.put(API_URL+"/secrets/"+searchId,req.body,config);
  res.render("index.ejs",{
    content:JSON.stringify(result.data)
  })
}
catch(error){
  res.render("index.ejs",{
    content:JSON.stringify(error.response.data)
  })
}
});

// app.post("/patch-secret", async (req, res) => {
//   const searchId = req.body.id;
//   try{
//     const result=await axios.patch(API_URL+"/secrets/"+searchId,req.body,config);
//     res.render("index.ejs",{
//       content:JSON.stringify(result.data)
//     })
//   }
//   catch(error){
//     res.render("index.ejs",{
//       content:JSON.stringify(error.response.data)
//     });
//   }
// });

// app.post("/delete-secret", async (req, res) => {
//   const searchId = req.body.id;
//   try{
//     const result=await axios.delete(API_URL+"/secrets/"+searchId,config);
//     res.render("index.ejs",{
//       content:JSON.stringify(result.data)
//     })
//   }
//   catch(error){
//     res.render("index.ejs",{
//       content:JSON.stringify(error.response.data)
//     });
//   }

// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});