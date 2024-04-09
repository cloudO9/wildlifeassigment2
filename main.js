//page 1


//fetching the index file
fetch('.//index1.json')
  .then(response => response.json())
  .then(data => {
    //saving to local storage
    localStorage.setItem('main-image-text', data['main-image-text']);
    localStorage.setItem('bio-title', data['bio-title']);
    //using stringify to make it a string
    localStorage.setItem('bio-text', JSON.stringify(data['bio-text']));

    //getting items by the id name
    const mainImageTextElement = document.getElementById('main-image-text');
    if (mainImageTextElement) {
      mainImageTextElement.textContent = localStorage.getItem('main-image-text');
    }

    const bioTitleElement = document.getElementById('bio-title');
    if (bioTitleElement) {
      bioTitleElement.textContent = localStorage.getItem('bio-title');
    }

    const bioTextElement = document.getElementById('bio-text');
    if (bioTextElement) {
  
      const bioText = JSON.parse(localStorage.getItem('bio-text'));
      bioText.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph.text;
        bioTextElement.appendChild(p);
      });
    }
  })
  .catch(error => {
  
    console.error('Error fetching data:', error);
    alert('There was an error fetching the data. Please try again later.');
  });

  //page 2

  //fetching the jason file
  fetch('.//index2.json')
  .then(response => response.json())
  .then(data => {
    
    //saving the it to the local storage
    localStorage.setItem('text2-overlay-title', data['text2-overlay-title']);
    localStorage.setItem('text2-overlay-text', data['text2-overlay-text']);

    localStorage.setItem('text3-overlay-title', data['text3-overlay-title']);
    localStorage.setItem('text3-overlay-text', data['text3-overlay-text']);

    localStorage.setItem('text4-overlay-title', data['text4-overlay-title']);
    localStorage.setItem('text4-overlay-text', data['text4-overlay-text']);

    //loading the content
    const text2overTitleElement = document.getElementById('text2-overlay-title');
    if (text2overTitleElement) {
      text2overTitleElement.textContent = localStorage.getItem('text2-overlay-title');
    }

    const text2overlayTextElement = document.getElementById('text2-overlay-text');
    if (text2overlayTextElement) {
      text2overlayTextElement.textContent = localStorage.getItem('text2-overlay-text');
    }


    const text3overTitleElement = document.getElementById('text3-overlay-title');
    if (text3overTitleElement) {
      text2overTitleElement.textContent = localStorage.getItem('text3-overlay-title');
    }

    const text3overlayTextElement = document.getElementById('text3-overlay-text');
    if (text3overlayTextElement) {
      text3overlayTextElement.textContent = localStorage.getItem('text3-overlay-text');
    }


    const text4overTitleElement = document.getElementById('text4-overlay-title');
    if (text4overTitleElement) {
      text4overTitleElement.textContent = localStorage.getItem('text4-overlay-title');
    }

    const text4overlayTextElement = document.getElementById('text4-overlay-text');
    if (text4overlayTextElement) {
      text4overlayTextElement.textContent = localStorage.getItem('text4-overlay-text');
    }

    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    alert('There was an error fetching the data. Please try again later.');
  });

//page 3

