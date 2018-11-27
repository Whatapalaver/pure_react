import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <LikeButton />
          <RetweetButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/b625f9e5e6ed89014a5b8575277850c3"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less than 140 characters</div>;
}

function NameWithHandle() {
  return (
    <span className="name-wth-handle">
      <span className="name">whatapalaver</span>
      <span className="handle">@DoctorMoxie</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.getElementById("root"));
