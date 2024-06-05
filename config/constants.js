// const constants = {
//     MONGO_BASE_URL: 'mongodb+srv://anitakhamitkar:JkTRnraSzTWUsQNr@medicalpractice.blzc5mk.mongodb.net/medicalpractice'
//   };

// module.exports = {
//     constants
// };
require('dotenv').config();

module.exports = {
    MONGO_BASE_URL: process.env.MONGO_BASE_URL
  };
  