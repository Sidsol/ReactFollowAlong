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
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                {slotMachineResult(s1, s2, s3)}
            </div>
        )
    }
}