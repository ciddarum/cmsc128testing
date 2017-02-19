var student = require('./../controllers/student');

module.exports = function(router) {
    router.route('/students')
        .get(student.find)
        .post(student.insert);

    router.route('/students/:id')
        .get(student.findOne);

    return router;  
};
