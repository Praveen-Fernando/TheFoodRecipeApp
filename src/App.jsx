import { useState } from "react";
import Search from "./components/searchbar/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/navbar/Nav";
import "./app.css";
import Container from "./components/container/Container";
import InnerContiner from "./components/container/InnerContainer";
import InnerNavContainer from "./components/navbar/InnerNavContainer";
import FoodApp from "./components/navbar/FoodApp";
import FoodDetails from "./components/fooddetails/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div className="App">
      <Nav>
        <InnerNavContainer>
          <FoodApp />
        </InnerNavContainer>
        <InnerNavContainer>
          <Search foodData={foodData} setFoodData={setFoodData} />
        </InnerNavContainer>
      </Nav>

      <Container>
        <InnerContiner>
          {<FoodList setFoodId={setFoodId} foodData={foodData} />}
        </InnerContiner>
        <InnerContiner>
          <FoodDetails foodId={foodId} />
        </InnerContiner>
      </Container>
    </div>
  );
}

export default App;
