import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const JobDetail = (props) => {
  let params = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="header"></div>
        <div className="job_view">
          <div className="job_title">
            <span>{item.full_title}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{item.department}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>
              {item.location.country} / {item.location.region}
            </span>
          </div>
          <br></br>
          <div>
            {item.employment_type}, {item.industry}
          </div>
          <br></br>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: item.full_description }}
          />

          <br></br>
          <Link className="applyJob" to={`/applyJob/${item.shortcode}`}>
            Apply
          </Link>
          <br></br>
          <br></br>
          <div>
            <h4>Sharing</h4>
            <FacebookShareButton
              url={`${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`}
              quote={item.full_title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <div className="Demo__some-network">
              <FacebookMessengerShareButton
                url={`${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`}
                appId="521270401588372"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
            </div>

            <div className="Demo__some-network">
              <TwitterShareButton
                url={`${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`}
                title={item.full_title}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>

            <div className="Demo__some-network">
              <TelegramShareButton
                url={`${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`}
                title={item.full_title}
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>

            <div className="Demo__some-network">
              <WhatsappShareButton
                url={`${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`}
                title={item.full_title}
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>

            <div className="Demo__some-network">
              <LinkedinShareButton
                url={`${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default JobDetail;
