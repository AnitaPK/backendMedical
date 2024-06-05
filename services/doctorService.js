const mongoose = require("mongoose");
const Doctor = require('../models/doctor');
const constants = require('../config/constants');

// Connect to MongoDB
// mongoose.connect(constants.MONGO_BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb+srv://anitakhamitkar:JkTRnraSzTWUsQNr@medicalpractice.blzc5mk.mongodb.net/medicalpractice');


async function addDoctor(doctor) {
  try {
    const doctorDetails = {
      name: doctor.name,
      phoneNumber: doctor.phoneNumber,
      gender: doctor.gender,
      age: doctor.age,
      email: doctor.email,
      password: doctor.password,
      address: doctor.address,
      city: doctor.city,
      specialist: doctor.specialist
    };
    const newDoctor = new Doctor(doctorDetails);
    const result = await newDoctor.save();
    return { status: 200, task: result };
  } catch (error) {
    throw { status: 500, message: "Internal server error" };
  }
}

async function getAllDoctors() {
  try {
    const doctors = await Doctor.find({}, { __v: 0 });
    return doctors;
  } catch (error) {
    throw { status: 500, message: "Internal server error" };
  }
}

module.exports = {
  addDoctor,
  getAllDoctors
};
