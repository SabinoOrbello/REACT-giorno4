import { Component } from "react";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  fetchCommenti = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjBmYjNkYWRhMDAwMThhNjlmNmQiLCJpYXQiOjE3MDMxNzQxNDcsImV4cCI6MTcwNDM4Mzc0N30.ZtR0WKHlPUNaXhoGJxAdC7RCC_FV64fFrr_l1XRkR-s",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    this.fetchCommenti();
    return (
      <div>
        <h3>Recensioni libro</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
export default CommentArea;
