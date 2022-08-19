const router=require('express').Router()
const Transfer=require('../../models/Transaction')

router.get('/',(req,res)=>{
    Transfer.find((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})

router.post('/add',(req,res)=>{
    const details= new Transfer(req.body)
    details.save((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})
module.exports=router;