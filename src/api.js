import axios from "axios";

const baseURL = "https://nc-news-be-es.onrender.com";

export const fetchArticles = (sortByQuery, orderQuery = "DESC") => {
  let endpoint = `${baseURL}/api/articles`;

  if (sortByQuery) {
    endpoint += `?sort_by=${sortByQuery}&order=${orderQuery}`;
  } else {
    endpoint += `?order=${orderQuery}`;
  }

  return axios.get(endpoint).then((body) => body);
};

export const fetchUsers = () => {
  return axios.get(`${baseURL}/api/users`).then((body) => body);
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/api/topics`).then((body) => body);
};

export const fetchArticlesByTopic = (
  topic,
  sortByQuery,
  orderQuery = "DESC"
) => {
  let endpoint = `${baseURL}/api/articles?topic=${topic}`;

  if (sortByQuery) {
    endpoint += `&sort_by=${sortByQuery}&order=${orderQuery}`;
  }

  return axios.get(endpoint).then((body) => body);
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`${baseURL}/api/articles/${article_id}`)
    .then((body) => body);
};

export const fetchCommentsById = (article_id) => {
  return axios
    .get(`${baseURL}/api/articles/${article_id}/comments`)
    .then((body) => body);
};

export const patchArticleById = (article_id, vote) => {
  return axios.patch(`${baseURL}/api/articles/${article_id}`, {
    inc_votes: vote,
  });
};

export const postCommentById = (article_id, comment) => {
  return axios.post(`${baseURL}/api/articles/${article_id}/comments`, comment);
};

export const deleteCommentById = (comment_id) => {
  return axios.delete(`${baseURL}/api/comments/${comment_id}`);
};
