require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const uploadImageToCloudinary = async (file, fileName, department) => {
  try {
    let result = await cloudinary.uploader.upload(file, {
      public_id: `products/${department}/${fileName}`,
      unique_filename: true,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// test
//uploadImageToCloudinary("./assets/cheesecake.jpg", "cheesecake1", "dairy")
// returns a promise that resolves to an object, contains a secure_url property

module.exports = uploadImageToCloudinary;
