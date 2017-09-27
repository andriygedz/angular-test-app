var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var COMPANIES_COLLECTION = "company";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/conpany_db", function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// COMPANIES API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/companies"
 *    GET: finds all companies
 *    POST: creates a new company
 */

app.get("/api/companies", function(req, res) {
  db.collection(COMPANIES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get companies.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/companies", function(req, res) {
  var newCompany = req.body;
  newCompany.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(COMPANIES_COLLECTION).insertOne(newCompany, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new company.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/companies/:id"
 *    GET: find company by id
 *    PUT: update company by id
 *    DELETE: deletes company by id
 */

app.get("/api/companies/:id", function(req, res) {
  db.collection(COMPANIES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get company");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/companies/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(COMPANIES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update company");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/companies/:id", function(req, res) {
  db.collection(COMPANIES_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete company");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});