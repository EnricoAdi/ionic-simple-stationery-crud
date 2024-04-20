const express = require('express')
const router = express()

const Stationery = require("../models/Stationery")

router.get('/', async(req, res) => {
  const result = await Stationery.find()
  if(!result) return res.status(400).send('Error fetching data')
  return res.status(200).json(result)
})

router.get('/:id', async(req, res) => {
  const {id} = req.params
  const result = await Stationery.findOne({
    _id: id
  })
  if(!result) return res.status(404).send("No stationery found")
  return res.status(200).json(result)
})

router.post('/', async(req, res) => {
  const {name, qty, price, type} = req.body
  if(!name || !qty || !price || !type) return res.status(400).send('Invalid input')

  const stationery = new Stationery({
    name, qty, price, type
  })
  const result = await stationery.save()
  if(!result) return res.status(400).send('Error saving new stationery')
  return res.status(201).json(result)
})

router.put("/:id", async(req,res)=>{
  const {id} = req.params
  const {name, qty, price, type} = req.body
  if(!name || !qty || !price || !type) return res.status(400).send('Invalid input')
  const result = await Stationery.findOneAndUpdate({_id:id}, {name, qty, price, type}, {new: true})
  if(!result) return res.status(400).send('Error updating stationery')
  return res.status(200).json(result)
})

router.delete("/:id", async(req,res)=>{
  const {id} = req.params
  const result = await Stationery.findOneAndDelete({_id:id})
  if(!result) return res.status(400).send('Error deleting stationery')
  return res.status(200).json(result)
})

module.exports = router