export const categories = [
  {
    id: 1,
    name: "Wear",
    description: "wear category",
    parentId: null,
    children: [{
      id: 6,
      name: "Watches",
      description: "Watches category",
      parentId: 1,
    
    },
    {
      id: 7,
      name: "Shoes",
      description: "Shoes category",
      parentId: 1,
     
    },
    {
      id: 8,
      name: "Bags",
      description: "Bags category",
      parentId: 1,
     
    }]
  },
  {
    id: 2,
    name: "Electronics",
    description: "Electronics category",
    parentId: null,
    children: [
      {
        id: 9,
        name: "TV",
        description: "This category is for Tv",
        parentId: 2,
       
      },
      {
        id: 10,
        name: "Box Music Player",
        description: "this category is for music device and box music player",
        parentId: 2,
       
      }
    ]
  },
  {
    id: 3,
    name: "Sports",
    description: "Sports category",
    parentId: null,
    children: [
      {id: 11,
      name: "sport pant",
      description: "Category of sport pant",
      parentId: 3
      },
      {
        id: 12,
        name: "Elastic for sport",
        description: "Category of sport elastic for training",
        parentId: 3,
       
      }
    ]
  },
  {
    id: 4,
    name: "Computers",
    description: "computers category",
    parentId: null, 
  
  },
  {
    id: 5,
    name: "Earpods",
    description: "Earpods category",
    parentId: 2, 
 
  }
  
];
export const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg"];

