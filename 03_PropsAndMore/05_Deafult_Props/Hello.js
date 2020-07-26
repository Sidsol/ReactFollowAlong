class Hello extends React.Component {
    static defaultProps = {
        from: 'Anthony',
        bangs: 5
    }
    render() {
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <h1>Hi {this.props.to} from {this.props.from}{bangs}</h1>
            </div>
        )
    }
}