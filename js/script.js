
/* gallery */
    document.addEventListener("click", function(e) {
        if(e.target.classList.contains("gallery-item")){
            const src = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = src;
            const myModal =new bootstrap.Modal(document.getElementById('gallery-popup'));
            myModal.show();
        }
    })

//** button on top */
    window.onscroll =  function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
        
// faq
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item h3').forEach(h3 => h3.classList.remove('active'));
      document.querySelectorAll('.faq-item p').forEach(p => p.style.display = 'none');

      if (!isActive) {
        item.classList.add('active');
        item.nextElementSibling.style.display = 'block';
      }
    });
  });