function Thumbnail(data) {
  const { bgColor, number, title, image, descItem } = data;
  const thubnail = document.createElement('div');
  thubnail.className = 'swiper-slide swiper-slide-item';
  thubnail.innerHTML = `
            <div style="background-color:${bgColor};" class="wrapper-content">
              <span>n°${number}</span>
              <a href=""><h2 class = "thumbnail-title">${title}</h2></a>

              <div class="wrapper-content-thumbnail">
                <div class="img-thumbnail">
                  <img
                    class="block w-full"
                    src="${image}"
                    alt=""
                  />
                </div>
                <div class="desc-thumbnail">
                  ${descItem}

                  <div class="btn-readmore">
                    <span>Read more</span>
                    <img src="../assets/svgs/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
               <a href="" class="btn-readmore btn-readmore-thumbnail">
                <span>Read more</span>
                <img src="../assets/svgs/arrow.svg" alt="" />
              </a>
            </div>
  `;
  return thubnail;
}
