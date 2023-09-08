// requiring env
// require("dotenv").config();
import 'dotenv/config'

// Imported the express framework
// const express = require("express");
// const mongoose = require("mongoose");
import express from "express";
import mongoose from "mongoose"

import ConnectDB from "./database/connection.js"; 


// Initializing
const app = express();

app.use(express.json());
const PORT=process.env.PORT || 3001


/*
Route: /
Description: Get the user based on the id
params: _id
Access: Public
Method: GET, POST
*/
// GET endpoint

function handleGet(req, res) {
    try{
        return res.json({"operation_code":1});
    }catch(error){
        return res.status(500).json({ Error: error });
    }
  }
app.get('/bfhl', (req, res) => {
    handleGet(res,res)
  });
  
  // POST endpoint
  app.post('/bfhl', (req, res) => {
    // Check if there is data in req.body
  if (req.body && Array.isArray(req.body.data) && req.body.data.length > 0) {
    const inputData = req.body.data;
    
    // Extract numbers and alphabets from the input data
    const numbers = inputData.filter(item => !isNaN(item));
    const alphabets = inputData.filter(item => isNaN(item) && item.length === 1 && /[a-zA-Z]/.test(item));

    // Find the highest alphabet (case insensitive)
    const highest_alphabet = alphabets.reduce((highest, current) => {
      return current.toLowerCase() > highest.toLowerCase() ? current : highest;
    }, 'A');

    const response = {
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: [highest_alphabet],
    };

    res.json(response);
    } else {
      // No data in req.body
      res.json({Error: "Data Not Found"})
    }
  });

// Porting
app.listen(PORT, () => ConnectDB().then(() => console.log("Server is running")).catch((error)=>console.log(error, "Server is running, But database connection failed!"))) 