const user = {
  nombre: "Yhonniel",
  apellido: "Suarez",
  edad: "26",
};

const { nombre, apellido, edad } = user;

console.log(nombre);

const myArray = ["Marvelys", "Bridneys", "Lesfer"];
const myArray2 = ["Gariannys", "Guillermo", "Jack"];

const [primero, segundo, tercero] = myArray;

console.log(primero);

const newArray = [...myArray, "Carlos", ...myArray2];

const userWithHoobies = { ...user, hobbies: "Escuchar musica" };

// Application Program Interface
/* GET */
/* POST */

/* https://125.56.75.85:8080/quotes */
fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    response.forEach((simpson) => {
      const { quote, character, image } = simpson;
      const img = document.createElement("img");
      img.src = image;
      const paragraph = document.createElement("p");
      paragraph.innerText = quote;
      const title = document.createElement("h3");
      title.innerText = character;
      if (character.toLowerCase().includes("simpson")) {
        title.classList.add("homero");
      }
      document.body.appendChild(title);
      document.body.appendChild(img);
      document.body.appendChild(paragraph);
    });
  })
  .catch((error) => {
    console.log(error);
  });

/* [
  {
    quote: "I believe the children are the future... Unless we stop them now!",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
  },
]; */
