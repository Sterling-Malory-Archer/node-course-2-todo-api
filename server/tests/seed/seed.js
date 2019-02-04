const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const{Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'strax123@example.com',
    password: 'strax1994',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'strax1234@example.com',
    password: 'strax1995'
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 666
}];

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        var userOne = new User(user[0]).save();
        var userTwo = new User(user[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};
module.exports = {todos, populateTodos, users, populateUsers};