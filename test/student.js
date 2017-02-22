var should = require('should-http'),
    request = require('supertest');

describe('Student', function(){
    var url = 'http://localhost:5000';

    describe('find()', function(){
        it('retrieves all student records', function(done){
            request(url)
            .get('/students')
            .end(function(err,res){
                if(err) throw err;
                res.should.have.status(200);
                res.body.should.be.an.instanceOf(Array);
                done();
            });
        });
    });

    describe('findOne()', function () {
        it('retrieves a specific student record', function (done) {
            request(url)
                .get('/students/' + '2012-00001')
                .end(function(err, res) {
                    if (err) throw err;
                    res.should.have.status(200);
                      res.body.should.be.an.instanceOf(Object);
                    done();
                });
        });
    });
    describe('insert()', function () {
            it('create a new student record', function (done) {
                var student = {
                    'studno': '2017-00001',
                    'name': 'Name Test',
                    'bday': '2000-01-01'
                };
                request(url)
                    .post('/students')
                    .send(student)
                    .end(function(err, res) {
                        if (err) throw err; 
                        res.should.have.status(200);
                        done();
                    });
            });
    });
});
