
const express = require('express')
const UserModel = require('../models/user.models')
const router= express.Router()


router.get('/', async(req, res)=>{
    try {
      const page = req.query.page || 1;

      const pageSize = req.query.pageSize || 5;

      const skip = (page-1)*pageSize

      const sortVariable = req.query.sort || 1

      if(sortVariable == 1) {

        sort = {dob:1}

      }else{
        sort = {dob:-1}
      }
      const filter = {}
      const name = req.query.name
      if(name){
        filter.name={$in:name}
      }

      const totalPage = Math.ceil(await UserModel.find(filter).countDocuments()/pageSize)
     
      const user = await UserModel 
      .find(filter)
      .skip(skip)
      .limit(pageSize)
      .sort(sort)
      .lean()
      .exec()
        res.status(200).send({users:user,totalPage:totalPage})
    } catch (err) {
        res.status(500).send({message: err.message})
    }

})




router.get('/', async(req,res)=>{
    try{
        const user = await UserModel.find().lean().exec()

        res.status(201).send({users:user})
    }catch(err){
          
        res.status(500).send({message: err.message})
    }

})


router.post('/',async(req,res)=>{

    try{
        const user = await UserModel.create(req.body);

        res.status(201).send({users:user})
    }catch(err){
          
        res.status(500).send({message: err.message})
    }
});


router.patch('/:id', async(req,res) =>{
  
    try{
        const user  = await UserModel.findByIdAndUpdate(req.param.id, req.body, {

            new: true,
        });
        res.status(200).send({users:user})

    }catch(error){

        res.status(500).send({message: err.message})
    }

})

router.delete('/:id', async(req,res)=>{

    try{
        const user = await UserModel.findByIdAndDelete(req.param.id)
        res.status(200).send({users:user})

    }catch(error){
        
        res.status(500).send({message: err.message})
    }
})

module.exports = router;