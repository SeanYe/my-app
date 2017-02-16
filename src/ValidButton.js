import React, {Component} from 'react';

class ValidButton extends Component {
    constructor(props) {
        super(props);
        this.link = props.link;
        this.txt = props.txt;
        this.clickCallBack = props.clickCallBack;
    }

    onClick = (e) => {
        this.props.clickCallBack({ link: this.props.link });
    }

    componentWillMount() {
        console.log('ValidButton: componentWillMount');
    }

    componentDidMount() {
        console.log('ValidButton: diMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('ValidButton: receiveProps' + nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ValidButton: shouldComponentUpdate' + nextProps + ' ' );
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('ValidButton: componentWillUpdate' + nextProps + ' ' + nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ValidButton: componentDidUpdate' + prevProps + ' ' + prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div className="Valid-button">
                <button onClick={this.onClick}> {this.props.txt} </button>
            </div>
        );
    }
}

ValidButton.propTypes = {
    link: React.PropTypes.string.isRequired,
    txt: React.PropTypes.string.isRequired
};

export default ValidButton;