// import ReactDOM from "react-dom/client";

function Welcome(props) {
    return <h1>Welcome {props.name}!</h1>
}

const App = (props) => {
    return (
        <div>
            <Welcome name="Mike"/>
            <Welcome name="Steve"/>
            <Welcome name="Jane"/>
        </div>
    );
}

export default App;

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );
