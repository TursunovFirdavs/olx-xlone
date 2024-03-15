import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:8080/" });

const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method == "post"
    ) {
      axios
        .post("http://localhost:8080/all", JSON.parse(config.data))
        .then((res) => {
          console.log(res.data);
        });
    }
  }, 500);

  return;
};

request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3MTA0MTAwMjksImV4cCI6MTcxMDQxMzYyOSwic3ViIjoiMSJ9.580eQnXFjUkkLnWAL97S02ODKnPT8Jk1ZPLJcb6o3Rc`;
    PostData(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
