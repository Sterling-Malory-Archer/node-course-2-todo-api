//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable o connect to MongoDB server');
	}
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');
	
	/*
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c5042c0208447e5631eb783')
	}, {
		$set:{
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});*/
	
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c50397a208447e5631eb433')
	}, {
		$set:{
			text: 'Buy sushi',
			completed: false
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})
	//client.close();
});