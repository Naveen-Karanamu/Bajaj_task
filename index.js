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
        const alphabets = inputData.filter(
          item => typeof item === 'string' && item.length === 1 && item.match(/[a-zA-Z]/)
        );
    
        // Find the highest alphabet (case insensitive) if there are any alphabets
        let highest_alphabet = [];
        if (alphabets.length > 0) {
          highest_alphabet = [alphabets.reduce((highest, current) => {
            return current.toLowerCase() > highest.toLowerCase() ? current : highest;
          }, alphabets[0])];
        }
    
        const response = {
          is_success: true,
          user_id: 'john_doe_17091999',
          email: 'john@xyz.com',
          roll_number: 'ABCD123',
          numbers: numbers,
          alphabets: alphabets,
          highest_alphabet: highest_alphabet,
        };
    
        res.json(response);
    } else {
      // No data in req.body
      const response = {
        is_success: false,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers: [],
        alphabets: [],
        highest_alphabet: [],
      };
      res.json(response);
    }
  });

// Porting
app.listen(PORT, () => ConnectDB().then(() => console.log("Server is running")).catch((error)=>console.log(error, "Server is running, But database connection failed!"))) 