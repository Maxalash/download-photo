function btn(event) {
  // let code = '47R2204';
  document.getElementById('input_comp-kixfyipi').style.backgroundColor = 'red';
  const code = document.getElementById('input_comp-kixfyipi').value;
  let baseUrl = 'https://cloud-api.yandex.net/v1/disk/resources?path=';

  const format = '.zip';

  const apiUrl = baseUrl + code + format;

  fetch(apiUrl, {
    headers: ({  
      'Content-Type': 'application/json',
      'Authorization': 'AQAAAAATjo-BAAbNL7ZjTPxlZU-buNW4lsjKvJk',
    })
  })
    .then(res => {
      if(res.status>=400){
        document.getElementById('comp-kiz0dz15').style.visibility = 'visible';
        document.getElementById('comp-kiz0dz15').style.opacity = '1';
        return null;
      }else return res.json();
    })     
    .then(json => {
      if(json){
        // Instant downloading
        const link = (json.file)

        //Redirecting to yandex file
        // const link = (json.public_url)
        
        document.location.href = link;
      }
    })

}

function balonmove(){
  document.getElementById("ballon").style.width = '100%';
  document.getElementById("ballon").style.height = '100%';
}

var input =  document.getElementById('input_comp-kixfyipi');
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    btn(event)
  }
});

input.addEventListener('input',function(event) {
  console.log('trigger');
  input.style.backgroundColor = 'rgb(78, 212, 94)';
})

document.getElementById('down-btn').addEventListener('click',(ev)=>{ btn(ev)});

document.getElementById('comp-kik9a05i').addEventListener('click', (eve) =>{document.getElementById("POPUPS_ROOT").style.display = 'block'});

document.getElementById('comp-kipr32n41').addEventListener('click', (ev)=>{document.getElementById("POPUPS_ROOT").style.display = 'none';});

window.onload = balonmove();