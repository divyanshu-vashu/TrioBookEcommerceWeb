import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;

// import mongoose from "mongoose";
// import colors from "colors";

// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGO_URI; // MongoDB Atlas connection string

//     if (!mongoURI) {
//       throw new Error('MONGO_URI is not defined in environment variables');
//     }

//     const conn = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Other options if needed
//     });

//     console.log(
//       `Connected To MongoDB Database: ${conn.connection.host}`.bgMagenta.white
//     );
//   } catch (error) {
//     console.error(`Error in MongoDB: ${error}`.bgRed.white);
//     process.exit(1); // Exit process with failure
//   }
// };

// export default connectDB;

