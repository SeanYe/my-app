import React, {Component, PropTypes} from 'react';

class ShowPanel extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }
 
    componentWillMount() {
        console.log('ShowPanel: componentWillMount');
    }

    componentDidMount() {
        console.log('ShowPanel: diMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('ShowPasnel: receiveProps ' + nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ShowPanel: shouldComponentUpdate, next:  ' + nextProps.text + ' current ' + this.props.text);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('ShowPanel: componentWillUpdate ' + nextProps + ' ' + nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ShowPanel: componentDidUpdate ' + prevProps + ' ' + prevState);

    }

    componentWillUnmount() {
        console.log('ShowPanel: componentWillUnmount');
    }

    render() {
        return (
            <div className="Show-panel">
                <p>{this.props.text}</p>
            </div>
        );
    }
}

ShowPanel.propTypes = {
    text: PropTypes.string.isRequired
};

export default ShowPanel;