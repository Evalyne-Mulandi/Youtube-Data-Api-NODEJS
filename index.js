const express = require ('express')
const app = express()
const axios = require ('axios')
const {google}=require("googleapis")
app.use(express.json())

const apikey='AIzaSyD0Y0ALokfMcUQ4JNmq_smoeqFtSMpgCwY'
const baseApiUrl = 'https://www.googleapis.com/youtube/v3'
/* const youtube = google.youtube({
    version:'v3',
    auth: apikey,
}) */
//https://www.googleapis.com/youtube/v3/search?key=apikey&type=videos&part=snippet&q=foo





const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('hello am using API')
})

/* app.get('/search', async (req,res,next)=> { 
    try {
        const searchQuery=req.query.search_query
        const url = `${baseApiUrl}/search?key=${apikey}&type=video&part=snippet&q=${searchQuery}`
        const response = await axios.get(url)
        const titles=response.data.items.map((item)=> item.snippet.title)
        res.send(titles)
        
    } catch (error) {
        next(error)
    }
   
     
}) */

app.get('/search', async (req,res,next)=> { 
    try {
        const searchQuery=req.query.search_query
        const url = `${baseApiUrl}/search?key=${apikey}&type=video&part=snippet&q=${searchQuery}`
         const response = await axios.get(url)
        res.send(response.data.items)
        
    } catch (error) {
        next(error)
    }
   
     
})




app.listen(port,(req,res)=>{
    console.log(`server running on port ${port}`);
})


 