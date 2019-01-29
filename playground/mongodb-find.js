//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable o connect to MongoDB server');
	}
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	
	
	/*db.collection('Todos').find({
		_id: new ObjectID('5c502504cac6db77f0d409c0')
		}).toArray().then((docs) =>{
		console.log('Todos');
		console.log(JSON.stringi fy(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/
	
/*	db.collection('Todos').find().count().then((count) =>{
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/
	
	//client.close();
	db.collection('Users').find({name: 'Strahinja'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});
	
	db.collection('Users').find().count().then((count) => {
		console.log(`Users count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch users', err);
	});
});