import './App.scss';
import React from 'react'
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';

import { fetchingData, receivedData } from './actions';

const colors = ["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"]

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async fetchQuote() {
    return (dispatch) => {
      useDispatch(dispatch(fetchingData()));
      setTimeout(() => {
        let data = { content: "Lroem Ipsum", author: "Marius" };
        useDispatch(receivedData(data));
      }, 2500);
    };
  };

  render() {
    let color_index = Math.floor(Math.random() * colors.length);
    this.state.color = colors[color_index];

    const state = useSelector((state) => state);
    $("body").attr("class", "bg-"+state.color+"-600");
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <QuoteBox color={state.color} />
      </div>
    );
  }
}


class QuoteBox extends React.Component {

  refreshPage() {
    window.location.reload();
  }

  async fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) return data.content;
    return "";
  }
  
  render() {
    const c = this.props.color;
    const divClass = `p-2 rounded-md w-1/2 h-1/3 flex flex-col items-center bg-${c}-400 text-${c}-900 shadow-lg shadow-${this.props.color}-950 font-light`;
    const btnClass = `rounded bg-${c}-500 hover:bg-${c}-700 p-2`;
    return (
      <div id="quote-box" className={divClass}>
        <p id="text">{this.fetchQuote()}</p>
        <p id="author">Autor</p>
        <button onClick={this.refreshPage} id="new-quote" className={btnClass}>New Quote</button>
        <a href="https://x.com" id="tweet-quote">Tweet</a>
      </div>
    );
  }
}

export default App;