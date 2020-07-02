import React, { Component } from "react";

import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }

  handleChanged = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChanged={this.handleChanged}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
