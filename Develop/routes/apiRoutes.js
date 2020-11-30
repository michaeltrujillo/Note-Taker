var db = require("../db/db.json");
const router = require("express").Router();



  router.get("/api/notes", function(req, res) {
    res.json(db);
  });



  router.post("/api/notes", function(req, res) {

      db.push(req.body);
    
  });


  router.post("/api/notes/:id", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;


    res.json({ ok: true });
  });


module.exports = router;