export const products = [
  {
    id: 1,
    name: "cobalt blue",
    description: "t-shirt high quality 100% cotton",
    price: "54 dt",
    countInStock: 35,
    categoryId: 1,
    image: "cobalt-blue-t-shirt.jpg"
  },
  {
    id: 2,
    name: "simple-shirt",
    description: "t-shirt high quality 100% cotton",
    price: "36 dt",
    countInStock: 42,
    categoryId: 1,
    image: "simple-t-shit-back.jpg" 
      
  },
  {
    id: 3,
    name: "striped-shirt",
    description: "t-shirt high quality 100% cotton",
    price: "34 dt",
    countInStock: 12,
    categoryId: 1,
    image: "striped-t-shirt.jpg" 
      
  },
  {
    id: 4,
    name: "printed-red-hoodie",
    description: "t-shirt high quality 100% cotton",
    price: "36 dt",
    countInStock: 47,
    categoryId: 1,
    image: "printed-red-hoodie.jpg" 
      
  },
  {
    id: 5,
    name: "purple-t-shirt",
    description: "t-shirt high quality 100% cotton",
    price: "41 dt",
    countInStock: 52,
    categoryId: 1,
    image: "purple-t-shit.jpg" 
      
  },
  {
   id: 6,
    name: "red-pullover-hanging",
    description: "t-shirt high quality 100% cotton",
    price: "22 dt",
    countInStock: 16,
    categoryId: 1,
    image: "red-pullover-hanging.jpg" 
      
  },
  {
    id: 7,
    name: "joy-happiness",
    description: "t-shirt high quality 100% cotton",
    price: "28 dt",
    countInStock: 81,
    categoryId: 1,
    image: "joy-happiness.jpg" 
      
  },
  {
    id: 8,
    name: "grey-leather-hoodie",
    description: "t-shirt high quality 100% cotton",
    price: "22 dt",
    countInStock: 17,
    categoryId: 1,
    image: "grey-leather-hoodie.jpg" 
      
  },
  {
    id: 9,
    name: "psd-blue-hoodie",
    description: "t-shirt high quality 100% cotton",
    price: "28 dt",
    countInStock: 23,
    categoryId: 1,
    image: "ps-blue-hoodie.jpg" 
      
  },
  {
    id: 10,
    name: "graphic-woman-dress",
    description: "t-shirt high quality 100% cotton",
    price: "57 dt",
    countInStock: 78,
    categoryId: 1,
    image: "graphic-woman-dress.jpg" 
      
  },
  {
    id: 11,
    name: "curly-girl-beautifull-dress",
    description: "t-shirt high quality 100% cotton",
    price: "51 dt",
    countInStock: 19,
    categoryId: 1,
    image: "curly-girl-beautifull-dress.jpg" 
      
  },
  {
    id: 12,
    name: "beautiful-fashion-woman-purple",
    description: "t-shirt high quality 100% cotton",
    price: "78 dt",
    countInStock: 13,
    categoryId: 1,
    image: "beautiful-fashion-woman-purple.jpg" 
      
  },
  {
    id: 13,
    name: "dress-1416535",
    description: "t-shirt high quality 100% cotton",
    price: "22 dt",
    countInStock: 43,
    categoryId: 1,
    image: "dress-1416535.jpg" 
      
  },
  {
    id: 14,
    name: "istockphoto-118",
    description: "t-shirt high quality 100% cotton",
    price: "28 dt",
    countInStock: 61,
    categoryId: 1,
    image: "istockphoto-118.jpg" 
      
  },
  {
   id: 15,
    name: "girl-with-oriental-dress",
    description: "Dress high quality nice superior cotton",
    price: "34 dt",
    countInStock: 21,
    categoryId: 1,
    image: "girl-with-oriental-dress.jpg" 
      
  },
  {
    id: 16,
    name: "Shoes Vika RT",
    description: "Shoes-Vika RT,nice brand high quality, new fashion, new experience to wear",
    price: "89 dt",
    countInStock: 14,
    categoryId: 1,
    image: "istockphoto1350560575.jpg" 
      
  },
  {
   id: 17,
    name: "Shoes Vika lp",
    description: "t-shirt high quality 100% cotton",
    price: "104 dt",
    countInStock: 7,
    categoryId: 1,
    image: "istockphoto-1258111642.jpg" 
      
  },
  {
    id: 18,
    name: "Shoes Wib l5",
    description: "pair of shoes Wib l5, high quality",
    price: "122 dt",
    countInStock: 21,
    categoryId: 1,
    image: "Shoes-Wib-l5.jpg" 
      
  },
  {
   id: 19,
    name: "Shoes Wib Sl5",
    description: "Shoes Wib Sl5, high quality, new wear & new experience",
    price: "153.99 dt",
    countInStock: 6,
    categoryId: 1,
    image: "Shoe-Wib-Sl5.jpg" 
      
  },
  {
    id: 20,
    name: "pair of shoes Rek N12",
    description: "pair of shoes Rek N12",
    price: "109 dt",
    countInStock: 32,
    categoryId: 1,
    image: "Shoes-rek-N12.jpg" 
      
  },
  {
   id: 21,
    name: "pair of shoes Rek N11",
    description: "pair of shoes Rek N12,beautiful mark.Expert new adventure with new fashion",
    price: "117 dt",
    countInStock: 24,
    categoryId: 1,
    image: "Shoes-rek-N11.jpg" 
      
  },
  {
    id: 22,
    name: "Bag woman Vk 21",
    description: "Leather bag woman brand Vk 21, New tendance",
    price: "24 dt",
    countInStock: 7,
    categoryId: 1,
    image: "Bag-woman-vk-21.jpg" 
      
  },
  {
    id: 23,
    name: "Bag woman Vk7",
    description: "Leather beautiful bag, signed mark",
    price: "27 dt",
    countInStock: 26,
    categoryId: 1,
    image: "Bag-woman-vk7.jpg" 
      
  },
  {
    id: 24,
    name: "Bag woman Ht14",
    description: "Leather nice bag.Good quality with new experience on the world of fashion",
    price: "28 dt",
    countInStock: 8,
    categoryId: 1,
    image: "Bag-woman-Ht14.jpg" 
      
  },
  {
    id: 25,
    name: "Bag Woman Ht2",
    description: "Bag leather woman Ht2 brand. good quality",
    price: "37 dt",
    countInStock: 41,
    categoryId: 1,
    image: "Bag-woman-Ht2.jpg" 
      
  },
  {
    id: 26,
    name: "Bag woman Nt12",
    description: "Bag woman Nt12,New tendance of leather bag for fashion woman",
    price: "69 dt",
    countInStock: 27,
    categoryId: 1,
    image: "Bag-woman-Nt12.jpg" 
      
  },
  {
    id: 27,
    name: "Bag woman Nt2S2",
    description: "Nice leather bag.New tendance, try the best quality in the world of bags",
    price: "57 dt",
    countInStock: 17,
    categoryId: 1,
    image: "Bag-woman-Nt2S2.jpg" 
      
  },
  {
   id: 28,
    name: "Bag Vk12Sx12",
    description: "Leather good quality bags.try the new tendance mrs.Big fashion",
    price: "62 dt",
    countInStock: 19,
    categoryId: 1,
    image: "Bag-Vk12Sx12.jpg" 
      
  },
  {
    id: 29,
    name: "Man Watch M10",
    description: "Beautiful man watch M10.Best watch accessory",
    price: "118 dt",
    countInStock: 21,
    categoryId: 1,
    image: "Man-Watch-M10.jpg" 
      
  },
  {
    id: 30,
    name: "Watch Loop12",
    description: "Fashion wear watch Loop12.Nice wear, new look on your hand",
    price: "178 dt",
    countInStock: 12,
    categoryId: 1,
    image: "Watch-Loop12.jpg" 
      
  },
  {
   id: 31,
    name: "Watch M50",
    description: "Fashion wear watch M50.Nice wear, new look on your hand",
    price: "109 dt",
    countInStock: 5,
    categoryId: 1,
    image: "Watch-M50.jpg" 
      
  },
  {
   id: 32,
    name: "Bulova Watch",
    description: "Fashion wear watch Bulova.Nice wear, new look on your hand",
    price: "146.58 dt",
    countInStock: 21,
    categoryId: 1,
    image: "bulova-watch.jpg" 
      
  },
  {
   id: 33,
    name: "Watch LoopP01",
    description: "Fashion wear watch Loop01.Nice wear, new look on your hand",
    price: "186.47 dt",
    countInStock: 14,
    categoryId: 1,
    image: "Watch-LoopP01.jpg" 
      
  },
  {
    id: 34,
    name: "Watch M02",
    description: "Beautiful watch man wear for sports activities.measure tension respiration system",
    price: "193.24 dt",
    countInStock: 3,
    categoryId: 1,
    image: "Watch-M02.jpg" 
      
  },
  {
    id: 35,
    name: "Computer Lp05",
    description: "High performance PC RAM 4gb, Mem 512gb 1.8hz",
    price: "1294.97 dt",
    countInStock: 13,
    categoryId: 2,
    image: "Computer-Lp5.jpg" 
      
  },
  {
   id: 36,
    name: "Computer Led12",
    description: "High technology gamer computer.Innovation of technology.one tera memory, 512gb ram graphic visox24, 1.8 processor",
    price: "1526.97 dt",
    countInStock: 9,
    categoryId: 2,
    image: "Computer-led12.jpg" 
      
  },
  {
   id: 37,
    name: "Computer Dig1",
    description: "High technology gamer computer.Innovation of technology.one tera memory, 264gb ram graphic visox12, 1.6 processor",
    price: "1186.97 dt",
    countInStock: 22,
    categoryId: 2,
    image: "Computer-Dig1.jpg" 
      
  },
  {
    id: 38,
    name: "Laptop Dig05",
    description: "High technology gamer computer.New Innovation in the world of gaming computer.one tera memory, 512gb ram graphic Losous24, 1.8 processor.Alluminium sm12",
    price: "2156.87 dt",
    countInStock: 27,
    categoryId: 2,
    image: "Laptop-Dig5.jpg" 
      
  },
  {
    id: 39,
    name: "Computer Led55",
    description: "High technology gamer computer.Innovation of technology.High performance quality RAM 4gb Mem 512gb 1.8hz",
    price: "2516.97 dt",
    countInStock: 3,
    categoryId: 2,
    image: "Computer-led55.jpg" 
      
  },
  {
   id: 40,
    name: "Computer Dig15",
    description: "High technology gamer computer.Innovation of technology.High performance RAM 4, Mem 1024gb, 1.6 hz",
    price: "1150.64 dt",
    countInStock: 17,
    categoryId: 2,
    image: "Computer-Dig15.jpg" 
      
  },
  
  
  
]