import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Iphone", price: "RM3999", img: "https://via.placeholder.com/150" },
    { id: 2, name: "iPad", price: "RM39999", img: "https://via.placeholder.com/150" },
    { id: 3, name: "MacBook", price: "RM93999", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="page">

      <h1>My Shop</h1>

      <Slider />

      <div className="grid">
        {products.map((p) => (
          <div
            className="card"
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;