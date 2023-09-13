import React, { useState, useEffect } from "react";
import "../css/Women.css";

const Women = () => {
  const images = [
    "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/women/20230816_women-RakhiSpecial-D.jpg.transform/i1680x550/image.jpeg",

    "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/women/20230814_Women-Denim-D.jpg.transform/i1680x550/image.jpeg",

    "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/women/20230817_WomenWoven-D.jpg.transform/i1680x550/image.jpeg",

    // Add more image URLs here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      {" "}
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentImageIndex ? "slide active" : "slide"}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="jbngug">
        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/special-pages/sos-test/MicrosoftTeams-image%20(66).png.transform/i207x146/image.jpeg"
          alt=""
          className="ndjwn"
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/july-2023/week-3/women/thumbnail/Women-Tops-Thumbnail.jpg.transform/i207x146/image.jpeg"
          alt=""
          className="ndjwn"
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/july-2023/week-3/women/thumbnail/Women-Jeans-Thumbnail.jpg.transform/i207x146/image.jpeg"
          alt=""
          className="ndjwn"
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/july-2023/week-3/women/thumbnail/Women-KurtaSets-Thumbnail.jpg.transform/i207x146/image.jpeg"
          alt=""
          className="ndjwn"
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/july-2023/week-3/women/thumbnail/Women-Activewear-Thumbnail.jpg.transform/i207x146/image.jpeg"
          alt=""
          className="ndjwn"
        />

        <img
          src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/july-2023/week-3/women/thumbnail/Women-Dresses-Thumbnail.jpg.transform/i207x146/image.jpeg"
          alt=""
          className="ndjwn"
        />
      </div>
      <div className="nsjwq">
        <p className="wdnwqdh">Charactor Shop</p>
        <p className="wdnwqdh">Tops</p>
        <p className="wdnwqdh">Jeans</p>
        <p className="wdnwqdh">Dress</p>
        <p className="wdnwqdh">Kurta</p>
        <p className="wdnwqdh">Dress</p>
      </div>
      <br />
      <br />
      <div className="wndw">
      <p >The New Tradition</p>
      </div>
<br />
 
      <div className="jiji">
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/7/719632-7953659.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$45 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/9/913346-11322219.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$25 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/7/701057-7556519.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$55 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/7/719631-7953666.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$78 </p>
          <p className="mkmk">Add to cart</p>
        </div>
      </div>


<br />
<br />

      <div className="jiji">
        <div className="dfff">
          <img
            src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/stl/women/20230814_Festive%20Ready-D.jpg.transform/i439x600/image.jpeg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$45 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/stl/women/20230814_Delicate%20Decay-D.jpg.transform/i439x600/image.jpeg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$25 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/aug-2023/week-4/stl/women/20230814_Festive%20Bling-D.jpg.transform/i439x600/image.jpeg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$55 </p>
          <p className="mkmk">Add to cart</p>
        </div>
        <div className="dfff">
          <img
            src="https://imagescdn.pantaloons.com/img/app/product/8/861449-10180894.jpg"
            alt=""
            className="fgfg"
          />
          <p className="jjjj">The Curties</p>
          <p className="klkl">olive solid full length for baby....</p>
          <p className="ddfd">$78 </p>
          <p className="mkmk">Add to cart</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
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
    
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <b>
        <br />
      </b>
    </>
  );
};

export default Women;
