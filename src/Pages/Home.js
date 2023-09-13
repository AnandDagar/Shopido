import React, { useState, useEffect } from "react";
import "../css/Home.css";

const images = [
  "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/new/20230816_RakhiSpecial-D.jpg.transform/i1680x550/image.jpeg",

  "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/new/20230816_Brands-D.jpg.transform/i1680x550/image.jpeg",

  "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/new/20230816_KidsTShirts-D.jpg.transform/i1680x550/image.jpeg",

  "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/new/20230814_NewStyles-D.jpg.transform/i1680x550/image.jpeg",

  // Add more image URLs as needed
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="slider-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <br />
      <br />

      <div>
        <hr className="lll" />
        <p className="nnn">Primium Collection</p>
        <hr className="lll" />
        <br />
        <br />
      </div>

      <div className="gt">
        <div className="fg">
          <img
            src="https://m.media-amazon.com/images/I/61s-AtarnDL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
            className="njl"
          />
        </div>

        <div className="jjj">
          <div className="dsf">
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?size=626&ext=jpg&ga=GA1.1.570867605.1692295740&semt=ais"
              alt=""
              className="jkk"
            />
            <p className="fff">SHIRT</p>
            <p className="mmm">Black Printed casual...</p>
            <p className="mll">199$</p>
            <button className="njj">Add to Cart</button>
          </div>
          <div className="dsf">
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4970.jpg?size=626&ext=jpg&ga=GA1.2.570867605.1692295740&semt=ais"
              alt=""
              className="jkk"
            />
            <p className="fff">SHIRT</p>
            <p className="mmm">White Printed casual...</p>
            <p className="mll">200$</p>
            <button className="njj">Add to Cart</button>
          </div>
          <div className="dsf">
            <img
              src="https://img.freepik.com/premium-photo/young-bearded-man-urban-background-wearing-british-elegant-suit-street_1139-1357.jpg?size=626&ext=jpg&ga=GA1.2.570867605.1692295740&semt=aiss"
              alt=""
              className="jkk"
            />
            <p className="fff">JEKET</p>
            <p className="mmm">Blue Printed casual...</p>
            <p className="mll">999$</p>
            <button className="njj">Add to Cart</button>
          </div>
          <div className="dsf">
            <img
              src="https://img.freepik.com/free-photo/handsome-man-black-suit-with-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair-full-portrait_186202-8530.jpg?size=626&ext=jpg&ga=GA1.2.570867605.1692295740&semt=ais"
              alt=""
              className="jkk"
            />
            <p className="fff">JEKET</p>
            <p className="mmm">Chollatey Printed casual...</p>
            <p className="mll">299$</p>
            <button className="njj">Add to Cart</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <hr className="qqs" />
        <p className="hhh">New Drops</p>
        <hr className="qqs" />
      </div>
      <div className="jiji">
        <div className="dfff">
          <img
            src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/stl/women/20230814_Festive%20Bling-D.jpg.transform/i439x600/image.jpeg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Kurtis</p>
          <p className="klkl">olive solid full length for Girls....</p>
          <p className="ddfd">$25 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/9/913346-11322219.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Kurtis</p>
          <p className="klkl">olive solid full length for Girls....</p>
          <p className="ddfd">$45 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/9/913348-11322231.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Kurtis</p>
          <p className="klkl">olive solid full length for Girls....</p>
          <p className="ddfd">$15 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/9/913368-11322141.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Kurtis</p>
          <p className="klkl">olive solid full length for Girls....</p>
          <p className="ddfd">$48 </p>
          <p className="mkmk">Add to cart</p>
        </div>
      </div>
<br />  
      <div>
        <p className="klkkl">What's Hot for Men:-</p>
      </div>
<br />
      <div className="jiji">
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/858434-10108991.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Men</p>
          <p className="klkl">olive solid full length for Boy....</p>
          <p className="ddfd">$22 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/867891-10302758.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Men</p>
          <p className="klkl">olive solid full length for Boy....</p>
          <p className="ddfd">$26 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/867893-10346124.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Men</p>
          <p className="klkl">olive solid full length for Boy....</p>
          <p className="ddfd">$45 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/815849-9749537.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Men</p>
          <p className="klkl">olive solid full length for Boy....</p>
          <p className="ddfd">$78 </p>
          <p className="mkmk">Add to cart</p>
        </div>
      </div>
      <div>
        <p className="ghgg">Shop By Occasion</p>
      </div>

      <div className="hvgaa">
        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/trending-now/20230818_TN-Super%20Staples-M.jpg.transform/i296x300/image.jpeg"
          alt=""
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/trending-now/20230818_TN-Outdoor-M.jpg.transform/i296x300/image.jpeg"
          alt=""
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/trending-now/20230818_TN-Festive%20Season-M.jpg.transform/i296x300/image.jpeg"
          alt=""
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/trending-now/20230818_TN-FEELS%20LIKE%20SPRING-M.jpg.transform/i296x300/image.jpeg"
          alt=""
        />
      </div>
      <div className="hjhjhj">
        <p>Super Staples</p>
        <p>Outdoor</p>
        <p>Festive Season</p>
        <p>Feels Like Spring</p>
      </div>


      <div>
        <p className="njojij">Trending Now</p>
      </div>
      <br />
      
      <div className="jiji">
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/870318-10351922.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Shorts</p>
          <p className="klkl">olive solid full length for Girls....</p>
          <p className="ddfd">$25 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/882577-10606186.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Shorts</p>
          <p className="klkl">olive solid full length for Boy....</p>
          <p className="ddfd">$25 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/861449-10180894.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Shorts</p>
          <p className="klkl">olive solid full length for Girls....</p>
          <p className="ddfd">$28 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/7/766192-8801150.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Shorts</p>
          <p className="klkl">olive solid full length for Boy....</p>
          <p className="ddfd">$78 </p>
          <p className="mkmk">Add to cart</p>
        </div>
      </div>
<br />
<br />
<br />
      <div className="xnw">
<img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/sub-banner/new/20230817_BeautyFragrances-D.jpg.transform/i671x305/image.jpeg" alt="" />

<img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-4/sub-banner/new/20230817_OnlineExclusives-D.jpg.transform/i671x305/image.jpeg" alt="" />

      </div>

<br />
<br />
<br />  
      <div className="hjhjhjjk">

<div className="mxk">
  <ul className="havxh">
    <button className="dsj">Women</button>
    <button  className="mks">Men</button>
    <button  className="mks">Kids</button>
    <button  className="mks">Ethnic Wear</button>
  </ul>
</div>

  <p className="jhhio">Shop the look</p>
  <div className="fgfgfg">
   <img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-2/stl/women/20230804_%20STREET%20FASHION%E2%80%8B-D.jpg.transform/i439x600/image.jpeg" alt=""  className="jjjjjjjj"/>

   <img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-2/stl/women/20230804_Pretty%20In%20Pink%20%E2%80%8B-D.jpg.transform/i439x600/image.jpeg" alt=""  className="jjjjjjjj"/>

   <img src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/aug-23/week-2/stl/women/20230804_Dress%20Up%E2%80%8B-D.jpg.transform/i439x600/image.jpeg" alt=""  className="jjjjjjjj"/>
   
  </div>

      </div>

      
    </>
  );
};

export default Home;
