let db = require('../models/dbconexion');

let productos = {
  listar(req, res) {
    let sql = "SELECT * FROM productos";
    db.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(result);
      }
    });
  },
  store(req, res) {
    const { nombre, descripcion, precio } = req.body;
    
    let sql = "INSERT INTO productos (nombre, descripcion, precio) VALUES(?, ?, ?)";
    
    db.query(sql, [nombre, descripcion, precio], function (err, newData) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(newData);
      }
    });
  },
  show(req, res) {
    const { codigo } = req.body;
    let sql = "SELECT * FROM productos WHERE codigo=?";
    db.query(sql, [codigo], function (err, rowData) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(rowData);
      }
    });
  },
  edit(req, res) {
    const { codigo, nombre, descripcion, precio } = req.body;
    let sql = "UPDATE productos SET nombre=?, descripcion=?, precio=? WHERE codigo=?";
    db.query(sql, [nombre, descripcion, precio, codigo], function (err, newData) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(newData);
      }
    });
  },
  delete(req, res) {
    const xcodigo = req.body.codigo;
    let sql = "DELETE FROM productos WHERE codigo=?";
    db.query(sql, [xcodigo], function (err, newData) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  }
}

module.exports = productos;

