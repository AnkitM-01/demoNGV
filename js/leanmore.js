document.getElementById('learnMoreButton').addEventListener('click', () => {
    const imageContainer = document.getElementById('imageContainer');
    const textContainer = document.getElementById('textContainer');
    const aboutus=document.getElementsByClassName("aboutuscontainer")[0];
    
    // Toggle the classes
    // console.log(aboutus.className,'about  ')
    aboutus.className="h-100"
    imageContainer.className = 'col-lg-12';
    textContainer.className = 'col-lg-12';
  });
  