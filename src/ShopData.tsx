type BookData = {
  title: string;
  id: number;
  url: string;
  genre: string[];
  pages: number;
  price: number;
};

export const ShopData: BookData[] = [
  {
    title: "A Song of Ice and Fire",
    id: 0,
    url: "/images/book-covers/asoif.jpg",
    genre: ["Fantasy"],
    pages: 600,
    price: 30,
  },
  {
    title: "The Shining",
    id: 1,
    url: "/images/book-covers/the-shining.jpg",
    genre: ["Horror"],
    pages: 800,
    price: 45,
  },
  {
    title: "The Hitchhikker's Guide to the Galaxy",
    id: 2,
    url: "/images/book-covers/hitchhikker.jpg",
    genre: ["Sci-Fi"],
    pages: 732,
    price: 51,
  },
  {
    title: "Dune",
    id: 3,
    url: "/images/book-covers/dune.jpg",
    genre: ["Sci-Fi"],
    pages: 274,
    price: 19,
  },
  {
    title: "1Q84",
    id: 4,
    url: "/images/book-covers/1q84.jpg",
    genre: ["Romance"],
    pages: 484,
    price: 28,
  },
  {
    title: "Por um feminismo afro-latino-americano",
    id: 5,
    url: "/images/book-covers/lelia.jpg",
    genre: ["Sociology"],
    pages: 331,
    price: 30,
  },
  {
    title: "Interview with a Vampire",
    id: 6,
    url: "/images/book-covers/vampire.jpg",
    genre: ["Horror"],
    pages: 293,
    price: 16,
  },
  {
    title: "Flowers for Algernon",
    id: 7,
    url: "/images/book-covers/algernon.jpg",
    genre: ["Sci-Fi"],
    pages: 320,
    price: 19,
  },
  {
    title: "The Handmaid's Tale",
    id: 8,
    url: "/images/book-covers/handmaid.jpg",
    genre: ["Dystopia"],
    pages: 311,
    price: 20,
  },
  {
    title: "Murder on the Orient Express",
    id: 9,
    url: "/images/book-covers/express.jpg",
    genre: ["Crime"],
    pages: 256,
    price: 11,
  },
  {
    title: "The Lord of the Rings",
    id: 10,
    url: "/images/book-covers/lotr.jpg",
    genre: ["Fantasy"],
    pages: 1376,
    price: 56,
  },
];
