const App = () => (
    <div>
        <Tweet username="celticsboy12" name="celtic" date="8/31/22" message="Celtics rule!!" />
        <Tweet username="leakyFaucet" name="jim" date="12/24/21" message="Hello world." />
        <Tweet username="bananaLover" name="monkey" date="6/6/16" message="I LOVE BANANAS" />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))