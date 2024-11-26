const hambutton = document.querySelector("#home");
const navigation = document.querySelector("nav");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
});

// Array of temples
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-06-07",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-05-02",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Buenos Aires, Argentina",
    location: "Ciudad Evita, Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 17683,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/800x500/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
  },
  {
    templeName: "Córdoba, Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/2018/800x500/Cordoba-Argentina-Temple01.jpg"
  },
  {
    templeName: "Salta, Argentina",
    location: "Salta, Argentina",
    dedicated: "2023, June, 16",
    area: 27111,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/8997d67ecc3011eebfd1eeeeac1e4e2f81a7e639/full/320%2C/0/default"
  },
  {
    templeName: "Mendoza, Argentina",
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 22",
    area: 21000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-10403.jpg"
  }
];


// DOM references
const alltemples = document.querySelector("#alltemple");
const oldtemples = document.querySelector("#old");
const newtemples = document.querySelector("#new");
const largetemples = document.querySelector("#large");
const smalltemples = document.querySelector("#small");
const select = document.querySelector("#selection");
const templeContainer = document.querySelector(".temples");

function createTempleCard(filteredTemples) {
  // Clear existing cards
  templeContainer.innerHTML = "";

  // Loop through the filtered temples and create cards
  filteredTemples.forEach(temple => {
    // Create elements
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    // Populate content
    name.textContent = temple.templeName;
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    // Append elements to the card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    card.style.backgroundColor = "#1a3144";
    card.style.borderRadius = "0.5em";
    card.style.color = "azure"
    img.style.borderRadius = "1.5em"
    card.style.textAlign = "center"

    // Append card to the container
    templeContainer.appendChild(card);
  });
}

// Event listeners for filtering
alltemples.addEventListener("click", () => {
  createTempleCard(temples);
  select.innerText = "Home";
});

oldtemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  createTempleCard(filteredTemples);
  select.innerText = "Old Temples";
});

newtemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  createTempleCard(filteredTemples);
  select.innerText = "New Temples";
});

largetemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(filteredTemples);
  select.innerText = "Larger Temples";
});

smalltemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(filteredTemples);
  select.innerText = "Smaller Temples";
});

// Initialize page with all temples
createTempleCard(temples);
