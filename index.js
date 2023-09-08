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
    if (req.body && Object.keys(req.body).length > 0) {
      // Data found in req.body
      res.send('This is a POST request with data.');
    } else {
      // No data in req.body
      res.json({Error: "Data Not Found"})
    }
  });

// Porting
app.listen(PORT, () => ConnectDB().then(() => console.log("Server is running")).catch((error)=>console.log(error, "Server is running, But database connection failed!"))) 