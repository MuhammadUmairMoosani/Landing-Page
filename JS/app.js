/* Creating the Navigation bar */
function createNav() {
  const navItems = ["About", "Features", "Pricing"];

  const ul = document.querySelector("ul");

  for (let navItem of navItems) {
    let li = document.createElement("li");
    if (navItem == "About") {
      li.innerHTML += `<a href="#top"><p>${navItem}</p></a>`;
      li.id = navItem;
      li.className = "active box";
      ul.appendChild(li);
    } else {
      li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><p>${navItem}</p></a>`;
      li.id = navItem;
      li.className = "navbar-item box";
      ul.appendChild(li);
    }
  }
}

createNav();

/* Creating the Content Sections */
function createSec() {
  const sectionNames = ["About", "App", "Features", "Pricing"];

  const content = document.getElementById("content");

  for (let sectionName of sectionNames) {
    section = document.createElement("section");
    section.className = "content box";
    section.id = `content-${sectionName.toLowerCase()}`;
    content.appendChild(section);
  }
}

createSec();

/* Creating the App Section */
function createApp() {
  const app = document.getElementById("content-app");
  const imgCard = document.createElement("div");
  app.appendChild(imgCard);
  imgCard.className = "phoneCard box";
  imgCard.id = "phoneCard";
}

createApp();

/* Creating the About Section */
function createAbout() {
  const aboutText = document.createElement("div");
  const about = document.getElementById("content-about");
  aboutText.className = "aboutText box";
  aboutText.innerHTML =
    "<p>Everything you need to know when looking at different types of homes for sale all in one place.</p>";
  about.appendChild(aboutText);
}

createAbout();

/* Creating the Features Section */
function createFeat() {
  const featureCards = [
    {
      feature: "feature1",
      description:
        "With over 1 million+ homes for sale available on the website, My house can match you with a house you will want to call home.",
    },
    {
      feature: "feature2",
      description:
        "With 35+ filters and custom keyword search, My House can help you easily find a home or apartment for rent that you'll love.",
    },
    {
      feature: "feature3",
      description:
        "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
    },
  ];

  const features = document.getElementById("content-features");

  const featHeading = document.createElement("p");
  featHeading.textContent = "Features";
  featHeading.className = "featTitle";
  features.appendChild(featHeading);

  const featCards = document.createElement("div");
  featCards.className = "featCards";
  features.appendChild(featCards);

  for (let featureCard of featureCards) {
    feature = document.createElement("div");
    feature.className = "card box";
    feature.innerHTML = `<img src="images/${featureCard.feature}.svg" alt="picture of ${featureCard.feature}"><p>${featureCard.description}</p>`;
    featCards.appendChild(feature);
  }
}

createFeat();

/* Creating the Pricing Section */
function createPricing() {
  const pricingCards = [
    {
      pricing: "free",
      description: "Free My house offers excellent options.",
      price: "$0",
    },
    {
      pricing: "deluxe",
      description:
        "Exclusive offers for those that enjoy the finer things in life.",
      price: "$200",
    },
  ];

  const pricing = document.getElementById("content-pricing");

  const priceHeading = document.createElement("p");
  priceHeading.textContent = "Membership";
  priceHeading.className = "priceTitle";
  pricing.appendChild(priceHeading);

  const priceCards = document.createElement("div");
  priceCards.className = "priceCards";
  pricing.appendChild(priceCards);

  for (let pricingCard of pricingCards) {
    price = document.createElement("div");
    price.className = "pricingCard box";
    price.innerHTML = `<img src="images/${pricingCard.pricing}.png" alt="${pricingCard.pricing} Membership"><p class="pricingName">${pricingCard.pricing}</p><p class="membership">${pricingCard.description}</p><p class="prices">${pricingCard.price}</p>`;
    priceCards.appendChild(price);
  }
}

createPricing();
