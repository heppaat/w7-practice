const data = [
  {
    name: "Peter",
    age: 25,
    pets: ["Mici", "Cici", "Sanyko"],
    mostRecentPurchase: { price: 15000, color: "black" },
  },
  {
    name: "Emese",
    age: 31,
    pets: ["Lali", "Mali", "Paki"],
    mostRecentPurchase: { price: 5000, color: "red" },
  },
  {
    name: "Virag",
    age: 33,
    pets: ["Jimmy", "Billy", "Timmy"],
    mostRecentPurchase: { price: 13000, color: "orange" },
  },
  {
    name: "Gaben",
    age: 45,
    pets: ["Ferko", "Perko", "Terko"],
    mostRecentPurchase: { price: 2000, color: "beige" },
  },
  {
    name: "Levente",
    age: 19,
    pets: ["Jonas", "Simi", "Maca"],
    mostRecentPurchase: { price: 2500, color: "green" },
  },
  {
    name: "Panni",
    age: 34,
    pets: ["Jonny", "Hambi", "Mia", "Moto"],
    mostRecentPurchase: { price: 384000, color: "black" },
  },
  {
    name: "Peter",
    age: 25,
    pets: ["Mici", "Cici", "Sanyko"],
    mostRecentPurchase: { price: 44000, color: "brown" },
  },
  {
    name: "Gabor",
    age: 29,
    pets: ["Bifi", "Kari", "Brutus"],
    mostRecentPurchase: { price: 3500, color: "turkiz" },
  },
  {
    name: "Eva",
    age: 44,
    pets: ["Bundi", "Cuki", "Maci", "Lola"],
    mostRecentPurchase: { price: 220200, color: "pink" },
  },
  {
    name: "Erno",
    age: 25,
    pets: ["Bil", "Kuli", "Taco", "Barko"],
    mostRecentPurchase: { price: 150000, color: "olive" },
  },
];

/* for (let i = 0; i < data.length; i++) {
  if (data[i].age >= 40 && data[i].mostRecentPurchase.price >= 2000) {
    console.log(data[i]);
  }
} */

/* data.forEach((element, 40) => {
  if (element.age > 40) {
    console.log(element);
  }
}); */

function getOldPeople(arrayOfPeople) {
  let result = [];
  arrayOfPeople.map((person) => {
    if (person.age > 44) {
      result.push(person);
    }
  });
  return result;
}

const oldPeople = getOldPeople(data);
//console.log(oldPeople);

function getRichPeople(arrayOfPeople, minimumValue) {
  //let result = [];
  let result = arrayOfPeople.filter(
    (person) => person.mostRecentPurchase.price > minimumValue
  );
  return result;
}

const richPeople = getRichPeople(data, 200000);
//console.log(richPeople);

/* function goodRecommendationFor(arrayOfPeople, newOffer) {
  for (let i = 0; i < arrayOfPeople.length; i++) {
    //console.log(arrayOfPeople[i].mostRecentPurchase);
    if (arrayOfPeople[i].mostRecentPurchase.color === newOffer.color) {
      if (arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
        console.log(arrayOfPeople[i]);
      }
    }
  }
} */

/* function goodRecommendationFor(arrayOfPeople, newOffer) {
  let result = [];
  for (let i = 0; i < arrayOfPeople.length; i++) {
    //console.log(arrayOfPeople[i].mostRecentPurchase);
    if (
      arrayOfPeople[i].mostRecentPurchase.color === newOffer.color &&
      arrayOfPeople[i].mostRecentPurchase.price > newOffer.price
    ) {
      result.push(arrayOfPeople[i].name);
    }
  }
  return result;
} */

/* function goodRecommendationFor(arrayOfPeople, newOffer) {
  let result = [];
  result = arrayOfPeople.filter(
    (person) =>
      person.mostRecentPurchase.color === newOffer.color &&
      person.mostRecentPurchase.price > newOffer.price
  );

  return result;
} */

function goodRecommendationFor(arrayOfPeople, newOffer) {
  let result = [];
  arrayOfPeople.filter((person) => {
    if (
      person.mostRecentPurchase.color === newOffer.color &&
      person.mostRecentPurchase.price > newOffer.price
    ) {
      result.push(person.name);
    }
  });

  return result;
}

const newOffer1 = { color: "black", price: 14000 };
const recommendation = goodRecommendationFor(data, newOffer1);
console.log(recommendation);