//fetching the json
fetch('./index3.json')
  .then(response => response.json())
  .then(data => {
    
    //saving it to the local storage 
    localStorage.setItem('head_logo', JSON.stringify(data['head_logo']));
    localStorage.setItem('section', JSON.stringify(data['section']));

    const headLogo = JSON.parse(localStorage.getItem('head_logo'));
    const section = JSON.parse(localStorage.getItem('section'));

    //loading the relevant content
    const head1Element = document.getElementById('head1');
    if (head1Element) {
      head1Element.textContent = headLogo.head1;
    }

    const para1Element = document.getElementById('para1');
    if (para1Element) {
      para1Element.textContent = headLogo.para1;
    }

    const flexheadingElement = document.getElementById('flexheading');
    if (flexheadingElement) {
      flexheadingElement.textContent = section.flexheading;
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    alert('There was an error fetching the data. Please try again later.');
  });

  //page 4

  //fetching the json
  fetch('./index4.json')
  .then(response => response.json())
  .then(data => {

    //saving the data to local storage as a whole
    localStorage.setItem('leopardData', JSON.stringify(data));

    //populating the html page with the relevant tag name
    document.getElementById('venue1').getElementsByTagName('p')[0].textContent = data.venue1.title + '\n\n' + data.venue1.text;
    document.getElementById('venue2').getElementsByTagName('p')[0].textContent = data.venue2.title + '\n\n' + data.venue2.text;
    document.getElementById('venue3').getElementsByTagName('p')[0].textContent = data.venue3.title + '\n\n' + data.venue3.text;

    // Populate threats
    document.getElementById('threat1').getElementsByTagName('h2')[0].textContent = data.threat1.title;
    document.getElementById('threat1').getElementsByTagName('p')[0].textContent = data.threat1.text;

    document.getElementById('threat2').getElementsByTagName('h2')[0].textContent = data.threat2.title;
    document.getElementById('threat2').getElementsByTagName('p')[0].textContent = data.threat2.text;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    alert('There was an error fetching the data. Please try again later.');
  });


  //page 5

  //fetching the json
  fetch('./index5.json')
  .then(response => response.json())
  .then(data => {

    //saving to the local storage, using stringify
      localStorage.setItem('indigenousData', JSON.stringify(data));

      //loading the content
    const indigenousData = data.indigineous;
    const indigenousContainer = document.getElementById('indigineous');

    indigenousData.forEach((item, index) => {
      const paragraph = indigenousContainer.getElementsByTagName('p')[index];
      paragraph.textContent = item.text;
    });

  
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    alert('There was an error fetching the data. Please try again later.');
  });

  //page 6

  //fetching the json
  fetch('.//index6.json')
  .then(response => response.json())
  .then(data => {

    //saving to the local storage
    localStorage.setItem('ccontainer-text', data['ccontainer-text']);
    localStorage.setItem('dcontainer-text', data['dcontainer-text']);

    localStorage.setItem('econtainer-text', data['econtainer-text']);
    localStorage.setItem('fcontainer-text', data['fcontainer-text']);

//loading the content
    const ccontainerTextElement = document.getElementById('ccontainer-text');
    if (ccontainerTextElement) {
      ccontainerTextElement.textContent = localStorage.getItem('ccontainer-text');
    }

    const dcontainerTextElement = document.getElementById('dcontainer-text');
    if (dcontainerTextElement) {
      dcontainerTextElement.textContent = localStorage.getItem('dcontainer-text');
    }

    const econtainerTextElement = document.getElementById('econtainer-text');
    if (econtainerTextElement) {
      econtainerTextElement.textContent = localStorage.getItem('econtainer-text');
    }

    const fcontainerTextElement = document.getElementById('fcontainer-text');
    if (fcontainerTextElement) {
      fcontainerTextElement.textContent = localStorage.getItem('fcontainer-text');
    }
  
})
.catch(error => {
  console.error('Error fetching data:', error);
  alert('There was an error fetching the data. Please try again later.');
});


//page 7

//fetching the json
fetch('.//index7.json')
.then(response => response.json())
.then(data => {

  //saving to local storage
  localStorage.setItem('ccontainer-text', data['ccontainer-text']);
  localStorage.setItem('dcontainer-text', data['dcontainer-text']);

  localStorage.setItem('econtainer-text', data['econtainer-text']);
  localStorage.setItem('fcontainer-text', data['fcontainer-text']);

//loading the coontent
  const ccontainerTextElement = document.getElementById('ccontainer-text');
  if (ccontainerTextElement) {
    ccontainerTextElement.textContent = localStorage.getItem('ccontainer-text');
  }

  const dcontainerTextElement = document.getElementById('dcontainer-text');
  if (dcontainerTextElement) {
    dcontainerTextElement.textContent = localStorage.getItem('dcontainer-text');
  }

  const econtainerTextElement = document.getElementById('econtainer-text');
  if (econtainerTextElement) {
    econtainerTextElement.textContent = localStorage.getItem('econtainer-text');
  }

  const fcontainerTextElement = document.getElementById('fcontainer-text');
  if (fcontainerTextElement) {
    fcontainerTextElement.textContent = localStorage.getItem('fcontainer-text');
  }

})

.catch(error => {
console.error('Error fetching data:', error);
alert('There was an error fetching the data. Please try again later.');
});
