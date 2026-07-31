import React, { memo } from "react";

const TaskItem = memo(({ text }) => {
  return <li>{text}</li>;
});

export default TaskItem;
