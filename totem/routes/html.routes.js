const router = require('express').Router()
const express = require('express');

const path = require('path');
router.use(express.static('public'))

router.get('/totem',function(req,res){

     try {
      res.sendFile(path.join('D:/quarto semestre/J.A 4 semestre/public/html/index.html'));

      console.log("acessado")
    } catch (error) {
        res.status(500).json({ error: error })

    }
  });

module.exports = router