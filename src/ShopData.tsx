import { BookDataType } from "./ShopDataType";

export function filterBooks(books: BookDataType[], query: string) {
  query = query.toLowerCase().trim();
  return books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );
}

export const ShopData: BookDataType[] = [
  {
    title: "A Song of Ice and Fire",
    id: 0,
    url: "/images/book-covers/asoif.jpg",
    alt: "A well worned shield with a dragon",
    genre: ["Fantasy"],
    pages: 600,
    price: 30,
  },
  {
    title: "The Shining",
    id: 1,
    url: "/images/book-covers/the-shining.jpg",
    alt: "A wooden door",
    genre: ["Horror"],
    pages: 800,
    price: 45,
  },
  {
    title: "The Hitchhikker's Guide to the Galaxy",
    id: 2,
    url: "/images/book-covers/hitchhiker.jpg",
    alt: "The galaxy with a playful green figure holding a suitcase at the center",
    genre: ["Sci-Fi"],
    pages: 732,
    price: 51,
  },
  {
    title: "Dune",
    id: 3,
    url: "/images/book-covers/dune.jpg",
    alt: "A mysterious person in the middle of a sandstorm with a giant moon at his back",
    genre: ["Sci-Fi"],
    pages: 274,
    price: 19,
  },
  {
    title: "1Q84",
    id: 4,
    url: "/images/book-covers/1q84.jpg",
    alt: "A tree with two slightly different moons around",
    genre: ["Romance"],
    pages: 484,
    price: 28,
  },
  {
    title: "Por um feminismo afro-latino-americano",
    id: 5,
    url: "/images/book-covers/lelia.jpg",
    alt: "A black woman smiling",
    genre: ["Sociology"],
    pages: 331,
    price: 30,
  },
  {
    title: "Interview with a Vampire",
    id: 6,
    url: "/images/book-covers/vampire.jpg",
    alt: "Red candles on a dark background",
    genre: ["Horror"],
    pages: 293,
    price: 16,
  },
  {
    title: "Flowers for Algernon",
    id: 7,
    url: "/images/book-covers/algernon.jpg",
    alt: "A white rat",
    genre: ["Sci-Fi"],
    pages: 320,
    price: 19,
  },
  {
    title: "The Handmaid's Tale",
    id: 8,
    url: "/images/book-covers/handmaid.jpg",
    alt: "A figure wearing a red dress and a white hat-like",
    genre: ["Dystopia"],
    pages: 311,
    price: 20,
  },
  {
    title: "Murder on the Orient Express",
    id: 9,
    url: "/images/book-covers/express.jpg",
    alt: "An old train with a lot of mist around it",
    genre: ["Crime"],
    pages: 256,
    price: 11,
  },
  {
    title: "The Lord of the Rings",
    id: 10,
    url: "/images/book-covers/lotr.jpg",
    alt: "A snowy mountain",
    genre: ["Fantasy"],
    pages: 1376,
    price: 56,
  },
];
