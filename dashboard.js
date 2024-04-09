// dashboard.js

//NEWSLETTER SUBSCRIPTION

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM content loaded");

  
  const subscribedEmailsElement = document.getElementById('subscribedEmails');
  //retrieving emails from the local storage
  const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
  console.log("Subscribed emails from localStorage:", subscribedEmails);

  subscribedEmails.forEach(email => {
      const li = document.createElement('li');
      li.textContent = email;
      subscribedEmailsElement.appendChild(li);
  });

  console.log("Finished displaying subscribed emails");
});


//TEXT EDITOR POPUP

// opening the json file
openEditor()
function openEditor(jsonFile) {
  document.getElementById('editor').style.display = 'block';

  // according to the file fetch the data relevant to it
  fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
          document.getElementById('jsonTextArea').value = JSON.stringify(data, null, 2);
      })
      .catch(error => {
          console.error('Error fetching JSON data:', error);
          alert('Error fetching JSON data. Please try again later.');
          closeEditor();
      });
}

// closing the editor
closeEditor()
function closeEditor() {
  document.getElementById('editor').style.display = 'none';
}

// saving the changes
saveChangesToLocal()
function saveChangesToLocal() {
  const editedJSON = document.getElementById('jsonTextArea').value;

  try {
      const parsedData = JSON.parse(editedJSON);
// saving the edited content to the local storage
      localStorage.setItem('editedData', JSON.stringify(parsedData));

      alert('Changes saved successfully to local storage.');
      
  } catch (error) {
      console.error('Error parsing JSON:', error);
      alert('Error parsing JSON. Please ensure the input is valid JSON data.');
  }
}
