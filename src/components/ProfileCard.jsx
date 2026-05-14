import { useSelector, useDispatch } from "react-redux";
import action from "../redux/action"

const ProfileCard = (props) => {
  const theme = useSelector((state) => state.mode)
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh",
      }}
    >
    <div>
        <h1>Profile</h1>
      <button onClick={() => dispatch(action())}>Theme</button>
            <h3>{theme}</h3>
          <div className="card mx-auto" style={{width: "18rem"}}>
              <img className="card-img-top p-3" src={props.images} alt="Card image cap"/>
                  <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
          </div>
      </div>    
    </div>

  )
}

export default ProfileCard