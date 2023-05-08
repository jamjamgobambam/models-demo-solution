// Define the model schema
const usersSchema = {
    id: Number,
    name: String,
    email: String,
    password: String
  }; 
  
  // Create an in-memory store for the users
  let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: 'password456' }
  ];
  
  // Define functions to interact with the model data
  const userModel = {
    getAll: () => {
      return users;
    },
    getById: (id) => {
      return users.find(user => user.id === id);
    },
    create: (user) => {
      const newId = users.length + 1;
      const newUser = { id: newId, ...user };
      users.push(newUser);
      return newUser;
    },
    update: (id, user) => {
      const index = users.findIndex(user => user.id === id);
      if (index === -1) {
        return null;
      }
      const updatedUser = { ...users[index], ...user };
      users[index] = updatedUser;
      return updatedUser;
    },
    delete: (id) => {
      const index = users.findIndex(user => user.id === id);
      if (index === -1) {
        return null;
      }
      const deletedUser = users[index];
      users.splice(index, 1);
      return deletedUser;
    }
  };
  
  module.exports = userModel;  