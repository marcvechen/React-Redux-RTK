import React, { useState, useEffect } from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <span style={{ padding: 10, backgroundColor: "red", margin: 10 }}>
          {this.state.count}
        </span>
        <button
          style={{ padding: 10, backgroundColor: "red", margin: 10 }}
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          +1
        </button>
      </div>
    );
  }
  async componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoic3R1ZGVudEB0ZXN0LmNvbSIsImlhdCI6MTc4MzY3MTc4OSwiZXhwIjoxNzg0Mjc2NTg5fQ.vQcWvrRlW256Y6ADt5p1vAkY0FsoTN6ZZzjkzkbarps";
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/todos",
        { method: "GET", headers: { Authorization: `Bearer ${token}` } },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.count);
  }
  componentWillUnmount() {
    console.log("Компонент буде видалено");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
export default LifeCycle;
