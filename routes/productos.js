var express = require('express');
var router = express.Router();
let controller = require('../controllers/productoController');

// WS listar registros
router.get('/list', function(req, res) {
  controller.listar(req, res);
});

// WS mostrar un registro por su id
// router.get('/mostrar/:id', function(req, res, next) {
//   controller.show(req, res);
// });

// WS crear registro
router.post('/create', function(req, res){
  controller.store(req, res);
});

// WS actualizar registro
router.post('/edit', function(req, res){
  controller.edit(req, res);
});

// WS eliminar registro
router.post('/delete', function(req, res){
  controller.delete(req, res);
});

module.exports = router;

