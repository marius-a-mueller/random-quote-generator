import './App.scss';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './state/color/colorSlice';
import { fetchData, receivedData } from './state/data/dataSlice';

const colors = ["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"]

const App = () =>  {
  const dispatch = useDispatch();

  const generateRandomColor = () => {
    return function(dispatch) {
      const color_index = Math.floor(Math.random() * colors.length);
      const color = colors[color_index];
      dispatch(changeColor(color));
    }
  }

  const color = useSelector((state) => state.color.color)
  console.debug(color)
  if (color=== "white") {
    dispatch(generateRandomColor())
  }

  const fetchQuote = () => {
    return async function(dispatch) {
      try {
        dispatch(fetchData())
        const response = await fetch("https://api.quotable.io/random");
        const { statusCode, statusMessage, ...data } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        dispatch(receivedData({
          quote: data.content,
          author: data.author
        }))
        console.log(data)
      } catch (error) {
        console.error("Error while loading quotes.")
        setTimeout(function() {
          dispatch(receivedData({
            quote: "",
            author: ""
          }))
        }, 5000);
      }
    }
  }

  const data = useSelector((state) => state.data);
  console.debug(data)
  if (!data.fetching && data.quote === ""){
    dispatch(fetchQuote())
  }

  $("body").attr("class", "bg-"+color+"-600")
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <QuoteBox color={color} quote={data.quote} author={data.author}/>
    </div>
  );
}

const QuoteBox = ({ color, quote, author }) => {
  function refreshPage() {
    window.location.reload();
  }

  const c = color;
  const divClass = `p-5 rounded-md w-1/2 gap-4 flex flex-col items-center justify-evenly bg-${c}-400 text-${c}-900 shadow-lg shadow-${c}-950 font-light`;
  const btnClass = `rounded bg-${c}-500 hover:bg-${c}-700 p-2`;

  return (
    <div id="quote-box" className={divClass}>
      <p id="text" className="text-center"><em className="text-3xl">"</em><strong>{quote}</strong><em className="text-3xl">"</em></p>
      <p id="author"><em>-</em> <em>{author}</em></p>
      <button onClick={refreshPage} id="new-quote" className={btnClass}><i class="fa-solid fa-rotate-right"></i> New Quote</button>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote" className=""><i class="fa-brands fa-twitter"></i> Tweet</a>
    </div>
  );
}

export default App;