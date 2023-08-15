import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/todo">
        <div className="utility-card">Todo</div>
      </Link>
      <Link to="/note">
        <div className="utility-card">Note</div>
      </Link>
    </div>
  );
};

export default Home;
