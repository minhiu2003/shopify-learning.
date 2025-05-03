  // Khởi tạo Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Mỗi lần chỉ hiển thị 1 sản phẩm
    spaceBetween: 10, // Khoảng cách giữa các sản phẩm
    navigation: {
      nextEl: '.swiper-button-next', // Nút chuyển tiếp
      prevEl: '.swiper-button-prev', // Nút quay lại
    },
    pagination: {
      el: '.swiper-pagination', // Phân trang
      clickable: true, // Cho phép click vào phân trang
    },
    breakpoints: {
      // Thay đổi số sản phẩm hiển thị trên mỗi màn hình tùy vào kích thước
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
