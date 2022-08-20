import Img1 from "./img1.jpeg";
import Img2 from "./img2.jpeg"
import Img3 from "./img3.jpeg";

export const products = [
    {
        id: 1,
        title: "T-Shirt Summer Vibes",
        price: '500₹',
        img: <img src={Img1} alt='ss'/>,
        amount:1
    },
      {
        id: 2,
        title: "Basic slim Fit T-Shirt",
        price: '300₹',
        img: <img src={Img2} alt='ss' />,
        amount:1
    },
        {
        id:3,
        title: "T-Shirt",
        price: '500₹',
        img: <img src={Img3} alt='ss' />,
        amount:1
}
]