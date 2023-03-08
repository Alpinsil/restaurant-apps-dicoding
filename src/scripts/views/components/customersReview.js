export default function CustomersReview(listReview) {
  let list = '';
  listReview.forEach((review) => {
    list += `
    <div class="review__card">
      <h4>${review.name}</h4>
      <p>${review.review}</p>
      <span>${review.date}</span>
    </div>`;
  });
  return list;
}
