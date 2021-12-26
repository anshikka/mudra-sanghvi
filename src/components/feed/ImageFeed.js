import { Feed } from "semantic-ui-react";
import ImageMessage from "../cards/ImageMessage";
import navy_pier from "../../assets/images/mudra-ansh/navy_pier.JPG";
import cold from "../../assets/images/mudra-ansh/cold.JPEG";
import smokies from "../../assets/images/mudra-ansh/smokies.png";
import car_selfie from "../../assets/images/mudra-ansh/car_selfie.png";
import nandini_bday from "../../assets/images/mudra-ansh/nandini_bday.png";
import mudra_neena from "../../assets/images/mudra-neena/mudra-neena.jpg";
import mudra_shachi from "../../assets/images/mudra-shachi/mudra-shachi.jpeg";
import mudra_alouki from "../../assets/images/mudra-alouki/mudra-alouki.jpg";
import mudra_ryan_1 from "../../assets/images/mudra-ryan/mudra-ryan-1.jpeg";
import mudra_ryan_2 from "../../assets/images/mudra-ryan/mudra-ryan-2.jpeg";
import mudra_ryan_3 from "../../assets/images/mudra-ryan/mudra-ryan-3.jpeg";
import mudra_ketul from "../../assets/images/mudra-ketul/mudra-ketul.jpg";
import mudra_caroline_1 from "../../assets/images/mudra-caroline/mudra-caroline-1.jpg";
import mudra_caroline_2 from "../../assets/images/mudra-caroline/mudra-caroline-2.jpg";
import mudra_caroline_3 from "../../assets/images/mudra-caroline/mudra-caroline-3.jpg";
import mudra_caroline_4 from "../../assets/images/mudra-caroline/mudra-caroline-4.jpg";
import mudra_caroline_5 from "../../assets/images/mudra-caroline/mudra-caroline-5.jpg";
import mudra_caroline_6 from "../../assets/images/mudra-caroline/mudra-caroline-6.jpg";
import mudra_caroline_7 from "../../assets/images/mudra-caroline/mudra-caroline-7.jpg";
import mudra_caroline_8 from "../../assets/images/mudra-caroline/mudra-caroline-8.jpg";
import mudra_caroline_9 from "../../assets/images/mudra-caroline/mudra-caroline-9.jpg";
import mudra_caroline_10 from "../../assets/images/mudra-caroline/mudra-caroline-10.jpg";
import mudra_caroline_11 from "../../assets/images/mudra-caroline/mudra-caroline-11.jpg";
import mudra_caroline_12 from "../../assets/images/mudra-caroline/mudra-caroline-12.jpg";
import mudra_caroline_13 from "../../assets/images/mudra-caroline/mudra-caroline-13.jpg";
import mudra_caroline_14 from "../../assets/images/mudra-caroline/mudra-caroline-14.jpg";
import mudra_caroline_15 from "../../assets/images/mudra-caroline/mudra-caroline-15.jpg";
import mudra_caroline_16 from "../../assets/images/mudra-caroline/mudra-caroline-16.jpg";
import mudra_caroline_17 from "../../assets/images/mudra-caroline/mudra-caroline-17.jpg";
import mudra_caroline_18 from "../../assets/images/mudra-caroline/mudra-caroline-18.jpg";
import mudra_caroline_19 from "../../assets/images/mudra-caroline/mudra-caroline-19.jpg";
import mudra_caroline_20 from "../../assets/images/mudra-caroline/mudra-caroline-20.jpg";
import mudra_caroline_21 from "../../assets/images/mudra-caroline/mudra-caroline-21.jpg";
import mudra_caroline_22 from "../../assets/images/mudra-caroline/mudra-caroline-22.jpg";
import mudra_caroline_23 from "../../assets/images/mudra-caroline/mudra-caroline-23.jpg";
import mudra_caroline_24 from "../../assets/images/mudra-caroline/mudra-caroline-24.jpg";
import mudra_caroline_25 from "../../assets/images/mudra-caroline/mudra-caroline-25.jpg";
import mudra_caroline_26 from "../../assets/images/mudra-caroline/mudra-caroline-26.jpg";
import mudra_caroline_27 from "../../assets/images/mudra-caroline/mudra-caroline-27.jpg";
import mudra_caroline_28 from "../../assets/images/mudra-caroline/mudra-caroline-28.jpg";
import mudra_caroline_29 from "../../assets/images/mudra-caroline/mudra-caroline-29.jpg";
import mudra_caroline_30 from "../../assets/images/mudra-caroline/mudra-caroline-30.jpg";
import mudra_tarang_1 from "../../assets/images/mudra-tarang/mudra-tarang-1.jpeg";
import mudra_tarang_2 from "../../assets/images/mudra-tarang/mudra-tarang-2.jpeg";
import mudra_stuti from "../../assets/images/mudra-stuti/mudra-stuti.jpg";
import mudra_aastha from "../../assets/images/mudra-aastha/mudra-aastha.jpeg";
import mudra_mom_1 from "../../assets/images/mudra-mom/mudra-mom-1.jpeg";
import mudra_mom_2 from "../../assets/images/mudra-mom/mudra-mom-2.jpeg";
import mudra_mom_3 from "../../assets/images/mudra-mom/mudra-mom-3.jpeg";
import mudra_mom_4 from "../../assets/images/mudra-mom/mudra-mom-4.jpeg";
import mudra_dad_1 from "../../assets/images/mudra-dad/mudra-dad-1.JPG";
import mudra_dad_2 from "../../assets/images/mudra-dad/mudra-dad-2.jpeg";
import mudra_keya from "../../assets/images/mudra-keya/mudra-keya.jpeg";
import mudra_anuj from "../../assets/images/mudra-anuj/mudra-anuj.jpeg";
import mudra_aayushi from "../../assets/images/mudra-aayushi/mudra-aayushi.jpeg";
import mudra_dhwani from "../../assets/images/mudra-dhwani/mudra-dhwani.jpeg";
import mudra_purav from "../../assets/images/mudra-purav/mudra-purav.jpeg";
import mudra_gaby_1 from "../../assets/images/mudra-gaby/mudra-gaby-1.jpeg";
import mudra_gaby_2 from "../../assets/images/mudra-gaby/mudra-gaby-2.png";
import mudra_gaby_3 from "../../assets/images/mudra-gaby/mudra-gaby-3.jpeg";
import mudra_nandini from "../../assets/images/mudra-nandini/mudra-nandini.jpeg";
import mudra_nonu from "../../assets/images/mudra-nonu/mudra-nonu.jpeg";
import mudra_bruno_1 from "../../assets/images/mudra-bruno/mudra-bruno-1.jpeg";
import mudra_bruno_2 from "../../assets/images/mudra-bruno/mudra-bruno-2.jpeg";
import mudra_vrush from "../../assets/images/mudra-vrush/mudra-vrush.jpeg";
import mudra_roshni from "../../assets/images/mudra-roshni/mudra-roshni.jpeg";
import "./ImageFeed.css";

