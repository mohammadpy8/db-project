import btcImage from "../assets/images/btcc.avif";
import eteImage from "../assets/images/123.webp";
import ttImage from "../assets/images/te.jpeg";
import otherImage from "../assets/images/bitcoin-price.jpg";
import amImage from "../assets/images/preview.png";
import frImage from "../assets/images/mmmmmmm.png";
import enImage from "../assets/images/master.jpg";

const randomImageArz = (title: string) => {
  switch (title) {
    case "بیت کوین":
      return btcImage;
    case "اتریوم":
      return eteImage;
    case "تتر":
      return ttImage;
    default:
      return otherImage;
  }
};

const randomImageMaster = (title: string) => {
  switch (title) {
    case "آمریکا":
      return amImage;
    case "فرانسه":
      return frImage;
    case "انگلیس":
      return enImage;
    default:
      return otherImage;
  }
};

export { randomImageArz, randomImageMaster };
