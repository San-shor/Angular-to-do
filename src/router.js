const controller=require('./controller/topicController')
const Router=require('koa-router')
const router= new Router()

router.get('/topic',controller.getTopics)
router.post('/topic',controller.createTopics)

module.exports=router