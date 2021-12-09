import './ProgressBar.style';


class ProgressBar extends React.Component{
    constructor(props) {
        super(props);
        this.state ={currentStatus:"", stepsDone:[]};
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(this.state.currentStatus !== nextProps.status){
            this.setState({currentStatus: nextProps.status, stepsDone: [...this.state.stepsDone, nextProps.status]})
        }
     }

    render(){
        return(
            <div className="progressBar__container">
                {this.props.steps.map((element, index) => index+1 < this.props.steps.length ? <div key={index} className="stepWrapper">
                    
                    <div className={this.state.stepsDone.includes(element)?"dividerRightActive":"dividerRight"} />
                    <div className="infoContainer">
                        <div className={this.state.stepsDone.includes(element)?"elementNumberActive":"elementNumber"}>{index+1}</div>
                        <div>{element}</div>
                    </div>
                    {/* this.props.steps.length - this.state.stepsDone.length  should equal zero but i made it 1 because the checkout component rerenders
                    on final step */}
                    {index+2 === this.props.steps.length ? <div className={this.props.steps.length - this.state.stepsDone.length === 1 ?"dividerFinalActive":"dividerFinal"}/>: null }
                </div>:null)}
            </div>
        );
    }
}

export default ProgressBar;