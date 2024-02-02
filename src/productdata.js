import img1 from "../src/images/smart-saat-apple-watch.jpg";
import img2 from "../src/images/img2.webp";
import img3 from "../src/images/img3.webp";
import img4 from "../src/images/img4.jpg";
import img6 from "../src/images/img6.webp";
import img7 from "../src/images/img7.webp";
import img8 from "../src/images/img8.webp";
import img9 from "../src/images/img9.webp";
import img11 from "../src/images/img11.webp";
import img12 from "../src/images/img12.webp";
import img13 from "../src/images/img13.webp";
import img14 from "../src/images/img14.webp";
import img5 from "../src/images/asuscomputer.jpg";
import img18 from "../src/images/img18.jpg";
import img15 from "../src/images/tablet1.jpg";
import img16 from "../src/images/tablet2.webp";
import img19 from "../src/images/tablet3.webp";
import img20 from "../src/images/asuscomputer2.jpg";
import img21 from "../src/images/sonycomputer.jpg";
import img22 from "../src/images/camera2.jpg";
import img23 from '../src/images/sonycomputer2.jpg'
import img24 from '../src/images/blackwatch2.jpg';
import img25 from '../src/images/blackwatch3.jpg';
import img26 from '../src/images/blueheadphone.jpg';
import img27 from '../src/images/blueheadphone2.jpg';
import img28 from '../src/images/redwatch.jpg';
import img29 from '../src/images/whitewatch.jpg';
import img30 from '../src/images/whiteheadphone.jpg';
import img31 from '../src/images/samsungcomputer.jpg';
import img32 from '../src/images/greenheadphone2.jpg'
import img33 from '../src/images/greenwatch.jpg';
import img34 from '../src/images/bluewatch.jpg';
import img35 from '../src/images/redheadphone.webp';
import img36 from '../src/images/redwatch2.jpg';
import img37 from "../src/images/blueheadphone3.jpg";
import img38 from "../src/images/blueheadphone4.jpg";
import img39 from "../src/images/greenwatch2.jpg";
import img40 from "../src/images/redheadphone2.jpg";
import img41 from '../src/images/bmwwatch.jpg';
import img42 from "../src/images/bmwatch2.jpg"
import img43 from "../src/images/bmwwatch3.jpg";
import img44 from "../src/images/bmwwatch5.jpg";
import img45 from '../src/images/porschewatch.jpg'
import img46 from "../src/images/porschewatch3.png";
import img47 from '../src/images/asuscomputer3.jpg';
import img48 from "../src/images/samsungcomputer2.jpg";
import { AiFillStar } from "react-icons/ai";


