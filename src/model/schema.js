const { model, Schema, default: mongoose } = require('mongoose');

const topicSchema=new Schema({
    title:String,
    published_at:{
        type: Date,
        default: new Date
},
    score:{
        type:Number,
        default:0
    }
})

const Topic=mongoose.model('Topic',topicSchema)

module.exports=Topic