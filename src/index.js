const Koa=require('koa')
const app=new Koa()
const route=require('./router')
const mongoose=require('mongoose')
const cors=require('@koa/cors')
const bodyparser=require('koa-bodyparser')


app.use(cors());
app.use(bodyparser());
app.use(route.routes());


(async function bootstrap () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo-example');
    console.log('\nConnected to DB.');
    app.listen(3000, () => console.log(`Server is listening on port 3000.`));
  } catch (error) {
    console.log(error);
  }
})();