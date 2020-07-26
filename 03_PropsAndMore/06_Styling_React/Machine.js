function slotMachineResult(s1, s2, s3) {
    if (s1 === s2 & s2 === s3) {
        return <p>You win!</p>
    } else {
        return <p>You Loose!</p>
    }
}

class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = s1 === s2 && s2 ===s3;
        const colors = {fontSize: "50px", backgroundColor: "purple"};
        return (
            <div className="machine">
                <p style={colors}>{s1} {s2} {s3}</p>
                <p className={winner ? 'win' : 'loose'}>{winner ? 'You Won!' : 'You lost!'}</p>
            </div>
        )
    }
}