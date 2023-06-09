const express=require('express');
const app=express();
//use ejs template languade or set ejs template language.
app.set('view engine', 'ejs');
app.set('views','./templates');
app.get('/', (req, res) => {
    let channel_name='rahulgarg';
    res.render('index',{channel_name:channel_name});
});
const PORT=process.env.PORT ||3001
app.listen(PORT,()=>{
  console.log('App us running at http://localhost:${PORT}');
})