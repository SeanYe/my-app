import React, {Component} from 'react';

class UnValidButton extends Component {
    constructor(props) {
        super(props);
        this.link = props.link;
        this.txt = props.txt;
        this.clickCallBack = props.clickCallBack;
    }

    onClick = (e) => {
        this.clickCallBack({ link: this.link });
    }

    componentWillMount() {
        console.log('UnValidButton: componentWillMount');
    }

    componentDidMount() {
        console.log('UnValidButton: diMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('UnValidButton: receiveProps' + nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('UnValidButton: shouldComponentUpdate' + nextProps + ' ' );
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('UnValidButton: componentWillUpdate' + nextProps + ' ' + nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('UnValidButton: componentDidUpdate' + prevProps + ' ' + prevState);

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div className="Un-valid-button">
                <button onClick={this.onClick}> {this.props.txt}</button>
            </div>
        );
    }
}

UnValidButton.propTypes = {
    link: React.PropTypes.string.isRequired,
    txt: React.PropTypes.string.isRequired,
    clickCallBack: React.PropTypes.func.isRequired
};

export default UnValidButton;