import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          <p>Are you sure you want to exit?</p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.sentences()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.sentences()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.sentences()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.sentences()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
