import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class LinksListItem extends Component {
  render(){
    console.log('PROPS', this.props);
    return(
      <div>
          <p>{this.props.url}</p>
          <p>{this.props.shortUrl}</p>
      </div>
    );
  };
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
}