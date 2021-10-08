const express = require("express");
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "https://personalcrm1.herokuapp.com",
  methods: ["GET", "POST"],
  optionsSuccessStatus: 200,
};

/* deal with pre-flight request */
app.options("*", cors(corsOptions));

/* sign in */
app.post("/auth/login", cors(corsOptions), (req, res) => {
  console.log(req.body);
  res.send(logInData);
});

/* sign up*/
app.post("/auth/register", cors(corsOptions), (req, res) => {
  console.log(req.body);
  res.send(registerData);
});

/* get connection list */
app.get("/api/connections", cors(corsOptions), (req, res) => {
  console.log(req.query);
  res.send(connectionList);
});

/* get task list */
app.get("/api/tasks", cors(corsOptions), (req, res) => {
  console.log(req.query);
  res.send(taskList);
});

/* get profile data */
app.get("/api/users/:id", cors(corsOptions), (req, res) => {
  console.log(req.params);
  res.send(user123456);
});

/* litsen on port process.env.PORT || 5000 */
app.listen(process.env.PORT || 5000);

/* data */

/* login response data */
const logInData = {
  token: "5d4f5sd4f65s4da6f546sd54f65sda4f65sd4af54asd",
  userId: "123456",
};

/* register response data */
const registerData = {
  token: "5d4f5sd4f65s4da6f546sd54f65sda4f65sd4af54asd",
};

/* all the connections of user 123456 */

const connectionList = [
  {
    id: "123",
    name: "Jack",
    company: "Google",
    location: "Melbounre",
    photoSource: "/imgs/1.jpg",
    title: "Teacher",
    vip: true,
    task: "7",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "321",
    name: "Lee",
    company: "ABCDEFG",
    location: "Melbounre",
    photoSource: "/imgs/2.jpg",
    title: "Software Engineer",
    vip: false,
    task: "3",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "456",
    name: "Andrew",
    company: "Victoria Government",
    location: "sydney",
    photoSource: "/imgs/1.jpg",
    title: "sales",
    vip: false,
    task: "9",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "654",
    name: "Dan",
    company: "Facebook",
    location: "Sydney",
    photoSource: "/imgs/3.jpg",
    title: "retired",
    vip: true,
    task: "3",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "789",
    name: "John",
    company: "Amazon",
    location: "Perth",
    photoSource: "/imgs/3.jpg",
    title: "cook",
    vip: true,
    task: "12",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "987",
    name: "Phil",
    company: "Google",
    location: "MElbourne",
    photoSource: "/imgs/2.jpg",
    title: "driver",
    vip: false,
    task: "4",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "123",
    name: "Jack",
    company: "Google",
    location: "Melbounre",
    photoSource: "/imgs/1.jpg",
    title: "Teacher",
    task: "7",
    vip: true,
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "321",
    name: "Lee",
    company: "ABCDEFG",
    location: "Melbounre",
    photoSource: "/imgs/2.jpg",
    title: "Software Engineer",
    vip: false,
    task: "3",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "456",
    name: "Andrew",
    company: "Victoria Government",
    location: "sydney",
    photoSource: "/imgs/1.jpg",
    title: "sales",
    vip: false,
    task: "9",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "654",
    name: "Dan",
    company: "Facebook",
    location: "Sydney",
    photoSource: "/imgs/3.jpg",
    title: "retired",
    vip: true,
    task: "3",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "789",
    name: "John",
    company: "Amazon",
    location: "Perth",
    photoSource: "/imgs/3.jpg",
    title: "cook",
    vip: true,
    task: "12",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "987",
    name: "Phil",
    company: "Google",
    location: "MElbourne",
    photoSource: "/imgs/2.jpg",
    title: "driver",
    vip: false,
    task: "4",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "9871",
    name: "sunny",
    company: "Google",
    location: "Perth",
    photoSource: "/imgs/1.jpg",
    title: "Financial accountant",
    vip: false,
    task: "3",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "943871",
    name: "Mia",
    company: "Facebook",
    location: "Perth",
    photoSource: "/imgs/3.jpg",
    title: "accountant",
    vip: false,
    task: "13",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
  {
    id: "941233871",
    name: "Deliraba",
    company: "Apple",
    location: "Perth",
    photoSource: "/imgs/1.jpg",
    title: "actress",
    vip: true,
    task: "3",
    email: "123@hotmail.com",
    firstName: "skdjfh",
    lastName: "skdjfhl",
    phone: "123456789",
    birthday: "1990-05-25",
    description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
  },
];

/* all the tasks of user 123456 */
const taskList = [
  {
    taskName: "2nd task",
    id: "2",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "4",
        name: "William",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "high",
    start: "2021-08-12",
    due: "2021-09-29",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "3rd task",
    id: "3",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/3.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "low",
    start: "2021-09-16",
    due: "2021-10-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "1st task",
    id: "1",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/1.jpg",
      },
    ],
    priority: "medium",
    start: "2021-09-12",
    due: "2021-09-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "12nd task",
    id: "156434562",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "4",
        name: "William",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "high",
    start: "2021-08-12",
    due: "2021-09-29",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "13rd task",
    id: "13456343564",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/3.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "low",
    start: "2021-09-16",
    due: "2021-10-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "11st task",
    id: "1456345675671",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/1.jpg",
      },
    ],
    priority: "low",
    start: "2021-09-12",
    due: "2021-09-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "2nd task",
    id: "26462856",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "4",
        name: "William",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "high",
    start: "2021-08-12",
    due: "2021-09-29",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "3rd task",
    id: "334345",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/3.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "low",
    start: "2021-09-16",
    due: "2021-10-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "1st task",
    id: "756751",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/1.jpg",
      },
    ],
    priority: "medium",
    start: "2021-09-12",
    due: "2021-09-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "12nd task",
    id: "1123132",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/2.jpg",
      },
      {
        id: "4",
        name: "William",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "high",
    start: "2021-08-12",
    due: "2021-09-29",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "13rd task",
    id: "11233",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/3.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/3.jpg",
      },
    ],
    priority: "low",
    start: "2021-09-16",
    due: "2021-10-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
  {
    taskName: "11st task",
    id: "1024",
    memberPhoto: [
      {
        id: "1",
        name: "Jack",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "2",
        name: "Rose",
        photoSource: "/imgs/1.jpg",
      },
      {
        id: "3",
        name: "William",
        photoSource: "/imgs/1.jpg",
      },
    ],
    priority: "low",
    start: "2021-09-12",
    due: "2021-09-25",
    description:
      "skdjfhlksajdhflkjsahdf;jhas;djhk;jsahkdf;kjsddskjaghkdsljahfkjdsafkjlhsadklfhalskjdhfkljashdfkjhaslkjdfa;kfj;dsajkf;lkjas;dljk;lsadjf;lkasjhlkfjhlskadjhflkjsdhfkjhsadfjk",
    status: "progress",
  },
];

/* user profile data */
const user123456 = {
  id: "21235460321",
  name: "Lee",
  company: "ABCDEFG",
  location: "Melbounre",
  photoSource: "/imgs/2.jpg",
  title: "Software Engineer",
  vip: false,
  task: "3",
  email: "123@hotmail.com",
  firstName: "skdjfh",
  lastName: "skdjfhl",
  phone: "123456789",
  birthday: "1990-05-25",
  description: "ksajldgfjhsaglfjhsadkljfhlkjsahgkljdasfgkjlafga",
};

/* general success reponse */
const success = {
  status: "success",
};
