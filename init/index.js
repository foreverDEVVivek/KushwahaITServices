const mongoose=require('mongoose')
const Service=require('../models/service.js')
const Data=require("./data.js");


const URL="mongodb+srv://Admin:admin@cluster0.hft3o.mongodb.net/"

async function main(){
    await mongoose.connect(URL);
}

main().then(()=>{
    console.log("Connected to DB...")
}).catch((err)=>{
    console.log(err)
})

console.log(Data)

async function initializeDb(){
    await Service.deleteMany({})
    const storeServices=await Service.insertMany(Data.data);
    console.log("Data was initialized...")
}

initializeDb();