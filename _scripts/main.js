$(function() {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }


  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  function counter() {

    console.log('STarted')

    const baseURL = 'https://be.letstranzact.com';
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "email": "arnav+inv@letstranzact.com",
    "password": "123456"
    });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(`${baseURL}/main/login/password-login/`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('eerre---', error))


    // const url = `${baseURL}/inventory/main-inventory/bulk_manual_adjustment_or_stock_transfer/`;
  
    // const headers = {
    //   "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR2iod4s",
    //   "content-type": "application/json",
    // };
  
    // const body = {
    //   "fifo_status": true,
    //   "from_store": null,
    //   "to_store": 582317,
    //   "comment": "",
    //   "stockData": [{
    //     "id": 2521976,
    //     "company": 441862,
    //     "itemid": "SKU00006",
    //     "product_name": "Raw Material 3",
    //     "to_show": 1,
    //     "hsn_code": "",
    //     "type": "Buy",
    //     "unit": "Kg",
    //     "category": null,
    //     "stock": 0,
    //     "reject_stock": null,
    //     "price": 100,
    //     "min_sl": null,
    //     "max_sl": null,
    //     "cp_code": "",
    //     "is_service": 0,
    //     "drawing_no": "",
    //     "serial_no": "",
    //     "custom_fields": {},
    //     "taxes": null,
    //     "history_exists": true,
    //     "other_prices": {},
    //     "last_modified_by": "Arnav Deep",
    //     "last_modified_date": "28/12/2022 - 12:46",
    //     "change_quantity": 1,
    //     "adjustment_type": "Stock Return",
    //     "unit_id": 2594308
    //   }],
    //   "action_type": "manual_adjustment"
    // };
  
    // const options = {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify(body)
    // };
  
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Process the response data here
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Handle the error
    //     console.error(error);
    //   });
  }

  counter();

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
});
