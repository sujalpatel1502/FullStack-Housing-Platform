import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  console.log("query,",query);
  const postPromise = apiRequest("/posts?" + query);
  // console.log("pppppppspsppspss",postPromise.data);
  // return postPromise.data
  return defer({
    postResponse: postPromise,
  });
};

// export const profilePageLoader = async () => {
//   const postPromise = apiRequest("/users/profilePosts");
//   const chatPromise = apiRequest("/chats");
//   console.log("postststtstss",postPromise);
//   return defer({
//     postResponse: postPromise,
//     chatResponse: chatPromise,
//   });
// };