const Productdata = [
  {
    id: 1,
    title: "Apple Watch",
    model: "Series 5 SE",
    price: "329.99",
    category: "Smart Watch",
    image: img1,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(143 reviews)",
  },
  {
    id: 2,
    title: "Sony ZX331BT",
    model: "Light Grey",
    price: "49.99",
    category: "Headphone",
    image: img2,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(110 reviews)",
  },
  {
    id: 3,
    title: "Iphone 11",
    model: "Serious Black",
    price: "149.99",
    category: "Smartphone",
    image: img3,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(150 reviews)",
  },
  {
    id: 4,
    title: "Iphone 11",
    model: "Subway Blue",
    price: "329.99",
    category: "Smartphone",
    image: img4,
    color: "green",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 5,
    title: "Asus Vivobook ",
    price: "529.99",
    image: img5,
    category: "Computer",
    star: <AiFillStar className="rating-star" />,
    reviews: "(230 reviews)",
  },
  {
    id: 6,
    title: "Iphone 11",
    model: "Subway BlueProduct RED",
    price: "149.99",
    category: "Smartphone",
    image: img6,
    color: "red",
    star: <AiFillStar className="rating-star" />,
    reviews: "(153 reviews)",
  },
  {
    id: 7,
    title: "Iphone 11",
    model: "Milky White",
    price: "149.99",
    category: "Smartphone",
    image: img7,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(253 reviews)",
  },
  {
    id: 8,
    title: "Iphone 12",
    model: "Rose Pink",
    price: "529.99",
    category: "Smartphone",
    image: img8,
    color: "pink",
    star: <AiFillStar className="rating-star" />,
    reviews: "(190 reviews)",
  },
  {
    id: 9,
    title: "Iphone 12",
    model: "Navy Blue",
    price: " 529.99",
    category: "Smartphone",
    image: img9,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 10,
    title: "4K Digital Video Kamera",
    model: "Midnight Gray",
    price: "149.99",
    category: "Camera",
    image: img18,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(143 reviews)",
  },
  {
    id: 11,
    title: "Iphone 13 Pro",
    model: "Silly Silver",
    price: " 149.99",
    category: "Smartphone",
    image: img11,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(163 reviews)",
  },
  {
    id: 12,
    title: "Iphone 13 Pro",
    model: "Grey",
    price: " 529.99",
    category: "Smartphone",
    image: img12,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 13,
    title: "Samsung Galaxy Note 21 ",
    model: "2 - Options",
    price: " 529.99",
    category: "Smartphone",
    image: img13,
    star: <AiFillStar className="rating-star" />,
    reviews: "(183 reviews)",
  },
  {
    id: 14,
    title: "Samsung Galaxy S21+ ",
    model: "Lilac Purple",
    price: " 149.99",
    category: "Smartphone",
    image: img14,
    star: <AiFillStar className="rating-star" />,
    reviews: "(133 reviews)",
  },
  {
    id: 15,
    title: "Notepad 102",
    model: "	Dragon Touch",
    price: "529.99",
    category: "Tablet",
    image: img15,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(113 reviews)",
  },
  {
    id: 16,
    title: "Notepad K10",
    model: "	Dragon Touch",
    price: "149.99",
    category: "Tablet",
    image: img16,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 17,
    title: "Galaxy Tab A8",
    model: "SAMSUNG",
    price: "529.99",
    category: "Tablet",
    image: img19,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(243 reviews)",
  },
  {
    id: 18,
    title: "Asus Vivobook",
    model: "	SAMSUNG",
    price: "529.99",
    category: "Computer",
    image: img20,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(116 reviews)",
  },
  {
    id: 19,
    title: "Sony",
    model: "	KODAK",
    price: "149.99",
    category: "Computer",
    image: img21,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 20,
    title: "Kodak PIXPRO FZ45",
    model: "Kodak",
    price: "89.99",
    category: "Camera",
    image: img22,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(183 reviews)",
  },
  {
    id: 21,
    title: "Sony",
    model: "Amazfit",
    price: "149.99",
    category: "Computer",
    image: img23,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(236 reviews)",
  },
  {
    id: 22,
    title: "GTR 3 Pro",
    model: "Amazfit",
    price: "49.99",
    category: "Smart Watch",
    image: img24,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(168 reviews)",
  },
  {
    id: 23,
    title: "NoiseFit Force",
    model: "Noise",
    price: "49.99",
    category: "Smart Watch",
    image: img25,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(146 reviews)",
  },
  {
    id: 24,
    title: "TUINYO",
    model: "TP 19",
    price: "89.99",
    category: "Headphone",
    image: img26,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(197 reviews)",
  },
  {
    id: 25,
    title: "Nabevi E6",
    model: "Nabevi",
    price: "49.99",
    category: "Headphone",
    image: img27,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(178 reviews)",
  },
  {
    id: 26,
    title: "Nabevi E6",
    model: "Nabevi",
    price: "89.99",
    category: "Smart Watch",
    image: img28,
    color: "red",
    star: <AiFillStar className="rating-star" />,
    reviews: "(153 reviews)",
  },
  {
    id: 27,
    title: "NMEGOU",
    model: "h5",
    price: "149.99",
    category: "Smart Watch",
    image: img29,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(113 reviews)",
  },
  {
    id: 28,
    title: "BERIBES",
    model: "202A",
    price: "89.99",
    category: "Smart Watch",
    image: img30,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(143 reviews)",
  },
  {
    id: 29,
    title: "Samsung",
    model: "Smasung",
    price: "529.99",
    category: "Computer",
    image: img31,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 30,
    title: "XG-Q8",
    model: "XuanGui",
    price: "49.99",
    category: "Headphone",
    image: img32,
    color: "green",
    star: <AiFillStar className="rating-star" />,
    reviews: "(163 reviews)",
  },
  {
    id: 31,
    title: "Woednx",
    model: "Pace",
    price: "89.99",
    category: "Smart Watch",
    image: img33,
    color: "green",
    star: <AiFillStar className="rating-star" />,
    reviews: "(193 reviews)",
  },
  {
    id: 32,
    title: "	HAMMER",
    model: "Active 2",
    price: "149.99",
    category: "Smart Watch",
    image: img34,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(125 reviews)",
  },
  {
    id: 33,
    title: "E7",
    model: "Active Noise",
    price: "49.99",
    category: "Headphone",
    image: img35,
    color: "red",
    star: <AiFillStar className="rating-star" />,
    reviews: "(129 reviews)",
  },
  {
    id: 34,
    title: "	Noise",
    model: "ColorFit Pro 2",
    price: "89.99",
    category: "Smart Watch",
    image: img36,
    color: "red",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 35,
    title: "BTH12-Blue",
    model: "iClever",
    price: "149.99",
    category: "Headphone",
    image: img37,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(120 reviews)",
  },
  {
    id: 36,
    title: "JBL TUNE 660NC-Blue",
    model: "JBL",
    price: "89.99",
    category: "Headphone",
    image: img38,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(363 reviews)",
  },
  {
    id: 37,
    title: "Pulse",
    model: "Noise",
    price: "149.99",
    category: "Smart Watch",
    image: img39,
    color: "green",
    star: <AiFillStar className="rating-star" />,
    reviews: "(253 reviews)",
  },
  {
    id: 38,
    title: "New Bose",
    model: "Wotdehi",
    price: "529.99",
    category: "Headphone",
    image: img40,
    color: "red",
    star: <AiFillStar className="rating-star" />,
    reviews: "(243 reviews)",
  },
  {
    id: 39,
    title: "BMW",
    model: "BMW",
    price: "49.99",
    category: "Smart Watch",
    image: img41,
    color: "green",
    star: <AiFillStar className="rating-star" />,
    reviews: "(323 reviews)",
  },
  {
    id: 40,
    title: "BMW",
    model: "BMW",
    price: "149.99",
    category: "Smart Watch",
    image: img42,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(223 reviews)",
  },
  {
    id: 41,
    title: "BMW",
    model: "BMW",
    price: "89.99",
    category: "Smart Watch",
    image: img43,
    color: "blue",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
  },
  {
    id: 42,
    title: "BMW",
    model: "BMW",
    price: "529.99",
    category: "Smart Watch",
    image: img44,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(153 reviews)",
  },
  {
    id: 41,
    title: "PORSCHE",
    model: "PORSCHE ",
    price: "529.99",
    category: "Smart Watch",
    image: img45,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(91 reviews)",
  },
  {
    id: 42,
    title: "PORSCHE",
    model: "PORSCHE",
    price: "149.99",
    category: "Smart Watch",
    image: img46,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(329reviews)",
  },
  {
    id: 43,
    title: "ASUS",
    model: "PORSCHE",
    price: "89.99",
    category: "Computer",
    image: img47,
    color: "white",
    star: <AiFillStar className="rating-star" />,
    reviews: "(210 reviews)",
  },
  {
    id: 43,
    title: "Samsung",
    model: "Samsung",
    price: "149.99",
    category: "Computer",
    image: img48,
    color: "black",
    star: <AiFillStar className="rating-star" />,
    reviews: "(254 reviews)",
  },
];

export default Productdata;
