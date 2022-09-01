const App = () => (
    <div>
        <Person name="Joe" age={21} hobbies={["videogames", "working out", "hikes"]} />
        <Person name="Kat" age={7} hobbies={["music", "driving", "swimming"]} />
        <Person name="BillybobJr" age={18} hobbies={["reading", "playing chess", "soccer"]} />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))