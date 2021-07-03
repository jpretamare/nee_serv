let asd // auxiliar nunca esta demas
const express = require('express');
const axios = require('axios')
const router = express.Router();
module.exports = router;

router.get('/:id', async (req, res) => { 
    const {id} = req.params
    asd = await axios.get(`https://www.pelisplay.co/api/serie/${id}`)
    res.status(200).json(asd.data)
})

