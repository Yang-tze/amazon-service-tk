import React from 'react';

const Score = (props) => {
  const { stars } = props;
  return (
    <div className="star-modal-score">
      <span>
        {stars}
        &nbsp;
      </span>
      <span>
        out of 5 stars
      </span>
    </div>
  );
};

const ReviewTable = (props) => {
  const { reviews, reviewCount } = props;
  const percent = num => Math.round(num / reviewCount * 100);
  const meter = num => new Array(Math.round(num / 10)).fill(String.fromCharCode(0x2588)).join('').padEnd(10, String.fromCharCode(0x2581));

  return (
    <tbody className="review-breakdown">
      {reviews.map((el, idx) => {
        return (
          <tr key={`${idx + 1}-star`}>
            <td>
              {idx + 1}
              &nbsp;star
            </td>
            <td>
              {meter(percent(el))}
            </td>
            <td>
              {percent(el)}
              %
            </td>
          </tr>
        );
      }).reverse()}
    </tbody>
  );
};

const ReviewsModal = (props) => {
  const { reviews } = props;
  const reviewCount = reviews.reduce((acc, val) => acc + val, 0);
  const weighted = reviews.reduce((acc, val, idx) => acc + (val * parseInt(idx, 10)), 0);
  const stars = Math.round(weighted * 10 / reviewCount) / 10 + 1;

  return (
    <div className="star-modal-wrapper">
      <Score stars={stars} />
      <table className="review-table-modal">
        <ReviewTable reviews={reviews} reviewCount={reviewCount} />
      </table>
      <div>
        <a href="">
          See all&nbsp;
          {reviewCount}
          &nbsp;reviews
        </a>
      </div>
    </div>
  );
};

export default ReviewsModal;
