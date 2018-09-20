document.getElementById('button').addEventListener('click', loadData)

function loadData(){
  //create an HXR Object
  const xhr = new XMLHttpRequest()

  //open 
  xhr.open('GET', 'data.txt', true)

  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText)
    }
  }

  xhr.send()

  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready

  //http Statuses
  // 200: 'OK'
  // 403: 'Forbiden'
  // 404: 'Not Found'

}