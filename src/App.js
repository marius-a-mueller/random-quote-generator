import './App.scss';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './state/color/colorSlice';
import { fetchData, receivedData } from './state/data/dataSlice';

const colors = ["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"]

/*
class App extends React.Component {
  color = useSelector((state) => state.color);

  constructor(props) {
    super(props);
  }
  async fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) return data.content;
    return "";
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
*/
const App = () =>  {
  const dispatch = useDispatch();
  const color_index = Math.floor(Math.random() * colors.length);
  const color = colors[color_index];
  dispatch(changeColor(color));

  const handleAsync = () => {
    return function(dispatch) {
      // Dispatch request action here
      dispatch(fetchData())
      setTimeout(function() {
        let data = {
          quote: "Test",
          author: "Marius"
        }
        // Dispatch received data action here
        dispatch(receivedData(data))
      }, 2500);
    }
  };
  dispatch(handleAsync())

  const data = useSelector((state) => state.data);
  $("body").attr("class", "bg-"+color+"-600");
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <QuoteBox color={color} quote={data.quote} author={data.author}/>
    </div>
  );
}
//}


const QuoteBox = ({ color, quote, author }) => {
  function refreshPage() {
    window.location.reload();
  }
  /*
  const fetchQuote = createAsyncThunk(
    async (thunkAPI) => {
      dispatch(fetchData());
      setTimeout(() => {
        let data = { quote: "Lroem Ipsum", author: "Marius" };
        dispatch(receivedData(data));
      }, 2500);
  });*/
  const c = color;
  const divClass = `p-2 rounded-md w-1/2 h-1/3 flex flex-col items-center bg-${c}-400 text-${c}-900 shadow-lg shadow-${c}-950 font-light`;
  const btnClass = `rounded bg-${c}-500 hover:bg-${c}-700 p-2`;

  return (
    <div id="quote-box" className={divClass}>
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button onClick={refreshPage} id="new-quote" className={btnClass}>New Quote</button>
      <a href="https://x.com" id="tweet-quote">Tweet</a>
    </div>
  );
}

export default App;