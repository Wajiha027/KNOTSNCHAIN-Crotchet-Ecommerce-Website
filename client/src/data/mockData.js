export const products = [
    {
      id: "1",
      title: "Rose Bouquet Keychain",
      price: 350,
      description: "A beautiful keychain featuring a miniature bouquet of crocheted roses in various colors. Each rose is handcrafted with love and attention to detail.",
      category: "keychains",
      imageUrl: "https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?q=80&w=600&auto=format&fit=crop",
      featured: true,
      colors: ["pink", "red", "white"]
    },
    {
      id: "2",
      title: "Sunflower Hair Clip",
      price: 250,
      description: "Add a touch of sunshine to your hair with this cheerful crocheted sunflower hair clip. Perfect for spring and summer outfits.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=600&auto=format&fit=crop",
      featured: true,
      colors: ["yellow", "brown"]
    },
    {
      id: "3",
      title: "Daisy Chain Bracelet",
      price: 400,
      description: "A delicate bracelet featuring interconnected crocheted daisies. Adjustable size fits most wrists.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1464699908008-1d35ebb775ba?q=80&w=600&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop",
      featured: true,
      colors: ["green", "pink", "terracotta"]
    },
    {
      id: "5",
      title: "Lavender Sachet",
      price: 275,
      description: "A lovely crocheted lavender sachet that can be hung in your wardrobe or placed in drawers to keep clothes smelling fresh.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=600&auto=format&fit=crop",
      newArrival: true,
      colors: ["purple", "lavender"]
    },
    {
      id: "6",
      title: "Cherry Blossom Earrings",
      price: 425,
      description: "Delicate crocheted cherry blossom earrings with tiny pearl beads at the center. Light and comfortable to wear all day.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=600&auto=format&fit=crop",
      featured: true,
      colors: ["pink", "white"]
    },
    {
      id: "7",
      title: "Rainbow Heart Keychain",
      price: 275,
      description: "A colorful, heart-shaped keychain featuring rainbow stripes. Makes finding your keys a joy!",
      category: "keychains",
      imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
      newArrival: true,
      colors: ["rainbow"]
    },
    {
      id: "8",
      title: "Hibiscus Flower Brooch",
      price: 450,
      description: "A stunning crocheted hibiscus flower brooch that adds a tropical touch to any outfit. Available in several vibrant colors.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1557090495-fc9312e77b28?q=80&w=600&auto=format&fit=crop",
      colors: ["red", "pink", "orange"]
    },
    {
      id: "9",
      title: "Mini Animal Keychain Set",
      price: 550,
      description: "Set of three adorable mini animal keychains - includes a bunny, bear, and owl. Perfect gift for animal lovers.",
      category: "keychains",
      imageUrl: "https://images.unsplash.com/photo-1573504816327-7b3e76a7e0a2?q=80&w=600&auto=format&fit=crop",
      newArrival: true,
      colors: ["multicolor"]
    },
    {
      id: "10",
      title: "Peony Hair Comb",
      price: 375,
      description: "An elegant crocheted peony flower mounted on a hair comb. Perfect for weddings, proms, or any special occasion.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1509087859087-a384654ece4d?q=80&w=600&auto=format&fit=crop",
      featured: false,
      colors: ["pink", "white", "burgundy"]
    },
    {
      id: "11",
      title: "Letter Initial Keychain",
      price: 325,
      description: "Personalized initial keychain, hand-crocheted with your choice of letter and color combination.",
      category: "keychains",
      imageUrl: "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=600&auto=format&fit=crop",
      colors: ["pink", "blue", "green", "yellow"]
    },
    {
      id: "12",
      title: "Tulip Bouquet",
      price: 600,
      description: "A never-wilting bouquet of five crocheted tulips in your choice of colors. Makes a perfect gift that lasts forever.",
      category: "flowers",
      imageUrl: "https://images.unsplash.com/photo-1520977536980-7fde6d369087?q=80&w=600&auto=format&fit=crop",
      featured: false,
      newArrival: true,
      colors: ["pink", "red", "white", "yellow", "purple"]
    }
  ];
  
  export const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=1200&auto=format&fit=crop",
      heading: "Handcrafted Crochet Creations",
      subheading: "Unique keychains and flowers made with love",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop",
      heading: "Spring Collection",
      subheading: "Beautiful floral designs for the new season",
      buttonText: "View Collection",
      buttonLink: "/products?category=flowers"
    },
    {
      image: "https://images.unsplash.com/photo-1602449161975-efde96e80537?q=80&w=1200&auto=format&fit=crop",
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
  