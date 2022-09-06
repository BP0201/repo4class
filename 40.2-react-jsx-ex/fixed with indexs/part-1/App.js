const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Ben" />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))