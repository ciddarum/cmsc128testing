var db = require(__dirname + './../lib/mysql');

exports.find = function(req, res, next) {
    db.query("SELECT * FROM student", function(err, rows) {
        if (err) return next(err);
        res.send(rows);
    });
};

exports.findOne = function(req, res, next) {
    db.query("SELECT * FROM student WHERE studno=?", [req.params.id], function(err, rows) {
        if (err) return next(err);
        if (rows.length === 0) {
            res.status(404).send('Student not found.');
        } else {
            res.send(rows[0]);
        }
    });
};

exports.insert = function(req,res,next){
	db.query("INSERT INTO student(studno,name,bday) VALUES (?,?,?)", [req.body.studno,req.body.name, req.body.bday], function(err,rows){
		if(err) return next(err);
		res.send(rows);
	});
};
