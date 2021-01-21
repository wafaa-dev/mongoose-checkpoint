let mongoose =require('mongoose');

//persons schema
let personsSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
     age:{
        type: Number,
        required:true,

    },
     favoriteFoods:{
        type: [String],
        required:true,

    }
});

module.exports = persons = mongoose.model('persons',personsSchema);


