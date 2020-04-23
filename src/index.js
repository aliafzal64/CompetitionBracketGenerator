// Author: Ali Afzal
// Date: April 23th 2020
import styled, { css } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import "./styles.css";

let Competitor = styled.button`
  color: #4cbbb9;
  font-size: 20px;
  text-align: center;
  grid-column-start: ${props => props.indexOfColumn};
  grid-row-start: ${props => props.indexOfRow};
  background-color: ${props => props.isClicked};
  margin: 5px;
  border: 2px solid #77d8d8;
`;

const Main = styled.div`
  grid-template-columns: ${props => props.mainIndexOfColumn};
  grid-template-rows: ${props => props.mainIndexOfRow};
  background-color: #4cbbb9;
  display: grid;
  height: 100vh;
  text-align: center;
`;

let inputCheck = 0;

function Input(props) {
  return (
    <div className="intro-components">
      <h1>Bracket Generator</h1>
      <div className="size-label">
        <h5>Choose your Size:</h5>
      </div>
      <div className="size-label">
        <select onChange={props.onChange}>
          <option value="undefined" />
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          id="number"
          value={props.newName}
          placeholder="Input Your Competitors"
          onChange={props.onChangeOfInput}
          onKeyPress={props.onEnter}
        />
        <button onClick={props.onClick}>Input</button>
      </div>
    </div>
  );
}
class App extends React.Component {
  renderInput() {
    return (
      <Input
        onChangeOfInput={e => this.handleChangeOfInput(e)}
        onChange={e => this.handleChange(e)}
        onClick={e => this.handleClickOfInput(e)}
        onEnter={e => this.handleEnter(e)}
        newName={this.state.newName}
      />
    );
  }
  listBrackets() {
    let bracketType = this.state.bracket8;
    if (this.state.numOfSeeds === "32") {
      bracketType = this.state.bracket32;
    }
    if (this.state.numOfSeeds === "8") {
      bracketType = this.state.bracket8;
    }
    if (this.state.numOfSeeds === "16") {
      bracketType = this.state.bracket16;
    }

    inputCheck = this.state.numOfSeeds;
    

    const bracketList = this.state.names.map((text, key) => {
      return (
        <Competitor
          indexOfColumn={bracketType.column[key]}
          indexOfRow={bracketType.row[key]}
          key={key}
          isClicked={this.state.isClicked[key]}
          onClick={e => this.handleClickOfSeed(e, key, text)}
        >
          {text}
        </Competitor>
      );
    });
    return (
      <Main
        mainIndexOfColumn={bracketType.mainColumn}
        mainIndexOfRow={bracketType.mainRow}
      >
        {bracketList}{" "}
      </Main>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      numOfSeeds: 0,
      seedNum: [],
      newName: "",
      names: [],
      isClicked: [],
      class: "container",
      bracket32: {
        mainColumn: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
        column: [1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
        2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,3,3,3,3,8,8,8,8,4,4,7,7,5,6],
        row: [1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,
            1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,
            2,4,8,10,14,16,20,22,
            2,4,8,10,14,16,20,22,
            3,9,15,21,
            3,9,15,21,
            6,18,
            6,18,
            12,12],
        match: [32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50,
        51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60,61,61],
        mainRow: "4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4%"
      },
      bracket8: {
        mainColumn: "20% 15% 15% 15% 15% 20%",
        column: [1, 1, 1, 1, 6, 6, 6, 6, 2, 2, 5, 5, 3, 4],
        row: [1, 2, 4, 5, 1, 2, 4, 5, 2, 4, 2, 4, 3, 3],
        match: [8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 12],
        mainRow: "20% 20% 20% 20% 20%"
      },
      bracket16: {
        mainColumn: "12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%",
        column: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          8,
          8,
          8,
          8,
          8,
          8,
          8,
          8,
          2,
          2,
          2,
          2,
          7,
          7,
          7,
          7,
          3,
          3,
          6,
          6,
          4,
          5
        ],
        row: [
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11,
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11,
          2,
          4,
          8,
          10,
          2,
          4,
          8,
          10,
          3,
          9,
          3,
          9,
          6,
          6
        ],
        match: [
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          28,
          29
        ],
        mainRow: "9% 9% 9% 9% 9% 9% 9% 9% 9% 9% 9%"
      }
    };
  }
  handleEnter(e) {
    if (e.key === "Enter") {
      const newNames = this.state.names;
      const arrLength = this.state.names.length;
      let index = Math.floor(Math.random() * arrLength - 1);
      if (arrLength === 6) {
        //checks length of array
        while (
          //as long as they are the outside seeds then randomly put the name in it
          newNames[index] !== undefined ||
          index === arrLength - 1 ||
          index === arrLength - 2 ||
          !newNames.indexOf(this.state.newName) < 0 ||
          index < 0
        ) {
          index = Math.floor(Math.random() * arrLength - 1);
        }
      } else if (arrLength === 14) {
        while (
          newNames[index] !== undefined ||
          index === arrLength - 1 ||
          index === arrLength - 2 ||
          index === arrLength - 3 ||
          index === arrLength - 4 ||
          index === arrLength - 5 ||
          index === arrLength - 6 ||
          !newNames.indexOf(this.state.newName) < 0 ||
          index < 0
        ) {
          index = Math.floor(Math.random() * arrLength - 1);
        }
      } else if (arrLength === 30) {
        while (
          newNames[index] !== undefined ||
          index === arrLength - 1 ||
          index === arrLength - 2 ||
          index === arrLength - 3 ||
          index === arrLength - 4 ||
          index === arrLength - 5 ||
          index === arrLength - 6 ||
          index === arrLength - 7 ||
          index === arrLength - 8 ||
          index === arrLength - 9 ||
          index === arrLength - 10 ||
          index === arrLength - 11 ||
          index === arrLength - 12 ||
          index === arrLength - 13 ||
          index === arrLength - 14 ||
          !newNames.indexOf(this.state.newName) < 0 ||
          index < 0
        ) {
          index = Math.floor(Math.random() * arrLength - 1);
        }
      } else if(arrLength === 62){
        while(
            newNames[index] !== undefined ||
            index === arrLength - 1 ||
            index === arrLength - 2 ||
            index === arrLength - 3 ||
            index === arrLength - 4 ||
            index === arrLength - 5 ||
            index === arrLength - 6 ||
            index === arrLength - 7 ||
            index === arrLength - 8 ||
            index === arrLength - 9 ||
            index === arrLength - 10 ||
            index === arrLength - 11 ||
            index === arrLength - 12 ||
            index === arrLength - 13 ||
            index === arrLength - 14 ||
            index === arrLength - 15 ||
            index === arrLength - 16 ||
            index === arrLength - 17 ||
            index === arrLength - 18 ||
            index === arrLength - 19 ||
            index === arrLength - 20 ||
            index === arrLength - 21 ||
            index === arrLength - 22 ||
            index === arrLength - 23 ||
            index === arrLength - 24 ||
            index === arrLength - 25 ||
            index === arrLength - 26 ||
            index === arrLength - 27 ||
            index === arrLength - 28 ||
            index === arrLength - 29 ||
            index === arrLength - 30 ||
            !newNames.indexOf(this.state.newName) < 0 ||
            index < 0
        ){
            index = Math.floor(Math.random() * arrLength - 1);
        } 
      } else {
          index = undefined;
      }
      if (index !== undefined) {
        newNames.splice(index, 1, this.state.newName); //update state of names array
        this.setState({
          names: newNames
        });
      }
      this.setState({
        newName: ""
      });
    }
  }
  handleChangeOfInput(e) {
    const name = e.target.value;
    this.setState({
      newName: name
    });
  }
  handleChange(e) {
    let newNum = e.target.value;
    this.setState({
      numOfSeeds: newNum
    });

    if (newNum === "undefined") {
      this.setState({
        names: [],
        class: "",
        isClicked: []
      });
    }

    if (newNum === "8") {
      this.setState({
        names: Array(14).fill(),
        isClicked: Array(14).fill("#eff3c6")
      });
    }
    if (newNum === "16") {
      this.setState({
        names: Array(30).fill(),
        isClicked: Array(30).fill("#eff3c6")
      });
    }

    if (newNum === "32") {
        this.setState({
          names: Array(62).fill(),
          isClicked: Array(62).fill("#eff3c6")
        });
      }

  }
  handleClickOfSeed(e, key, text) {
    let arr = this.state.names;
    let newArr = this.state.names;
    let numBracket = this.state.numOfSeeds;
    let clickedArr = this.state.isClicked;

    if (text !== undefined) {
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key]; //this algorithm decides where the name should go once clicked.
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red"; //uses key plus or minus one and also depends on the bracket size
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "32"
      ) {
        newArr[this.state.bracket32.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "32"
      ) {
        newArr[this.state.bracket32.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
    }

    console.log(newArr)
    this.setState({
      names: newArr
    });
  }
  handleClickOfInput(e) {
    
    if(inputCheck > 0){
      inputCheck--;
      if(inputCheck == 0){
        alert("MAX VALUES")
        return;
      }
    }

    const newNames = this.state.names;
    const arrLength = this.state.names.length;

    console.log("newNames = " + newNames)
    console.log("arrlength = " + arrLength)

    let index = Math.floor(Math.random() * arrLength - 1);
    if (arrLength === 6) {
      //checks length of array
      while (
        //as long as they are the outside seeds then randomly put the name in it
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = Math.floor(Math.random() * arrLength - 1);
      }
    } else if (arrLength === 14) {
      while (
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        index === arrLength - 3 ||
        index === arrLength - 4 ||
        index === arrLength - 5 ||
        index === arrLength - 6 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = Math.floor(Math.random() * arrLength - 1);
      }
    } else if (arrLength === 30) {
      while (
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        index === arrLength - 3 ||
        index === arrLength - 4 ||
        index === arrLength - 5 ||
        index === arrLength - 6 ||
        index === arrLength - 7 ||
        index === arrLength - 8 ||
        index === arrLength - 9 ||
        index === arrLength - 10 ||
        index === arrLength - 11 ||
        index === arrLength - 12 ||
        index === arrLength - 13 ||
        index === arrLength - 14 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = Math.floor(Math.random() * arrLength - 1);
      }
    } else if(arrLength === 62){
        while(
            newNames[index] !== undefined ||
            index === arrLength - 1 ||
            index === arrLength - 2 ||
            index === arrLength - 3 ||
            index === arrLength - 4 ||
            index === arrLength - 5 ||
            index === arrLength - 6 ||
            index === arrLength - 7 ||
            index === arrLength - 8 ||
            index === arrLength - 9 ||
            index === arrLength - 10 ||
            index === arrLength - 11 ||
            index === arrLength - 12 ||
            index === arrLength - 13 ||
            index === arrLength - 14 ||
            index === arrLength - 15 ||
            index === arrLength - 16 ||
            index === arrLength - 17 ||
            index === arrLength - 18 ||
            index === arrLength - 19 ||
            index === arrLength - 20 ||
            index === arrLength - 21 ||
            index === arrLength - 22 ||
            index === arrLength - 23 ||
            index === arrLength - 24 ||
            index === arrLength - 25 ||
            index === arrLength - 26 ||
            index === arrLength - 27 ||
            index === arrLength - 28 ||
            index === arrLength - 29 ||
            index === arrLength - 30 ||
            !newNames.indexOf(this.state.newName) < 0 ||
            index < 0
        ){
            index = Math.floor(Math.random() * arrLength - 1);
        }
    }else {
      console.log("UNDEFINED")
      index = undefined;
    }
    if (index !== undefined) {
      newNames.splice(index, 1, this.state.newName); //update state of names array
      this.setState({
        names: newNames
      });
    }
    this.setState({
      newName: ""
    });
  }
  render() {
    return (
      <div className="bracketMaker">
        <div className="heading">{this.renderInput()}</div>
        <div className="body">{this.listBrackets()}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
