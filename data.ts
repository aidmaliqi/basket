type Quote = {
  id: number;
  quote: string;
  authorId: number;
};
type Author = {
  id: number;
  author: string;
  age: number;
  img: string;
};

 export const quotesData : Quote[]= [
  {
    id: 1,
    quote: "The purpose of our lives is to be happy.",
    authorId: 1,
  },
  {
    id: 2,
    quote: "The freedom to make my own mistakes was all I ever wanted..",
    authorId: 2,
  },
  {
    id: 3,
    quote: "A winner is a dreamer who never gives up",
    authorId: 3,
  },
  {
    id: 4,
    quote: "Out of the mountain of despair, a stone of hope",
    authorId: 4,
  },
  {
    id: 5,
    quote:
      "Islam will win with or without you, but without Islam you will get lost and lose.",
    authorId: 5,
  },
  {
    id: 6,
    quote:
      "Someone said: Women are the cause of problems in the world…..Yes, I agree; because she suffered 9 months to bring a fool like you into life to say that Women are the reason for the problems",
    authorId: 5,
  },
];

export const authors : Author[] = [
  {
    id: 1,
    author: "Dalai Lama",
    age: 45,
    img: "https://cdn.britannica.com/46/188746-050-7EF4B27E/14th-Dalai-Lama-2008.jpg",
  },
  {
    id: 2,
    author: "Mance Rayder",
    age: 34,
    img: "https://static.wikia.nocookie.net/gameofthrones/images/1/17/GOT_Season_5_10.jpg/revision/latest/scale-to-width-down/333?cb=20160826005613",
  },
  {
    id: 3,
    author: "NELSON MANDELA",
    age: 32,
    img: "https://api.time.com/wp-content/uploads/2020/07/nelson-mandela.jpg?quality=85&w=800",
  },
  {
    id: 4,
    author: "Martin Luther King",
    age: 55,
    img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MjgwNDg5NDgz/martin-luther-king-jr-9365086-2-402.jpg",
  },
  {
    id: 5,
    author: "Ahmed Deedat",
    age: 75,
    img: "https://muslimviews.co.za/wp-content/uploads/2021/09/Ahmed-Deedat-LS-1140x570.jpg",
  },
];
