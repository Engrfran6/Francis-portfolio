import './loader.css';

export default function Loader() {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="content">
          <div class="loading"></div>
          <p class="text">
            Loading <span class="dots"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
