
// var tbl = {
//   AttributeDefinitions: [
//     {
//       AttributeName: 'id',
//       AttributeType: 'N'
//     }
//   ],
//   KeySchema: [
//     {
//       AttributeName: 'id',
//       KeyType: 'HASH'
//     }
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1
//   },
//   TableName: 'kabali'
// };

// doc.service.createTable(tbl, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Table Created", data);
//   }
// });



// const insertparams = {
//   TableName: "tblusers",
//   Item: {
//     id: 2,
//     username: "Manju",
//     password: "123abc"
//   },
// };
// docClient.put(insertparams,function (err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })


// const insertParams = {
//   RequestItems: {
//     "tblusers": [
//       {
//         PutRequest: {
//           Item: {
//             id: 2,
//             username: "Manju",
//             password: "123abc"
//           }
//         }
//       },
//       {
//         PutRequest: {
//           Item: {
//             id: 3,
//             username: "John",
//             password: "456def"
//           }
//         }
//       },
//       // Add more items as needed
//     ]
//   }
// };

// docClient.batchWrite(insertParams, function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });


const AWS = require('aws-sdk');

// Configure the AWS SDK
AWS.config.update({ region: 'your-region' });

// Create an instance of the DynamoDB DocumentClient
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Specify the table name
const tableName = 'your-table-name';

// Set the desired limit
const limit = 4;

// Construct the scan or query parameters
const params = {
  TableName: tableName,
  Limit: limit,
};

// Execute the scan or query operation
dynamodb.scan(params, (err, data) => {
  if (err) {
    console.error('Error fetching items from DynamoDB:', err);
  } else {
    console.log('First four items:', data.Items);
  }
});





  