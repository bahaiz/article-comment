import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const INITIAL_COMMENT = {
  display_name: "",
  body: "",
};

const ArticleDetail = () => {
  const params = useParams();

  const [articleDetail, setArticleDetail] = useState({});
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState(INITIAL_COMMENT);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${params.id}/comments`,
        comment
      )
      .then((response) => {
        setComments([...comments, response.data]);
        setComment(INITIAL_COMMENT);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${params.id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${params.id}/comments`
        ),
      ])
      .then((response) => {
        setArticleDetail(response[0].data);
        setComments(response[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  return (
    <>
      <h2 className="ui header">{articleDetail.title}</h2>
      <p>{articleDetail.created_at}</p>
      <p>{articleDetail.content}</p>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="ui relaxed list">
            <div className="item">
              <img
                className="ui avatar image"
                src="/images/avatar/small/daniel.jpg"
              />
              <div className="content">
                <a className="header">{comment.display_name}</a>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          </div>
        );
      })}

      <h3>Write Comment</h3>
      <form
        className="ui form"
        onSubmit={handleCommentSubmit}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Your Name"
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="Comment"
          rows="3"
          onChange={handleOnChange}
          value={comment.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Comment
        </button>
      </form>
    </>
  );
};

export default ArticleDetail;
