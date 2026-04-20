export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  sizes: string[];
  description: string;
  details: string[];
  images: string[];
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  collection: string;
}

export const mockProducts: Product[] = [
  {
    id: "p_001",
    slug: "distressed-heavy-knit-sweater",
    name: "DISTRESSED HEAVY KNIT",
    subtitle: "Oversized Wool Blend",
    price: 850,
    category: "KNITWEAR",
    sizes: ["1", "2", "3", "4"],
    description: "Heavyweight wool blend sweater featuring custom distressing and elongated sleeves. Dropped shoulders for a relaxed, anti-fit silhouette.",
    details: ["70% Wool, 30% Cotton", "Hand-distressed hems", "Made in Italy", "Dry clean only"],
    images: ["/images/product1.png", "/images/product2.png"],
    stockStatus: "in-stock",
    collection: "SPRING / SUMMER 26"
  },
  {
    id: "p_002",
    slug: "structured-canvas-jacket",
    name: "STRUCTURED CANVAS JACKET",
    subtitle: "Cropped Silhouette",
    price: 980,
    category: "OUTERWEAR",
    sizes: ["2", "3", "4"],
    description: "A rigid canvas jacket dyed in pure black. Cropped body with elongated modular sleeves. Industrial metal front zip.",
    details: ["100% Heavyweight Cotton Canvas", "Industrial Raccagni zippers", "Fully lined", "Boxy fit"],
    images: ["/images/product3.png"],
    stockStatus: "low-stock",
    collection: "SPRING / SUMMER 26"
  },
  {
    id: "p_003",
    slug: "raw-edge-graphic-tee",
    name: "RAW EDGE GRAPHIC TEE",
    subtitle: "Vintage Washed Cotton",
    price: 450,
    category: "KNITWEAR",
    sizes: ["1", "2", "3", "4"],
    description: "Classic oversized tee crafted from heavily washed cotton. Features raw edges at the sleeves and hem with a faded archive print.",
    details: ["100% Cotton", "Pigment washed", "Raw hems", "Printed in studio"],
    images: ["/images/product4.png"],
    stockStatus: "in-stock",
    collection: "CORE"
  },
  {
    id: "p_004",
    slug: "asymmetric-wrap-coat",
    name: "ASYMMETRIC WRAP COAT",
    subtitle: "Tailored Overcoat",
    price: 1000,
    category: "OUTERWEAR",
    sizes: ["1", "2"],
    description: "floor-length tailored overcoat with an asymmetric button closure. Constructed from premium Italian virgin wool.",
    details: ["100% Virgin Wool", "Asymmetric placket", "Padded shoulders", "Made in Italy"],
    images: ["/images/product5.png"],
    stockStatus: "out-of-stock",
    collection: "AUTUMN / WINTER 25"
  },
  {
    id: "p_005",
    slug: "flared-denim-trousers",
    name: "FLARED DENIM TROUSERS",
    subtitle: "Washed Black",
    price: 720,
    category: "DENIM",
    sizes: ["28", "30", "32", "34"],
    description: "High-waisted denim trousers with a pronounced flare at the hem. Treated with a custom enzyme wash for a faded, broken-in feel.",
    details: ["100% Cotton Denim", "Custom hardware", "Extended inseam", "Hand finished"],
    images: ["/images/product6.jpeg"],
    stockStatus: "in-stock",
    collection: "CORE"
  },
  {
    id: "p_006",
    slug: "modular-cargo-pants",
    name: "MODULAR CARGO PANTS",
    subtitle: "Technical Nylon",
    price: 880,
    category: "TROUSERS",
    sizes: ["S", "M", "L"],
    description: "Utilitarian cargo pants featuring detachable lower legs and multiple geometric pockets. Cut from lightweight, water-repellent nylon.",
    details: ["100% Nylon", "Detachable segments", "Water-repellent", "Adjustable waist straps"],
    images: ["/images/product7.jpeg"],
    stockStatus: "low-stock",
    collection: "SPRING / SUMMER 26"
  },
  {
    id: "p_007",
    slug: "leather-harness-bag",
    name: "LEATHER HARNESS BAG",
    subtitle: "Calfskin Accessory",
    price: 550,
    category: "ACCESSORIES",
    sizes: ["ONE SIZE"],
    description: "A compact body bag designed to be worn cross-body or as a chest harness. Crafted from smooth Italian calfskin with matte black hardware.",
    details: ["100% Calfskin Leather", "Adjustable straps", "Matte hardware", "Made in Italy"],
    images: ["/images/product1.png"], // Reusing image as placeholder
    stockStatus: "in-stock",
    collection: "CORE"
  },
  {
    id: "p_008",
    slug: "oversized-hoodie",
    name: "OVERSIZED HOODIE",
    subtitle: "Heavyweight French Terry",
    price: 650,
    category: "KNITWEAR",
    sizes: ["1", "2", "3", "4"],
    description: "Essential oversized hoodie constructed from 500gsm French terry. Features dropped shoulders, a double-layered hood, and no drawstrings for a minimal aesthetic.",
    details: ["100% Cotton", "500gsm French Terry", "Double-layered hood", "Ribbed cuffs and hem"],
    images: ["/images/product2.png"], // Reusing image as placeholder
    stockStatus: "in-stock",
    collection: "CORE"
  }
];

export const getProductsByCategory = (category: string) => {
  return mockProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase());
};

export const getProductBySlug = (slug: string) => {
  return mockProducts.find((product) => product.slug === slug);
};
