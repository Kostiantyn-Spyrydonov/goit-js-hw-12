import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { 
  createGallery, 
  clearGallery, 
  showLoader, 
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton 
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchInput = event.target.elements['search-text'];
  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight'
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
      return;
    }

    totalHits = data.totalHits;
    createGallery(data.hits);

    if (currentPage * 15 < totalHits) {
      showLoadMoreButton();
    }

  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight'
    });
    console.error(error);
  }
});

loadMoreButton.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    hideLoader();

    createGallery(data.hits);

    smoothScroll();

    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight'
      });
    } else {
      showLoadMoreButton();
    }

  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight'
    });
    console.error(error);
  }
});

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth'
    });
  }
}