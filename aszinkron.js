export function getAdat(vegpont, callback) {
  fetch(vegpont, {
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

//fetch().then().then().catch()

export function postAdat(vegpont, adat) {
  fetch(vegpont, {
    method: "POST",
    body: JSON.stringify(adat), /* adat objektumunkat átalakítja JSON-szöveggé */
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export function deleteAdat(vegpont, id) {
  fetch(vegpont+"/"+id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export function putAdat(vegpont, adat, id) {
  fetch(vegpont, {
    method: "PUT",
    body: JSON.stringify(adat), /* adat objektumunkat átalakítja JSON-szöveggé */
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
