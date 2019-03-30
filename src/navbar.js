import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(evt) {
    evt.preventDefault();
    this.props.onClickHandler(this.refs.searchBox.value);
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-brand">
            {this.props.title}
          </div>
          <div className="collapse navbar-collapse">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" ref="searchBox" className="form-control" placeholder={this.props.hint} />
                <button className="btn btn-info" onClick={this.clickHandler}>{this.props.buttonTxt}</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  title: React.PropTypes.string,
  hint: React.PropTypes.string,
  buttonTxt: React.PropTypes.string,
  onClickHandler: React.PropTypes.func
};

NavBar.defaultProps = {
  title: 'Github',
  hint: 'Github Username',
  buttonTxt: 'Search',
  onClickHandler: () => {}
};
export default NavBar;
