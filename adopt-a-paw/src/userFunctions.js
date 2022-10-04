export const setupUser = () => {
  const fs = require("fs");
  // create a JSON object
  const user = {
    id: 1,
    name: "Adam Capdeville",
    username: "CapdevilleA",
    dob: "11/13/1990",
  };

  const data = JSON.stringify(user);

  fs.writeFile("user.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
};
