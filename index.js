function btn(event) {
  // let code = '47R2204';
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
        return null;
      }else return res.json();
    })     
    .then(json => {
      if(json){
        // Instant downloading
        // const link = (json.file)

        //Redirecting to yandex file
        const link = (json.public_url)
        
        document.location.href = link;
      }
    })

    document.getElementById('input_comp-kixfyipi').value = ''
}

document.getElementById('down-btn').addEventListener('click',(ev)=>{ btn(ev)});

document.getElementById('comp-kik9a05i').addEventListener('click', (eve) =>{document.getElementById("POPUPS_ROOT").style.display = 'block'});

document.getElementById('comp-kipr32n41').addEventListener('click', (ev)=>{document.getElementById("POPUPS_ROOT").style.display = 'none';})