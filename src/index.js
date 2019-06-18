import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Remarkable from 'remarkable';

class MarkDownEditor extends React.Component {
    constructor(props) {
        super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                value: 'Try Something...'
            };
        }

        handleChange(e) {
            this.setState({
                value: e.target.value
            });
        }
        
        getRawMarkup() {
            const md = new Remarkable();
            return {__html: md.render(this.state.value)};
        }

        render() {
            return (
                <div className="container">
                    <div className="input">
                        <h3>Input goes here</h3>
                        <textarea
                            className="input-text"
                            onChange={this.handleChange}
                            defaultValue={this.state.value}
                        />
                    </div>
                    <div className="output">
                        <h3>MarkDown</h3>
                        <div 
                            dangerouslySetInnerHTML={this.getRawMarkup()}
                            className="output-text"
                        >
                        </div>
                    </div>
                </div>
            )
        }
    }
ReactDOM.render(
    <MarkDownEditor />,
    document.getElementById('root')
);