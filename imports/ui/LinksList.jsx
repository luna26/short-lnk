import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";

import { Links } from "../api/links";
import LinksListItem from './LinksListItem';

export default class LinksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }
  componentDidMount() {
    this.linkTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.linkTracker.stop();
  }

  renderLinksItems = () => {
    return this.state.links.map((link, index) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
    });
  };

  render() {
    return (
      <div>
        <p>Links List</p>
        <div>{this.renderLinksItems()}</div>
      </div>
    );
  }
}
