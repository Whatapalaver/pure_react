import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";

var testTweet = {
  message: "Something about cats. Meowww!",
  gravatar: "b625f9e5e6ed89014a5b8575277850c3",
  author: {
    handle: "catwoman",
    name: "Catherine Feline"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <LikeButton count={tweet.likes} />
          <RetweetButton count={tweet.retweets} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  var url = `https://robohash.org/set_set4/${hash}?bgset=bg1`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-wth-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count"> {count} </span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

function getLikeCount(count) {
  if (count > 0) {
    return <span className="like-count"> {count} </span>;
  } else {
    return null;
  }
}

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {getLikeCount(count)}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
