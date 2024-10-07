mondo demo

Here's a simple MongoDB example, demonstrating basic CRUD (Create, Read, Update, Delete) operations. This example will guide students on how to interact with a MongoDB database using a Node.js environment.

### Step-by-Step Walkthrough

**Step 1: Set up MongoDB**
- Use [MongoDB Atlas](https://www.mongodb.com/atlas) (cloud version) or set up a local MongoDB instance.
- Create a database called `school` and a collection called `students`.

**Step 2: Set up Node.js**
Make sure you have Node.js installed. Then, create a new Node.js project and install the `mongodb` package.

```bash
mkdir mongodb-demo
cd mongodb-demo
npm init -y
npm install mongodb
```

**Step 3: Connecting to MongoDB**
Create a `mongo.js` file and add the following code:

```javascript
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // or your MongoDB Atlas connection string
const client = new MongoClient(url);

// Database Name
const dbName = 'school';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to MongoDB server');
  
  const db = client.db(dbName);
  const studentsCollection = db.collection('students');

  return { db, studentsCollection };
}

main().catch(console.error);
```

This script connects to the MongoDB server. Replace the connection string with your MongoDB Atlas string if you're using the cloud version.

**Step 4: Create (Insert) Documents**
Now, let's add some student documents to the `students` collection.

```javascript
async function insertStudents() {
  const { studentsCollection } = await main();

  const newStudents = [
    { name: 'Alice', age: 22, major: 'Computer Science' },
    { name: 'Bob', age: 23, major: 'Mathematics' },
    { name: 'Charlie', age: 24, major: 'Physics' }
  ];

  const result = await studentsCollection.insertMany(newStudents);
  console.log(`${result.insertedCount} students were added.`);
}

insertStudents();
```

**Step 5: Read (Find) Documents**
After inserting, show how to retrieve the students' data.

```javascript
async function findStudents() {
  const { studentsCollection } = await main();

  const students = await studentsCollection.find({}).toArray();
  console.log('Students:');
  console.log(students);
}

findStudents();
```

**Step 6: Update a Document**
Show how to update a student’s major.

```javascript
async function updateStudent() {
  const { studentsCollection } = await main();

  const updateResult = await studentsCollection.updateOne(
    { name: 'Alice' },
    { $set: { major: 'Data Science' } }
  );

  console.log(`Updated ${updateResult.matchedCount} student's major.`);
}

updateStudent();
```

**Step 7: Delete a Document**
Finally, demonstrate how to delete a student’s record.

```javascript
async function deleteStudent() {
  const { studentsCollection } = await main();

  const deleteResult = await studentsCollection.deleteOne({ name: 'Bob' });
  console.log(`Deleted ${deleteResult.deletedCount} student's record.`);
}

deleteStudent();
```

### Additional Discussion Topics:
- Indexing for faster queries.
- Schema-less structure and flexibility in document modeling.
- Comparison with relational databases (e.g., SQL).

This example gives a complete CRUD operation walk-through using MongoDB, providing your class with practical understanding of database operations.