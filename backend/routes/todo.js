const router = require('express').Router();
const Todo = require('../models/todo.model');

router.route('/get').get((req,res)=>{
    Todo.find()
    .then(todo =>res.json(todo))
    .catch(err=> res.status(400).json('Error : '+ err));
});

router.route('/add').post((req,res)=>{
    const title =req.body.title;
    const description =req.body.description;
    const date = Date.parse(req.body.date);
    const tag =req.body.tag;

    const newTodo = new Todo({title, description, date, tag});
    
    newTodo.save()
    .then(()=>res.json('Schedule Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
      .then(todo => res.json(todo))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
      .then(() => res.json('Schedule deleted!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });  

  router.route('/update/:id').post((req,res)=>{
    Todo.findById(req.params.id)
    .then(todo=>{
        todo.title=req.body.title;
        todo.description=req.body.description;
        todo.tag=req.body.tag;
        todo.date= Date.parse(req.body.date);        

        todo.save()
        .then(() => res.json('Schedule updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports=router;