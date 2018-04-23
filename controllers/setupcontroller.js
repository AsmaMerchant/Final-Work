var Todos = require('../models/todoModel');

modules.exports = function(app) {

    app.get('/api/setupTodos', function (req, res) {

   //seed database
   var starterTodos = [

       {
           username: 'test',
           todo: 'Work towards my passion',
           isDone: false,
           hasAttachment: false
       },
       {
        username: 'test',
        todo: 'Learn coding',
        isDone: false,
        hasAttachment: false
       },
       {
        username: 'test',
        todo: 'Become a software developer',
        isDone: false,
        hasAttachment: false
       },
       {
        username: 'test',
        todo: 'Become an expert',
        isDone: false,
        hasAttachment: false
       }

    ];
    Todos.create(starterTodos, function(err, 
        results) {
            res.send(results);
        });
    });

}