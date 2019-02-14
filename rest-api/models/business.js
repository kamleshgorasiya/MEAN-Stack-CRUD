const mongoose=require('mongoose')
const Schema= mongoose.Schema

const businesSchema=new Schema({
    person_name: String,
    business_name: String,
    business_gst_number:String
})

module.exports=mongoose.model('business',businesSchema,'business')