const pictureMessages = [
  {
    name: "Vrush Patel",
    message: "Happy birthday Thomas!",
    pictures: [{ source: mudra_vrush }],
  },
  {
    name: "Purav Shah",
    message:
      "Our friendship is like Tom and Jerry we would tease and roast each other but will be friends forever. Happy Birthday!",
    pictures: [{ source: mudra_purav }],
  },
  {
    name: "Roshni Shah",
    message:
      "Happy Birthday to the most sweetest, energetic, kind hearted girl I know!! Keep smiling beautiful...you got a million dollar smile🥰 Love you forever sista💗!! Cheers to more memories to come 🥂",
    pictures: [{ source: mudra_roshni }],
  },
  {
    name: "Caroline Cudney",
    message:
      "Mudra is my girl, my sister from another mister, my best friend, and so much more. She has shaped me into a better human being, and made my life so much better than words can explain. I genuinely don’t know what I would do without her. I know that I can call her any time day or night with a problem and she’ll be able to fix it. Every laugh that we’ve shared together is a laugh that I never forget. Every memory that we’ve made together is one that can’t be replaced. She’s the type of person who you know will be in your life forever because once you have her, you can’t live without her.",
    pictures: [
      { source: mudra_caroline_1 },
      { source: mudra_caroline_2 },
      { source: mudra_caroline_3 },
      { source: mudra_caroline_4 },
      { source: mudra_caroline_5 },
      { source: mudra_caroline_6 },
      { source: mudra_caroline_7 },
      { source: mudra_caroline_8 },
      { source: mudra_caroline_9 },
      { source: mudra_caroline_10 },
      { source: mudra_caroline_11 },
      { source: mudra_caroline_12 },
      { source: mudra_caroline_13 },
      { source: mudra_caroline_14 },
      { source: mudra_caroline_15 },
      { source: mudra_caroline_16 },
      { source: mudra_caroline_17 },
      { source: mudra_caroline_18 },
      { source: mudra_caroline_19 },
      { source: mudra_caroline_20 },
      { source: mudra_caroline_21 },
      { source: mudra_caroline_22 },
      { source: mudra_caroline_23 },
      { source: mudra_caroline_24 },
      { source: mudra_caroline_25 },
      { source: mudra_caroline_26 },
      { source: mudra_caroline_27 },
      { source: mudra_caroline_28 },
      { source: mudra_caroline_29 },
      { source: mudra_caroline_30 },
    ],
  },
  {
    name: "Gabrielle Aranza",
    message:
      "Happy birthday Mudra!! 🥳 The world is a better place with you in it! Thank you for your friendship, the never ending pictures of Bruno and for sharing your beautiful culture. You're a baddie with a phatty and I hope you shake it all night 🤪",
    pictures: [
      { source: mudra_gaby_1 },
      { source: mudra_gaby_2 },
      { source: mudra_gaby_3 },
    ],
  },
  {
    name: "Nandini Sarup",
    message:
      "Happy birthday mudra!! hope you have lots of fun with your friends and family. im so glad i met you this year and we were able to hang out ❤️🥰 i hope you have a great day and take lots of shots 🍾🥂for me!! here’s to more birthdays and celebrations 🥳🎊much love 💗💕 nandini :)",
    pictures: [{ source: mudra_nandini }],
  },
  {
    name: "Shachi Shah",
    message:
      "Mudra, I hope you have an absolutely wonderful birthday and all your dreams come true. 💛😍Also you better party it up and live your best life 🎉🍾",
    pictures: [{ source: mudra_shachi }],
  },
  {
    name: "Neena Doshi",
    message:
      "Mudra, I know we haven’t known each other that long but it kind of feels like I’ve known you forever. You’re a beautiful person, inside and out. And I’m so glad I met you. I hope you have the best birthday and that I’m there to celebrate it with you, I love you. Cheers to another year 🎉❤️",
    pictures: [{ source: mudra_neena }],
  },
  {
    name: "Alouki Shah",
    message:
      "Happy birthday to the cutest, sweetest, and most bubbly person I know! Cheers to good times and many more memories together <3 Love you bbg!",
    pictures: [{ source: mudra_alouki }],
  },
  {
    name: "Aastha Kodia",
    message:
      "Happy Birthday Mudra!! 22 is the best year! Live it up! I am so happy that I met you, you’re like my little sister. Wishing you a birthday with lots of love and happiness forever!! Love you!!! ❤️❤️❤️",
    pictures: [{ source: mudra_aastha }],
  },
  {
    name: "Ketul Kothari",
    message:
      "Mudra!! I hope you have the most epic birthday. You’re the best young person I know, always full of life and energy lol.  Enjoy, I hope you have an absolute blast!",
    pictures: [{ source: mudra_ketul }],
  },
  {
    name: "Aayushi Pasad",
    message:
      "HAPPY BIRTHDAY MUDRA! I hope you have the best day ever! Enjoy this day and celebrate all week long! Sorry I can't be there to celebrate with you but definitely go out and enjoy the day!!! 🥳🥰🤗",
    pictures: [{ source: mudra_aayushi }],
  },
  {
    name: "Keya Pasad",
    message:
      "Happy Birthday Mudra! Here's a low quality image but high quality atom bomb 💣 👌",
    pictures: [{ source: mudra_keya }],
  },
  {
    name: "Dhwani Shah",
    message:
      "Happy birthday Mudra! Hope all your wishes come true! Wish I was able to celebrate in person with you :)",
    pictures: [{ source: mudra_dhwani }],
  },
  {
    name: "Ryan Mehta",
    message:
      "Happy Birthday Mudra!! Hope you’re just as rowdy today. Always stay young and wild little sis!",
    pictures: [
      { source: mudra_ryan_1 },
      { source: mudra_ryan_2 },
      { source: mudra_ryan_3 },
    ],
  },
  {
    name: "Anuj Shah",
    message:
      "There is no better day than your birthday to express how important and wonderful your friendship is to me.  I'll be eternally grateful that the stars aligned and our paths intertwined as roomies, beginning a totally new friendship in a whole new world for me that would grow into so much more. Girl, you're like a true sister to me who fights and troubles me all day. I'm really sorry I couldn't be there on your birthday, but see you soon. Happy Birthday Mudraaaaaaaa! ❤️",
    pictures: [{ source: mudra_anuj }],
  },
  {
    name: "Tarang Shah",
    message:
      "Happy Birthday Mudra!!!!! Lets party hard and have pesto sandwiches tmr for the hangover!!!",
    pictures: [{ source: mudra_tarang_1 }, { source: mudra_tarang_2 }],
  },
  {
    name: "Stuti Vaidya",
    message:
      "You got such a beautiful and kind heart. You made my life better in so many ways that now I can’t imagine my best days without you by my side. You are the closest friend I’ve and I will always be grateful for you. I love you, keep shining and never change.",
    pictures: [{ source: mudra_stuti }],
  },
  {
    name: "Mom",
    message:
      "Happy b’day to my Angel my sweet and sassy daughter. You taught me real meaning of mommy, everyday make me laugh and you make my world beautiful.",
    pictures: [
      { source: mudra_mom_1 },
      { source: mudra_mom_2 },
      { source: mudra_mom_3 },
      { source: mudra_mom_4 },
    ],
  },
  {
    name: "Dad",
    message:
      "Happy Birthday Day to my Life Line. Stay always blessed and joyful.",
    pictures: [{ source: mudra_dad_1 }, { source: mudra_dad_2 }],
  },

  {
    name: "Nonu",
    message:
      "Happy Birthday Mudra! Whenever you come over I get really excited to see you because I know I will get extra treats from you. Hope you have a great day and stop by our house to say hi! P.S. Bring treats.",
    pictures: [{ source: mudra_nonu }],
  },
  {
    name: "Bruno",
    message:
      "There's a lot of things I can say to you on this great day. I'm going to say the good things. I love whenever you chase me around the house and spoonfeed me. I love that you stay back home to take care of me and keep me busy at all times. Happy birthday big sis! P.S. Please stop picking me up against my will.",
    pictures: [{ source: mudra_bruno_1 }, { source: mudra_bruno_2 }],
  },
  {
    name: "Ansh Sikka",
    message:
      "Happy birthday Mudra! So I decided to make something for you. A simple birthday card wouldn't do. So I got creative and built you an experience you will never forget. I wanted to surprise you in a way where all of your friends are present. Check out what I made! I think you'll like it.",
    pictures: [
      { source: navy_pier },
      { source: smokies },
      { source: car_selfie },
      { source: nandini_bday },
      { source: cold },
    ],
  },
];

const feedItems = pictureMessages.map((pMessage) => (
  <Feed.Event>
    <ImageMessage content={pMessage} />
  </Feed.Event>
));
function ImageFeed() {
  return <Feed className="feed">{feedItems}</Feed>;
}

export default ImageFeed;
