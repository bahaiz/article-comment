import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
    const params = useParams();

    const [articleDetail, setArticleDetail] = useState({})

    useEffect(() => {
      axios
        .get(`https://react-yazi-yorum.herokuapp.com/posts/${params.id}`)
        .then((response) => {
          setArticleDetail(response.data);
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
      </>
    );
};

export default ArticleDetail;