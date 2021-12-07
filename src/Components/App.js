import Main from "./Main";


function App()
{
    return (
        <div className="m-10">
            <header className="text-center bg-gray-700 py-5 rounded text-white">
                <h1 className="text-4xl font-bold mb-5">Code Editor</h1>
                <p>You can write and Preview HTML and CSS code live!</p>
            </header>
            <Main />
        </div>
    );
}

export default App;