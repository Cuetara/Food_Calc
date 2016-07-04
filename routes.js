var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');


/* GET home_page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});
router.get('/api/ingredientes', function(req, res, next) {
  req.models.ingrediente.find ({})
  .sort({"create_at":-1})
  .exec(function(error,ingredientes) {
    if (error)
      res.send(error);
    res.json(ingredientes);
  })
})
router.post('/api/ingrediente', function(req, res, next) {
  req.body.create_at=new Date().getTime();
  console.log(req.body);
  req.models.ingrediente.create(req.body,function(error,ingrediente) {
    if (error)
      res.send(error);
      console.log(ingrediente);
    res.json(ingrediente);
  })
})

/*GET home_page/nombre/age */
/*
router.get('/:nombre/:age', function(req, res, next) {      /*req: objeto en el que recibes la informacion
  res: objeto en el que envias la informacion   next: si no vas a devolver nada en esta funcion y pasas a la siguiente
    console.log(req.params.nombre);              /*se ejecuta en consola cuando escribimos "node server.js" y recargamos la pagina

    res.render('pepe', {
      name:req.params.nombre,
      age: req.params.age,
      personaje1: 'Jhon snow',
      personaje2: 'chacha guarrona',
      personaje3: 'Carol chamaquita',

    });
});

router.get('/:id', function(req, res, next) {
    var array = [
      {
        name: "paqui",
        age: 23,
        personaje1: "shinichi",
        personaje2: "jager",
        personaje3: "migi",
      },
      {
        name: "fran",
        age: 22,
        personaje1: "nudi",
        personaje2: "culo",
        personaje3: "pie",
      },
      {
        name: "carol",
        age: 40,
        personaje1: "pies grandes",
        personaje2: "gordita",
        personaje3: "tez morenota",
      }
    ]

    if(array[req.params.id])
      res.render('pepe',array[req.params.id]);
   else{
     res.render('pepe',{
       name: "Usuario no registrado",
       age: 'acceda a login',
       personaje1: "pies grandes",
       personaje2: "gordita",
       personaje3: "tez morenota",
     })
   }
  })
*/
module.exports = router;
