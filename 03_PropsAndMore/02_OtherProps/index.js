class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4}
                    img = "https://unsplash.com/photos/6J6IKx1v8EU"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root') );