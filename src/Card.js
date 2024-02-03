// import { BsFillBagFill } from "react-icons/bs";
// import { IoEyeOutline } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";

const Card = ({ image, title, category, star, reviews, price, addToCart }) => {
  return (
    <>
      <section className="card">
        <img
          src={image}
          alt={title}
          className="card-img"
          style={{ width: "230px", height: "200px" }}
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div style={{ marginBottom: "5px" }}>{category}</div>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <span>{price}$</span>
            </div>
            <div className="bag">
              <button
                className="bag"
                onClick={() =>
                  addToCart({ image, title, category, star, reviews, price })
                }
              >
                Add To Cart
              </button>
              {/* <BsFillBagFill className="bag-icon" /> */}
              {/* <IoEyeOutline className="eye-icon" />
              <FaRegHeart className="heart-icon" /> */}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
