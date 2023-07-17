window.addEventListener('load', function () {
  const masonryLayout = function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const containerWidth = document.querySelector('.image-gallery').offsetWidth;

    let columnCount = 3; // Number of columns
    let columnWidth = 200; // Initial column width (adjust as needed)
    let gapSize = 10; // Gap between images (adjust as needed)

    // Calculate the optimal number of columns based on container width
    while (containerWidth / columnCount < columnWidth + gapSize) {
      columnCount--;
    }

    // Calculate the new column width based on the optimal number of columns
    columnWidth = Math.floor(containerWidth / columnCount) - gapSize;

    // Set the width for each image container
    imageContainers.forEach(function (container) {
      container.style.width = columnWidth + 'px';
    });
  };

  // Call the masonryLayout function on page load and window resize
  masonryLayout();
  window.addEventListener('resize', masonryLayout);
});
