const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//the host number tha we will be running on
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';


MongoClient.connect(url, (err, client) => {
    //second is callback function

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Jinwei Zhang", "description": "test"},
        (err, result) => {
            assert.equal(err,null);

            console.log("After Insert:\n");
            //ops how many operation has been carried out successfully
            console.log(result.ops);

            collection.find({}).toArray((err, docs) => {
                assert.equal(err,null);

                console.log("Found:\n");
                console.log(docs);

                db.dropCollection("dishes", (err, result) => {
                    assert.equal(err,null);

                    client.close();
                });
            });
        });

});
