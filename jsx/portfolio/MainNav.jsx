import React from 'react';

import MainNavStyles from './styles/MainNavStyles.css.js';

class MainNav extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage: props.currentPage
		};
	}

    render() {
        return (
        	<div style={MainNavStyles.mainNav}>
	        	<div class="row" style={MainNavStyles.navTop}>
		            <div class="container">
		                <div class="text-center">
		                	<img style={MainNavStyles.picture} src="portfolio-react/images/eric-zhu.jpg"></img>
		                </div>
		                <div style={MainNavStyles.nameDiv}>ERIC ZHU</div>
		            </div>
	            </div>
				<div class="row" style={MainNavStyles.navBottom}>
					<div class="container">
						<div class="row menu-row visible-md-block visible-lg-block">
							<div class="col-lg-3" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'overview')}>
								<div class="nav-text"><i class="fa fa-users" aria-hidden="true"></i> Overview</div>
							</div>
							<div class="col-lg-3" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'projects')}>
								<div class="nav-text"><i class="fa fa-futbol-o" aria-hidden="true"></i> Projects</div>
							</div>
							<div class="col-lg-3" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'resume')}>
								<div class="nav-text"><i class="fa fa-file-image-o" aria-hidden="true"></i> Resume</div>
							</div>
							<div class="col-lg-3" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'contact')}>
								<div class="nav-text"><i class="fa fa-paper-plane" aria-hidden="true"></i> Contact</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export default MainNav;