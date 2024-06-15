const { log } = require("console");
const mongoose = require("mongoose");

const DATABASE_URL = "mongodb://127.0.0.1/loginpage";

mongoose
  .connect(DATABASE_URL, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("Connected to the database successfully"))
  .catch((err) => console.log("Error: ", err));

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const Signup = mongoose.model("Signup", signupSchema);

const createDocument = async () => {
    try{
        const User1 = new Signup({
            name: "Aryan Rathod",
            email: "aryanrathod410@gmail.com",
            password: "Rorono@zoro21",
            role: "user"
          });

          const User2 = new Signup({
            name: "Rushil saxena",
            email: "lightaxpe@gmail.com",
            password: "Rorono@zoro21",
            role: "user"
          }); 
          
          const User3 = new Signup({
            name: "Vishwang suthar",
            email: "panjupanda69@gmail.com",
            password: "Rorono@zoro21",
            role: "user"
          });


          const result = await Signup.insertMany([User1,User2,User3]);
          console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}
createDocument();

// newUser.save()
//   .then(() => console.log("User created"))
//   .catch((err) => console.log("Error: ", err));
