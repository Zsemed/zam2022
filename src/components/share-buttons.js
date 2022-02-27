import * as React from "react";
// import { Facebook, Twitter} from 'react-feather';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookMessengerShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
} from 'react-share';

const ShareButtons = ({ url, title, description }) => (
  <div className="post-meta-share-icons">
    <FacebookShareButton url={url} quote={description}>
      <FacebookIcon size={32} round={true}/>
    </FacebookShareButton>
    <FacebookMessengerShareButton url={url} quote={description}>
      <FacebookMessengerIcon size={32} round={true}/>
    </FacebookMessengerShareButton>
    <TwitterShareButton url={url} title={description}>
      <TwitterIcon size={32} round={true}/>
    </TwitterShareButton>
    <EmailShareButton url={url} quote={description}>
      <EmailIcon size={32} round={true}/>
    </EmailShareButton>
  </div>
);
export default ShareButtons