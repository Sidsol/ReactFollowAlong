class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Ringo" from="Paul"/>
                <Hello to="Ringo" from="Sonny"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root') );