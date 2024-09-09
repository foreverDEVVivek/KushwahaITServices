const express=require('express')
if(process.env.NODE_ENV!="production"){
  require('dotenv').config();
} 
const path=require('path')
const ejsMate=require("ejs-mate")
const app=express();
const Service=require('./models/service.js')
const session=require("express-session");
const flash=require('connect-flash');
const Customer=require('./models/customer.js');
const mongoose=require('mongoose')
const {serviceSchema}=require('./schema.js')
const methodOverride=require('method-override');
const wrapAsync=require('./utils/wrapAsync.js')
const ExpressError=require('./utils/ExpressError.js')

// <!--?CODE RELATED TO EJS AND VIEW ENGINE AND PATH RELATED -->
app.engine("ejs",ejsMate)
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}));
app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(flash());

//Method Override...
app.use(methodOverride('_method'));

const URL=process.env.DB_URL
//Connecting to MongoDB..
async function main(){
  await mongoose.connect(URL)
}
main().then(()=>{
  console.log("Connected to DB.....")
}).catch((Error)=>{
    console.log(Error)
})


//Index Route...
app.get("/",async(req,res)=>{
    const allServices=await Service.find({});
    // console.log(allServices)
    res.render("services/index.ejs",{allServices});
})

//Services Route...
app.get('/services',async(req,res)=>{
    const allServices=await Service.find({})
    const message=req.flash('info')
    res.render("services/services.ejs",{allServices,message});
})  

//Show Route...
app.get('/services/:id',async(req,res)=>{
    const service= await Service.findById(req.params.id)
    res.render('services/show.ejs',{service})
})

//Edit Page Route...
app.get('/contact',async(req,res)=>{
    res.render('services/contact.ejs')
    
})

//post Route...
app.post("/contact",wrapAsync(async(req,res)=>{
 let {name, email, subject, message}=req.body;
 
 const newCustomer=await new Customer({
    name:name,
    email:email,
    message:message,
    subject:subject
   });

req.flash("info","Successfully Sent Details")
 await newCustomer.save();

 res.redirect('/services')

}))

app.delete('/services/:id',async(req,res)=>{
    const deletedService=await Service.findByIdAndDelete(req.params.id)
    console.log("Deleted Service ..",deletedService);
    res.redirect("/services")
})

app.get("/about",(req,res)=>{
    res.render('services/about.ejs', {
        companyName: 'Tech Innovations Inc.',
        description:
          'We are a forward-thinking company specializing in cutting-edge technology solutions to drive business success.',
        teamMembers: ['Alice Johnson', 'Bob Smith', 'Charlie Brown'],
      })
})

//IF no endpoint found this will run..
app.all("*",async(req,res,next)=>{
    next( new ExpressError("PAGE NOT FOUND",404))
})

//Error Handling Middleware
app.use((err,req,res,next)=>{
    let {message="Something Went Wrong!",status=550}=err;
    // console.log(message,status)
    res.status(status).render("services/error.ejs",{message,status})

})

app.listen(80,()=>{
    console.log("Running on Default Port : 80")
})