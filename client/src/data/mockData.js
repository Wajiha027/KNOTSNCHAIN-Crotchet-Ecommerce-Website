export const products = [
    {
      id: "1",
      title: "Rose Keychain",
      price: 350,
      description: "A beautiful keychain featuring a miniature bouquet of crocheted roses in various colors. Each rose is handcrafted with love and attention to detail.",
      category: "keychains",
      imageUrl: "https://i.pinimg.com/736x/52/63/c4/5263c4eb982e36d9629e015182b0d8be.jpg",
      featured: true,
      colors: ["pink", "red", "white"]
    },
    {
      id: "2",
      title: "Sunflower",
      price: 250,
      description: "Brighten your space with this handmade sunflower crochet — a cheerful bloom crafted with care and vibrant yarn. Perfect for home decor, gifts, or adding a touch of sunshine anywhere.",
      category: "flowers",
      imageUrl: "https://celebrationvibes.com/wp-content/uploads/2024/09/Sunflower-crochet.jpg",
      featured: true,
      colors: ["yellow", "brown"]
    },
    {
      id: "3",
      title: "Daisy Bouquet",
      price: 400,
      description: "Handcrafted crochet daisy bouquet with soft, elegant blooms—perfect for gifts or decor.",
      category: "flowers",
      imageUrl: "https://www.blingcute.com/cdn/shop/products/aliexpress_0116_141946_04_1024x1024.jpg?v=1642318856",
      featured: false,
      newArrival: true,
      colors: ["white", "yellow"]
    },
    {
      id: "4",
      title: "Cactus Keychain",
      price: 300,
      description: "A cute and quirky keychain featuring a crocheted mini cactus in a tiny pot. Never needs watering!",
      category: "keychains",
      imageUrl: "https://i.pinimg.com/736x/2e/00/7d/2e007dc54f734195681d8f05933f075c.jpg",
      featured: true,
      colors: ["green", "pink", "terracotta"]
    },
    {
      id: "5",
      title: "Lavender",
      price: 275,
      description: "Beautifully crafted crochet lavenders that add a touch of calm and charm to any space.",
      category: "flowers",
      imageUrl: "https://www.cnncx.com/image/cache/catalog/crochet%20flower%20bouquet/CX-28/Crochet%20Lavender%20(5)-1000x1000.jpg",
      newArrival: true,
      colors: ["purple", "lavender"]
    },
    {
      id: "6",
      title: "Cherry Blossoms",
      price: 425,
      description: "Delicate crocheted cherry blossom flowers with tiny pearl beads at the center.",
      category: "flowers",
      imageUrl: "https://images4-a.ravelrycache.com/uploads/LilysLyric/952013003/sakura_medium2.jpg",
      featured: true,
      colors: ["pink", "white"]
    },
    {
      id: "7",
      title: "Heart Keychain",
      price: 275,
      description: "A heart-shaped keychain featuring different colors. Makes finding your keys a joy!",
      category: "keychains",
      imageUrl: "https://www.dreameecrochet.com/wp-content/uploads/2025/01/Free-Crochet-Heart-Keychain-Pattern-Easy-Amigurumi-Heart-3.jpg",
      newArrival: true,
      colors: ["red", "pink"]
    },
    {
      id: "8",
      title: "Hibiscus Flower",
      price: 450,
      description: "Stunning crocheted hibiscus flowers that adds a tropical touch to your day. Available in several vibrant colors.",
      category: "flowers",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBz0vAZcuSzqm3sXDxmJdBu7utn5nif30k8tEuba2uVtaAucGUTMSrDcw7gLEploBGSplbuOoVUFPn-o9vU35UmAz9QpCR8ef6jAaBMnukYCxnGRtL11wvNUPBbBEr1F60gZvlkxu-Vj-Q/s1600/ibisco1.JPG",
      colors: ["red", "pink", "orange"]
    },
    {
      id: "9",
      title: "Mini Animal Keychain Set",
      price: 550,
      description: "Adorable mini animal keychains - includes a bear, tiger, cow, fox, snake, chick, sheep, mouse and a squrrel. Perfect gift for animal lovers.",
      category: "keychains",
      imageUrl: "https://i.etsystatic.com/13810281/r/il/d179b1/5948356979/il_fullxfull.5948356979_sniu.jpg",
      newArrival: true,
      colors: ["bear", "tiger", "cow", "fox", "snake", "chick", "sheep", "mouse", "squrrel"]
    },
    {
      id: "10",
      title: "Peony Flower Bouquet",
      price: 375,
      description: "An elegant crocheted peony flower bouquet. Perfect for weddings, proms, or any special occasion.",
      category: "flowers",
      imageUrl: "https://lilyrosy.com/cdn/shop/files/001_2024-04-29_4CA407F4.jpg?crop=center&height=2048&v=1719985170&width=2048",
      featured: false,
      colors: ["pink", "white", "burgundy"]
    },
    {
      id: "11",
      title: "Letter Initial Keychain",
      price: 325,
      description: "Personalized initial keychain, hand-crocheted with your choice of letter and color combination.",
      category: "keychains",
      imageUrl: "https://i.etsystatic.com/39327803/r/il/f11ede/5829445387/il_fullxfull.5829445387_7rfe.jpg",
      colors: ["pink", "blue", "green", "yellow"]
    },
    {
      id: "12",
      title: "Tulip Bouquet",
      price: 600,
      description: "A never-wilting bouquet of five crocheted tulips in your choice of colors. Makes a perfect gift that lasts forever.",
      category: "flowers",
      imageUrl: "https://m.media-amazon.com/images/I/91obpYozaVL.jpg",
      featured: false,
      newArrival: true,
      colors: ["pink", "red", "white", "yellow", "purple"]
    }
  ];
  
  export const carouselSlides = [
    {
      image: "https://img.freepik.com/free-photo/wool-elements-space-right_23-2147691749.jpg?semt=ais_hybrid&w=740",
      heading: "Handcrafted Crochet Creations",
      subheading: "Unique keychains and flowers made with love",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      image: "https://www.hicrochet.com/cdn/shop/articles/IMG_4521_medium2.jpg?v=1735119237",
      heading: "Spring Collection",
      subheading: "Beautiful floral designs for the new season",
      buttonText: "View Collection",
      buttonLink: "/products?category=flowers"
    },
    {
      image: "https://bellacococrochet.com/cdn/shop/files/IMG_4591.jpg?v=1712838315&width=2048",
      heading: "Custom Orders",
      subheading: "Let us create something special just for you",
      buttonText: "Order Custom",
      buttonLink: "/custom-orders"
    }
  ];
  
  export const featuredProducts = products.filter(product => product.featured);
  export const newArrivals = products.filter(product => product.newArrival);
  
  export const getProductById = id => {
    return products.find(product => product.id === id);
  };
  
  export const getProductsByCategory = category => {
    if (category === "all") return products;
    return products.filter(product => product.category === category);
  };
  