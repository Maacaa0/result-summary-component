import Main from './components/Main';
import Summary from './components/Summary';
import data from './data.json';


function App() {
  const scoreArr = data.map(x => x.score);
  const scoreAvg = Math.round(scoreArr.reduce((a,b) => a+b) / scoreArr.length);


  const summaryTabs = data.map((x,i) => {
        return <Summary value={i+1}
                        key={i}
                        img={x.icon}
                        type={x.category}
                        score={x.score} />
    })
  
  
  return (
    <div className="App">
      <div className="project_container">
        <Main scoreAvg={scoreAvg} />
        <div className='summary_container'>
        <h4>Summary</h4>
        {summaryTabs}
        <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
