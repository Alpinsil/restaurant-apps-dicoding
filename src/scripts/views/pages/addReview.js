import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../globals/api-endpoint';

const AddReview = {
  async render() {
    return `
  <section class="hero" id="hero">

  <picture>
  <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
  <img src="./images/hero-image_4-large.jpg" 
       alt="Hero Image">
  </picture>
  </section>
  <div class="container__addReview">
    <h1>Tambah Komentar</h1>
    <form>
      <div class="input__field">
        <label for="name">Nama : </label>
        <input type="text" id="name" placeholder="Masukkan Nama Anda" required name="name" >
      </div>
      <div class="input__field">
        <label for="review">Comment : </label>
        <textarea type="text" id="review" placeholder="Tulis Review Anda" required name="review"></textarea>
      </div>
      <button id="buttonSubmit" >Submit</button>
    </form>
  </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const button = document.querySelector('#buttonSubmit');
    const name = document.querySelector('#name');
    const review = document.querySelector('#review');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const postData = {
        id: url.id,
        name: name.value,
        review: review.value,
      };

      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      };

      fetch(API_ENDPOINT.AddReview, fetchOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  },
};

export default AddReview;
