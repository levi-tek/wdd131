const hambutton = document.querySelector("#home");
const navigation = document. querySelector("nav");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open")
})

const temples = [
     {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
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

createTempleCard(temples);
const alltemples = document.querySelector("#alltemple");
const oldtemples = document.querySelector("#old");
const newtemples = document.querySelector("#new");
const largetemples = document.querySelector("#large");
const smalltemples = document.querySelector("#small");
const select = document.querySelector("#selection");



alltemples.addEventListener("click", () => {
	createTempleCard(temples);
	select.innerText = "Home";
});
oldtemples.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)
	createTempleCard(temples);
	select.innerText = "Old Temples";
});
newtemples.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
	createTempleCard(temples);
	select.innerText = "New Temples";
});
largetemples.addEventListener("click", () => {
const filteredTemples = temples.filter(temple => temple.area > 90000)
createTempleCard(temples);
select.innerText = "Larger Temples";
});
smalltemples.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => temple.area < 10000)
	createTempleCard(temples);
	select.innerText = "Smaller Temples";
});






function createTempleCard(filteredtemples){
    filteredtemples.forEach(temple =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicaton = document.createElement("p");
        let area = document.createElement("p")
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = "<p><strong>Location: </strong>${temple.location}</p>";
        dedicaton.innerHTML = '<span class = "label">Dedicated:</span> ${temple.dedicated}';
        area.innerHTML = '<span class = "Label">Size:</span> ${temple.area} sq ft';
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", '${temple.templeName} Temple');
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicaton);
        card.appendChild(area);
        card.appendChild(img)

        document.querySelector(".temples").appendChild(card);
    });
}

