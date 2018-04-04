import React from 'react';
import ReactDom from 'react-dom';

import MainNav from './portfolio/MainNav.jsx';
import Overview from './portfolio/Overview.jsx';
import Projects from './portfolio/Projects.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 'overview'
        }
    }

    componentDidMount(){
        this.tabChange(this.state.currentPage);
    }

    tabChange(val){
        if (val == 'overview'){
            ReactDom.render(<Overview />, document.getElementById('main-tab-container'));
        }
        if (val == 'projects'){
            ReactDom.render(<Projects />, document.getElementById('main-tab-container'));
        }
    }

    render(){
        return (
            <div>
                <MainNav tabChange={this.tabChange} currentPage={this.state.currentPage} />
                <div id="main-tab-container"></div>
            </div>
        );
    }
}

ReactDom.render(<Main />, document.getElementById('react-target'));