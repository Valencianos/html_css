const express = require('express');
const app = express();
const joi = require('joi');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const pathJSON = path.join(__dirname, "users.json");
let uniqueID = 0;

app.use(express.json());

const userScheme = joi.object({
  firstName: joi.string().min(1).required(),
  lastName: joi.string().min(1).required(),
  city: joi.string().min(1),
  age: joi.number().min(1).max(100).required(),
})

app.get('/users', (req, res) => {
  fs.readFile(pathJSON, "utf-8", (data) => {
    if (error) return res.status(404).send({ users: null});
    let users = JSON.parse(data, "utf-8");
    res.send({ users });
  })
})

app.get('/users/:id', (req, res) => {
  fs.readFile(pathJSON, "utf-8", (data) => {
    if (error) return res.status(404).send({ users: null});
    let users = JSON.parse(data, "utf-8");
    const userId = +req.params.id;
    const user = users.find(user => userId === user.id);
    if (user) {
      res.send({ user })
    } else {
      res.status(404);
      res.send({ user: null })
    }
  })
})

app.post('/users', (req, res) => {
  let users = [];
  if (fs.existsSync(pathJSON)) {
    let readFile = fs.readFile(pathJSON, "utf-8")
      users = JSON.parse(readFile);
      uniqueID += 1;
      users.push({
        id: uniqueID,
        ...req.body
      });
      fs.writeFile(pathJSON, JSON.stringify(users, null, 2));
      res.send({ id: uniqueID });
  } else {
    users.push({
      id: uniqueID,
      ...req.body
    });
    fs.writeFile(pathJSON, JSON.stringify(users, null, 2))
    res.send({ id: uniqueID });
  }
})

app.put('/users/:id', (req, res) => {
  fs.readFile(pathJSON, "utf-8", (data) => {
    if (error) return res.status(404).send({ users: null});
    let users = JSON.parse(data, "utf-8");
    const userId = +req.params.id;
    const user = users.find(user => userId === user.id);
    const result = userScheme.validate(req.body);
    if (result.error) {
      return res.status(404).send({ error: result.error.details })
    }
    if (user) {
      const { firstName, lastName, city, age } = req.body
      user.firstName = firstName;
      user.lastName = lastName;
      user.city = city;
      user.age = age;
      fs.writeFile(pathJSON, JSON.stringify(users, null, 2), (error) => {
        if (error) return res.status(404).send({ users: null});
      });
      res.send({ user })
    } else {
      res.status(404);
      res.send({ user: null })
    }
  });
})

app.delete('/users/:id', (req, res) => {
  fs.readFile(pathJSON, "utf-8", (data) => {
    if (error) return res.status(404).send({ users: null});
    let users = JSON.parse(data, "utf-8");
    const userId = +req.params.id;
    const user = users.find(user => userId === user.id);

    if (user) {
      const userIndex = users.indexOf(user);
      users.splice(userIndex, 1);
      fs.writeFile(pathJSON, JSON.stringify(users, null, 2), (error) => {
        if (error) return res.status(404).send({ users: null});
      });
      res.send({ user })
    } else {
      res.status(404);
      res.send({ user: null })
    }
  });
})

app.listen(3000);

