document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelectorAll('.text-section');
    
    text.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 1s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
  })
  
  document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelectorAll('.image-section');
    
    image.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 1s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
  })
    
    const contactNumber = document.getElementById("contact-number");

    contactNumber.addEventListener("click", function() {
      const tempInput = document.createElement("input");
      tempInput.value = contactNumber.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      contactNumber.textContent = "Copied!";
      setTimeout(() => {
        contactNumber.textContent = "📱 +62 811-3055-0003"; 
      }, 1200);
    });
    