const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");


// Create a user
const createUser = asyncHandler(async (req, res) => {
    const {name, DOB} = req.body;

    // Checking if a user is already exist or not
    const findUser = await User.findOne({ name: name });

    if (!findUser) {
        
        // Create a new user
        const newUser = await User.create(req.body);
        res.send(newUser);
    }
    else {
        throw new Error("User already exist........")
    }
})

// Get all the user
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

// Get a user
const getAUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const getUser = await User.findById(id);
        if (getUser) {
            res.json(getUser)
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        throw new Error(error);
    }
})

// Checkif the user exist or not
const checkExistence = asyncHandler(async (req, res)=>{
    const { name } = req.body;
    try {
        const getUser = await User.findOne({ name });
        if (getUser) {
            res.send({ exists: !!getUser });
        } else {
            res.status(404).json({ exists: false });
        }
    } catch (error) {
        throw new Error(error);
    }
})

// Returns user above a certain age
const userAboveAge = asyncHandler(async (req,res)=>{
        const {age} = req.body;
        try {
          const users = await User.find({ age: { $gte: age } });
          if(users){
            res.send(users);
          }else{
            res.status(500).send({ error : "User above this age does not exist.."});
          }
        } catch (error) {
            throw new Error(error);
        }
})

// Listall usernames
const userNames = asyncHandler(async (req,res)=>{
    try {
        const users = await User.find({}).select('name -_id');
        res.send(users.map(user => user.name));
      } catch (error) {
        res.status(500).send();
      }
})

module.exports = { createUser, getAUser, getAllUser, checkExistence, userAboveAge, userNames}; 