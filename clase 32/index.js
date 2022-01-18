const http = require("http");
const date = require("./date");
const url = require("url");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "nodeoitbootcamp@gmail.com",
//     pass: "asd123$*26",
//   },
// });

const user = {
  first_name: "John",
  last_name: "Smith",
  age: "38",
  department: "Software",
};

const students = [
  { name: "Etudiante 1", edad: 18, score: 15 },
  { name: "Etudiante 2", edad: 12, score: 15 },
  { name: "Etudiante 3", edad: 13, score: 15 },
  { name: "Etudiante 4", edad: 23, score: 15 },
  { name: "Etudiante 5", edad: 34, score: 15 },
  { name: "Etudiante 6", edad: 5, score: 15 },
  { name: "Etudiante 7", edad: 16, score: 15 },
  { name: "Etudiante 8", edad: 76, score: 15 },
  { name: "Etudiante 9", edad: 65, score: 15 },
];

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    let planetas = "";
    fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then((res) => res.json())
      .then((response) => {
        response.forEach((planeta) => (planetas += " " + planeta.name));
        res.end(planetas);
      });

    // const { first_name, age, department } = user;
    // res.end(`${first_name} ${age} ${department}`);
    // res.write(`<h1>La fecha y hora actuales son:  ${date.myDateTime()}</h1>`);
    // const q = url.parse(req.url, true).query;
    // const txt = q.year + " " + q.month;
    // const correo = {
    //   from: "nodeoitbootcamp@gmail.com",
    //   to: q.email,
    //   subject: `Hola ${q.nombre}`,
    //   text: "Esto es una prueba de correo",
    // };

    // transporter.sendMail(correo, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email se envio: " + info.response);
    //   }
    // });
  })
  .listen(8080);
