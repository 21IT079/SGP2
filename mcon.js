const mongoose =require('mongoose');
// mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://127.0.0.1:27017/Project').then(()=>{
    console.log('Connected to db');
}).catch(()=>{
    console.log('Error');
})

// mongoose.connect(ur, { useNewUrlParser: true });

const Schema=new mongoose.Schema(
    {
        UserName:{
            type:String,
            require:true,
            unique:true,
            maxlength:20,
            minlength:3
        },
        UserPassword:{
            type:String,
            required:true,
            minlength:5,
            maxlength:20
        },
        UserEmail:{
            type:String,
            required:true
        }
    }
)

const col=new mongoose.model("Project_collection",Schema);
module.exports={col};

const Schema2=new mongoose.Schema(
    {
        MechanicName:{
            type:String,
            require:true,
            unique:true,
            maxlength:20,
            minlength:3
        },
        MechanicPassword:{
            type:String,
            required:true,
            minlength:5,
            maxlength:20
        },
        MechanicEmail:{
            type:String,
            required:true
        },
        shopcontact:{
            type:String,
            require:true,
            maxlength:10,
            minlength:10
        },
        shopaddress:{
            type:String,
            require:true
        }

    }
)

const col1=new mongoose.model("MProject_collection",Schema2);

module.exports={col1};