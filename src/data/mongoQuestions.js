export const mongoQuestions = [
  {
    question: "What is MongoDB?",
    answer: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It provides high performance, high availability, and easy scalability. Documents can have different fields and structures, offering more flexibility than traditional SQL databases."
  },
  {
    question: "Explain CRUD operations in MongoDB",
    answer: "CRUD operations in MongoDB: Create (insertOne, insertMany), Read (find, findOne), Update (updateOne, updateMany), and Delete (deleteOne, deleteMany). These operations allow you to manage documents in a collection.",
    code: `// Create
db.users.insertOne({ name: "John", age: 30 });

// Read
db.users.find({ age: { $gt: 25 } });

// Update
db.users.updateOne({ name: "John" }, { $set: { age: 31 } });

// Delete
db.users.deleteOne({ name: "John" });`
  },
  {
    question: "What are collections in MongoDB?",
    answer: "Collections are groups of MongoDB documents, similar to tables in relational databases. A collection exists within a single database."
  },
  {
    question: "What is a document in MongoDB?",
    answer: "A document in MongoDB is a set of key-value pairs, similar to JSON objects. Each document has a unique _id field and can contain nested fields."
  },
  {
    question: "What are indexes in MongoDB?",
    answer: "Indexes are data structures that improve the speed of search operations in collections.",
    code: `db.users.createIndex({ email: 1 });`
  },
  {
    question: "What is the default port for MongoDB?",
    answer: "The default port for MongoDB is 27017."
  },
  {
    question: "What is the _id field in MongoDB?",
    answer: "The _id field is a unique identifier for a document in a collection. MongoDB automatically creates this field if not provided."
  },
  {
    question: "What is a replica set in MongoDB?",
    answer: "A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability."
  },
  {
    question: "What is sharding in MongoDB?",
    answer: "Sharding is a method for distributing data across multiple machines. It enables horizontal scalability in MongoDB."
  },
  {
    question: "What is the use of the aggregation framework?",
    answer: "The aggregation framework processes data records and returns computed results. It's used for data analysis and transformation.",
    code: `db.orders.aggregate([{ $group: { _id: "$status", total: { $sum: "$amount" } } }])`
  },
  {
    question: "What is a cursor in MongoDB?",
    answer: "A cursor is a pointer to the result set of a query. You can iterate through it to access documents."
  },
  {
    question: "How does MongoDB store data?",
    answer: "MongoDB stores data as BSON (Binary JSON) format, which supports more data types than standard JSON."
  },
  {
    question: "How do you sort query results in MongoDB?",
    answer: "Use the sort() method.",
    code: `db.users.find().sort({ age: -1 })`
  },
  {
    question: "What does the $set operator do?",
    answer: "$set modifies the value of a field in a document.",
    code: `db.users.updateOne({ name: "Alice" }, { $set: { age: 28 } })`
  },
  {
    question: "How do you remove a field from a document?",
    answer: "Use the $unset operator.",
    code: `db.users.updateOne({ name: "Alice" }, { $unset: { age: "" } })`
  },
  {
    question: "What is a capped collection?",
    answer: "A capped collection is a fixed-size collection that maintains insertion order and automatically removes oldest documents when size is exceeded."
  },
  {
    question: "What does the $match stage do in aggregation?",
    answer: "$match filters documents to pass only those that match the specified condition.",
    code: `db.orders.aggregate([{ $match: { status: "completed" } }])`
  },
  {
    question: "How do you limit results in a query?",
    answer: "Use the limit() method.",
    code: `db.users.find().limit(5)`
  },
  {
    question: "What does the $project stage do?",
    answer: "$project specifies the fields to include or exclude in the output documents.",
    code: `db.users.aggregate([{ $project: { name: 1, email: 1 } }])`
  },
  {
    question: "How do you rename a field in a document?",
    answer: "Use the $rename operator.",
    code: `db.users.updateOne({}, { $rename: { "fullname": "name" } })`
  },{
    question: "What is the use of $group in aggregation?",
    answer: "$group is used to group documents by a specific field and perform aggregate functions like sum, avg, count, etc.",
    code: `db.orders.aggregate([{ $group: { _id: "$status", total: { $sum: "$amount" } } }])`
  },
  {
    question: "What does the $lookup stage do?",
    answer: "$lookup is used to perform a left outer join to another collection in the same database.",
    code: `db.orders.aggregate([
  { $lookup: {
    from: "customers",
    localField: "customerId",
    foreignField: "_id",
    as: "customerDetails"
  }}
])`
  },
  {
    question: "How do you check the current database in MongoDB shell?",
    answer: "Use the command `db`."
  },
  {
    question: "How do you switch databases in MongoDB shell?",
    answer: "Use the `use <databaseName>` command."
  },
  {
    question: "What is the purpose of MongoDB Compass?",
    answer: "MongoDB Compass is a GUI for MongoDB that allows you to visually explore your data, run queries, and manage indexes."
  },
  {
    question: "What are validation rules in MongoDB?",
    answer: "Validation rules enforce schema rules on documents in a collection to ensure data integrity."
  },
  {
    question: "How do you drop a collection?",
    answer: "Use the `drop()` method.",
    code: `db.users.drop()`
  },
  {
    question: "How do you drop a database?",
    answer: "Use the `db.dropDatabase()` command."
  },
  {
    question: "What does the $in operator do?",
    answer: "$in matches values against an array of possible matches.",
    code: `db.products.find({ category: { $in: ["electronics", "books"] } })`
  },
  {
    question: "What does the $or operator do?",
    answer: "$or performs a logical OR operation on an array of two or more expressions.",
    code: `db.users.find({ $or: [ { age: { $lt: 25 } }, { name: "John" } ] })`
  },
  {
    question: "What is a compound index?",
    answer: "A compound index is an index on multiple fields.",
    code: `db.users.createIndex({ name: 1, age: -1 })`
  },
  {
    question: "What does $ne mean in MongoDB?",
    answer: "$ne is used to find documents where the field value is not equal to a specified value.",
    code: `db.users.find({ age: { $ne: 30 } })`
  },
  {
    question: "What does the $exists operator do?",
    answer: "$exists checks for the presence of a field.",
    code: `db.users.find({ middleName: { $exists: false } })`
  },
  {
    question: "How do you count documents in a collection?",
    answer: "Use the countDocuments() method.",
    code: `db.users.countDocuments({ age: { $gt: 25 } })`
  },
  {
    question: "What is the difference between findOne and find?",
    answer: "findOne returns a single matching document, while find returns a cursor to all matching documents."
  },
  {
    question: "How do you update multiple documents?",
    answer: "Use the updateMany() method.",
    code: `db.users.updateMany({ active: true }, { $set: { verified: true } })`
  },
  {
    question: "What does the $push operator do?",
    answer: "$push appends a value to an array field.",
    code: `db.users.updateOne({ name: "Alice" }, { $push: { tags: "new" } })`
  },
  {
    question: "What is GridFS in MongoDB?",
    answer: "GridFS is a specification for storing and retrieving large files such as images or videos in MongoDB."
  },
  {
    question: "What is the oplog?",
    answer: "The oplog (operations log) is a special capped collection that keeps a rolling record of all operations that modify the data stored in MongoDB."
  },
  {
    question: "How do you check the status of a replica set?",
    answer: "Use the `rs.status()` command in the Mongo shell."
  },{
    question: "What does the $addToSet operator do?",
    answer: "$addToSet adds a value to an array only if it doesn't already exist.",
    code: `db.users.updateOne({ name: "Alice" }, { $addToSet: { roles: "admin" } })`
  },
  {
    question: "What does the $pull operator do?",
    answer: "$pull removes items from an array that match a specified value.",
    code: `db.users.updateOne({ name: "Alice" }, { $pull: { tags: "inactive" } })`
  },
  {
    question: "How do you rename a collection?",
    answer: "Use the renameCollection command or db.collection.renameCollection()."
  },
  {
    question: "What is the purpose of the $elemMatch operator?",
    answer: "$elemMatch is used to match documents that contain an array field with at least one element matching all specified criteria.",
    code: `db.orders.find({ items: { $elemMatch: { product: "pen", qty: { $gt: 10 } } } })`
  },
  {
    question: "What does the $all operator do?",
    answer: "$all matches arrays that contain all specified elements.",
    code: `db.users.find({ tags: { $all: ["admin", "active"] } })`
  },
  {
    question: "What is a geospatial index in MongoDB?",
    answer: "A geospatial index supports queries that calculate distances and intersections for geospatial objects."
  },
  {
    question: "What is the difference between save() and insert()?",
    answer: "`save()` updates an existing document if _id exists or inserts a new one. `insert()` always adds a new document."
  },
  {
    question: "What is the difference between find() and aggregate()?",
    answer: "`find()` is used to query documents, while `aggregate()` is used for advanced data transformation and computation."
  },
  {
    question: "What are validation levels in MongoDB?",
    answer: "Validation levels define whether MongoDB applies rules to existing documents: off, strict, or moderate."
  },
  {
    question: "How do you find documents where a field is an array?",
    answer: "Use the $type operator.",
    code: `db.users.find({ hobbies: { $type: "array" } })`
  },
  {
    question: "How do you ensure uniqueness in a MongoDB field?",
    answer: "By creating a unique index.",
    code: `db.users.createIndex({ email: 1 }, { unique: true })`
  },
  {
    question: "How do you paginate results?",
    answer: "Use the skip() and limit() functions.",
    code: `db.users.find().skip(10).limit(5)`
  },
  {
    question: "What is the difference between embedded and referenced documents?",
    answer: "Embedded documents are stored inside a parent document; referenced documents use _id to link related data."
  },
  {
    question: "What does the $regex operator do?",
    answer: "$regex performs pattern matching using regular expressions.",
    code: `db.users.find({ name: { $regex: "^A", $options: "i" } })`
  },
  {
    question: "What is an ObjectId in MongoDB?",
    answer: "ObjectId is a 12-byte identifier used as the default value for _id fields."
  },
  {
    question: "How do you backup a MongoDB database?",
    answer: "Use `mongodump` to back up and `mongorestore` to restore."
  },
  {
    question: "What is the purpose of the profiler in MongoDB?",
    answer: "The profiler collects detailed information about database operations for performance analysis."
  },
  {
    question: "What is journaling in MongoDB?",
    answer: "Journaling is a write-ahead logging mechanism to ensure data durability."
  },
  {
    question: "What is the WiredTiger storage engine?",
    answer: "WiredTiger is MongoDB's default storage engine that provides compression, concurrency, and performance improvements."
  },
  {
    question: "How do you convert a field type in documents?",
    answer: "Use the aggregation framework with $convert or $toInt, $toString, etc.",
    code: `db.collection.aggregate([{ $addFields: { quantity: { $toInt: "$quantity" } } }])`
  },

  // 61–80
  {
    question: "What is collation in MongoDB?",
    answer: "Collation defines rules for string comparison, such as case sensitivity and accent marks."
  },
  {
    question: "How do you create a text index?",
    answer: "Use createIndex with 'text'.",
    code: `db.articles.createIndex({ content: "text" })`
  },
  {
    question: "How do you perform a text search?",
    answer: "Use the $text operator.",
    code: `db.articles.find({ $text: { $search: "mongodb" } })`
  },
  {
    question: "What is TTL index?",
    answer: "TTL (Time to Live) indexes automatically remove documents after a certain time.",
    code: `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })`
  },
  {
    question: "What is a hashed index?",
    answer: "A hashed index supports sharding by hashing the values of a field to distribute documents evenly."
  },
  {
    question: "What is the difference between $and and implicit AND?",
    answer: "$and is explicit. Implicit AND occurs when multiple conditions are placed in the same object."
  },
  {
    question: "Can MongoDB handle transactions?",
    answer: "Yes, since v4.0, MongoDB supports multi-document ACID transactions."
  },
  {
    question: "How do you start a transaction?",
    answer: "Using session.startTransaction() in a session context."
  },
  {
    question: "What is the purpose of the admin database?",
    answer: "The admin database is used to store system-level commands and user authentication data."
  },
  {
    question: "What is the local database used for?",
    answer: "The local database stores replication and other internal information and is not replicated."
  },
  {
    question: "How do you find documents with a null field?",
    answer: "Use `{ field: null }` or `{ field: { $exists: false } }`."
  },
  {
    question: "How do you compare dates in MongoDB?",
    answer: "Use the ISODate object or Date constructor.",
    code: `db.logs.find({ timestamp: { $gt: ISODate("2023-01-01") } })`
  },
  {
    question: "What is $cond in aggregation?",
    answer: "$cond is a conditional operator for if-then-else logic.",
    code: `{ $cond: { if: { $gt: ["$score", 80] }, then: "Pass", else: "Fail" } }`
  },
  {
    question: "How to use $merge in aggregation?",
    answer: "$merge writes the output of an aggregation pipeline to a collection.",
    code: `db.orders.aggregate([... , { $merge: "summary" }])`
  },
  {
    question: "What does explain() do in MongoDB?",
    answer: "explain() provides information on how MongoDB runs a query, helping to optimize performance."
  },
  {
    question: "How do you create users in MongoDB?",
    answer: "Use the createUser command in the admin database.",
    code: `db.createUser({ user: "arti", pwd: "secret", roles: ["readWrite"] })`
  },
  {
    question: "What is the use of roles in MongoDB?",
    answer: "Roles grant users permissions to perform actions on resources."
  },
  {
    question: "What are some common MongoDB drivers?",
    answer: "Popular MongoDB drivers exist for Node.js, Python (PyMongo), Java, C#, Go, PHP, and more."
  },
  {
    question: "How do you connect MongoDB to a Node.js app?",
    answer: "Use the MongoDB Node.js driver with MongoClient.",
    code: `const client = new MongoClient(uri); await client.connect();`
  },
  {
    question: "What is the use of MongoURI?",
    answer: "MongoURI is a connection string format used to connect to MongoDB instances."
  }
];
