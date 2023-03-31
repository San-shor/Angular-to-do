const Model=require('../model/schema')

exports.getTopics=async (ctx)=>{
    try {
        const topics=await Model.find({})
        ctx.body=topics.sort((a,b)=>b.score-a.score)
        ctx.staus=200
    } catch (error) {
        ctx.status=500;
        ctx.body=error
        
    }
    
    
}
exports.createTopics=async (ctx)=>{
    try {
      const {title}=ctx.request.body
      const date= new Date();
      const result=await Model.create({title,date})
      ctx.body=result
      ctx.staus=201
    } catch (error) {
        ctx.status=500;
        ctx.body=error
        
    }
    
    
}