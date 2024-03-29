import { fetchCommentsById } from "../api";
import { useState, useEffect } from "react";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";
import ErrorPage from "./ErrorPage";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCommentsById(article_id)
      .then(({ data }) => {
        setComments(data);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      });
  }, [comments, article_id]);

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <div>
          <PostComment article_id={article_id} />
          {comments.map((comment) => {
            return (
              <div className="comment_wrapper" key={comment.comment_id}>
                <div id="comments_body">
                  <p>{comment.body}</p>
                  <p id="comments_author-posted">
                    Posted at {comment.created_at.slice(0, 10)} by{" "}
                    {comment.author}{" "}
                    {comment.author === "weegembump" && (
                      <DeleteComment comment_id={comment.comment_id} />
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
