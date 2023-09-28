import "./App.css";
import Counter from "./components/Counter";
import PowerTwo from "./components/PowerTwo";
import PowerThree from "./components/PowerThree";
import PowerFour from "./components/PowerFour";
import PowerFive from "./components/PowerFive";
import PowerSix from "./components/PowerSix";


function App () {
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
			<Counter/>
	
			<br />
      <h2><em>Exponents</em></h2>
			<div className="container">
				<PowerTwo />
				<PowerThree />
				<PowerFour />
				<PowerFive />
				<PowerSix />
			</div>
		</div>
	);
}

export default App;
