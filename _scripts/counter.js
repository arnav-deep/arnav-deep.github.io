export function counter() {

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