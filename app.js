const express = require('express') ;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Person = require('./models/model');


//init the app
const app = express();

// Read the host address and the port from the environment
dotenv.config({path: __dirname + '/config/.env'})

//Create a server
app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})

//Connecting to the DB
mongoose.connect(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to the DB'))
.catch(()=> console.log('Failed to connect'));

//Create and Save a Record of a Model

// const newPerson = new Person({
//     name: 'wafa',
//     age: 33,
//      favoriteFoods: ['chocolate', 'Sushi']
// })

// newPerson.save((err, data)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log(data)
// });

//Create Many Records with model.create()
// Person.create([
//     {name: 'meher', age: 31, favoriteFoods:['fromage', 'abricot']}, 
//     {name: 'maryem', age: 27, favoriteFoods: ['escalope', 'frites','sushi']},
//     {name: 'nour', age: 15, favoriteFoods: ['pasta', 'pizza']},
//     {name:'houda' , age:27 ,favoriteFoods: ['chorba', 'brik']}], (err, newData)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log('new data',newData)
// })

//Use model.find() to Search Your Database

// Person.find((err, database)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log('all data',database)
// })


// Use model.findOne() to Return a Single Matching Document from the Database

// Person.findOne({favoriteFoods:{$all : ['pasta']}}, (err, result) => { 
//     if (err){ 
//         console.log(err) 
//     } 
//     else{ 
//         console.log("Result : ", result); 
//     } 
// });

//Use model.findById() to Search Your Database By _id

// Person.findById({_id:'6008c2fe1a426103d9b6ceb7'} , function (err, Person) {
//     if (err){ 
//         console.log(err) 
//     } 
//     else{ 
//         console.log("Result2 : ", Person); 
//     } 
// });


//Perform Classic Updates by Running Find, Edit, then Save

// const editAndSave =(_id, done)=>{ 
//   Person.findById({_id:'6008c1badd460103b580d0c1'} , (err, Person) => {
//     if (err) return console.log(err) ;
//     Person.favoriteFoods.push('hamburger');

//     Person.save((error,updatedPerson)=> {
//         if(error) {
//         console.log(error)
//     }
//     console.log('edited person ',updatedPerson)
   
// });
// });
// }


//Perform New Updates on a Document Using model.findOneAndUpdate()


// const filter = { name: 'nour' };
// const update = { age: 20 };
// Person.findOneAndUpdate (filter, update, { new : true },(err,result3)=>{
//    if (err){ 
//         console.log(err) 
//     } 
//     else{ 
//         console.log("Result : ", result3); 
//     } 
// });


//Delete One Document Using model.findByIdAndRemove

// Person.findByIdAndRemove({_id:'600a025da439190520d3207a'}, function (err, Person) {
//     if (err){ 
//         console.log(err) 
//     } 
//     else{ 
//         console.log("removed : ", Person); 
//     } 
// });




//Delete Many Documents with model.remove()


// Person.remove({ name: 'meher'} , function (err, Person) {
//     if (err){ 
//         console.log(err) 
//     } 
//     else{ 
//         console.log("remove: ", Person); 
//     } 
// });




//Chain Search Query Helpers to Narrow Search Results


// var queryChain = function(done) {
//   Person.find({food:'sushi'})
//         .sort({ name: 1 }) 
//         .limit(2)
//         .select({ age: 0 })
//         .exec((err,dataa)=>{
//           if(err) console.log(err);
//           done(null, dataa);
//         })
// };

