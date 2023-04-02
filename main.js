/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var slideIndex = 1;

/* index.js file from mongo */

  var express = require("express")
  var bodyParser = require("body-parser")
  var mongoose = require("mongoose");
 
const { col } = require("./mcon");
const { col1 } = require("./mcon");

  
  
  const app = express()
  app.set('view engine','hbs');
  
  app.use(bodyParser.json())
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({
      extended:true
  }))
  
//   mongoose.connect('mongodb://localhost:27017/database',{
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//   });
  
//   var db = mongoose.connection;
  
//   db.on('error',()=>console.log("Error in Connecting to Database"));
//   db.once('open',()=>console.log("Connected to Database"))
  //---------------------------------------------------------------------
  app.post("/sign_up",(req,res)=>{

      var name = req.body.name;
      var email = req.body.email;
      var phno = req.body.phno;
      var pincode = req.body.pincode;
      var address = req.body.address;
  
      var data = {
          "name": name,
          "email" : email,
          "phno": phno,
          "pincode": pincode,
          "address" : address
      }
  //---------------------------------------------------------------------
    //   db.collection('users').insertOne(data,(err,collection)=>{
    //       if(err){
    //           throw err;
    //       }
    //       console.log("Record Inserted Successfully");
    //   });
  
      return res.redirect('success.html');
  
  })
  //----------------remove---------------------
app.get('/login',(req,res)=>{
   res.render('login');
})
app.post('/login',async(req,res)=>{
  const n=req.body.UserN;
  const p=req.body.UserP;
  const DN=await col.find({UserName:n},{'UserPassword':1,'_id':0});
  console.log(DN);
  if(DN[0].UserPassword==p){
      res.render('index');
  }
  else{
    res.render('login');
  }
});

app.get('/signup',(req,res)=>{
  res.render('signup');
})
app.post('/signup',async(req,res)=>{
      const n=req.body.UserN;
      const p=req.body.UserP;
      const e=req.body.UserE;
      
      const data={
        UserName:n,
        UserEmail:e,
        UserPassword:p
      }
      await col.insertMany([data]);
      res.render('login');
})


//----------------remove---------

app.get('/loginM',(req,res)=>{
  res.render('loginM');
})
app.post('/loginM',async(req,res)=>{
 const a=req.body.MechanicN;
 const b=req.body.MechanicP;
 const AN=await col1.find({MechanicName:a},{'MechanicPassword':1,'_id':0});
 console.log(AN);
 if(AN[0].MechanicPassword==b){
     res.render('index');
 }
 else{
   res.render('loginM');
 }
});


app.get('/signupM',(req,res)=>{
  res.render('signupM');
})
app.post('/signupM',async(req,res)=>{
      const a=req.body.MechanicN;
      const b=req.body.MechanicP;
      const c=req.body.MechanicE;
      const e=req.body.contact;
      const f=req.body.Maddress;
      
      
      const data1={
        MechanicName:a,
        MechanicEmail:c,
        shopcontact:e,
        shopaddress:f,
        MechanicPassword:b
        
      }
      await col1.insertMany([data1]);
      res.render('loginM');
})





//-----------------------------
  app.get('/cart',(req,res)=>{
    return res.render('cart');
  })
  app.get('/product',(req,res)=>{
    return res.render('product');
  })
  app.get('/about',(req,res)=>{
    return res.render('about');
  })
  app.get("/",(req,res)=>{
      // res.set({
      //     "Allow-access-Allow-Origin": '*'
      // })
      return res.render('index');
  }).listen(4095);
  
  console.log("Listening on PORT 3644");


  