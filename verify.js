//https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-urll

function validURL() {
    let validURL = document.getElementById('name').value;
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if (pattern.test(validURL)){
        alert('Website is secure');
         return true;
    } else {
        alert('You are advised not to go to the website');
         return false;
    }
  } 