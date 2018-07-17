import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

class MenuBar extends React.Component {
	constructor(props) {
		super(props)
	}

    nextPath(path) {
         this.props.history.push(path);
    }
	render() {
		return (
               <div>
                    <button type="button" className="btn btn-outline-info" onClick={() => this.nextPath('/')}>Now Showing</button>
                    <button type="button" className="btn btn-outline-info" onClick={() => this.nextPath('/upcoming-movie')}>Coming Soon </button>
               </div>
              )
	}
}


export default withRouter(MenuBar)

 