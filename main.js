// const filterInput = document.querySelector(".filter");
// const userList = document.querySelector(".user-list");
// const cards = document.querySelector(".result");
// const emptyArr = [];
// apiCall();

// filterInput.addEventListener("input", (e) => searchFunction(e.target.value));
// // console.log(filterInput.value);

// async function apiCall() {
//   const res = await fetch("https://randomuser.me/api?results=50");
//   const { results } = await res.json();
//   // console.log(results);
//   console.log(emptyArr)

//   results.forEach((user) => {
//     const listing = document.createElement("li");

//     emptyArr.push(listing);
//     listing.innerHTML = `
//         <img src=${user.picture.large} />
//         <div>
//         <h5>${user.name.first} ${user.name.last}</h5>
//         </div>
//         `;
//     cards.appendChild(listing);
//   });
// };

// function searchFunction(searchWord) {
//     emptyArr.forEach((item) => {

//         if (filterInput.innerText.includes(searchWord)) {
//             item.classList.remove('hide');
//             console.log(results);
//         }
//         else {
//             item.classList.add('hide');
//         }
//     })
// };

// const filterInput = document.querySelector(".filter");
// const userList = document.querySelector(".user-list");
// const cards = document.querySelector(".result");
// const emptyArr = [];

// filterInput.addEventListener("input", (e) => searchFunction(e.target.value));
// // console.log(filterInput.value);

// const apiCall = async () => {
//   const res = await fetch("https://randomuser.me/api?results=50");
//   const { results } = await res.json();
//   // console.log(results);

//   // emptyArr.push(results);
//   console.log(emptyArr)

//     // console.log(emptyArr)

//   //   cards.innerHTML = "";

//   results.forEach((user) => {
//     const listing = document.createElement("li");

//     emptyArr.push(listing);
//     listing.innerHTML = `
//         <img src=${user.picture.large} />
//         <div>
//         <h5>${user.name.first} ${user.name.last}</h5>
//         </div>
//         `;
//     cards.append(listing);
//     // console.log(cards);
//   });
// };
// apiCall();

// const searchFunction = (searchWord) => {
//   // emptyArr.forEach((item) => {

//     // item.forEach((op2)=>{
//     //         if (filterInput.innerText.indexOf(searchWord) > -1) {
//     //         item.classList.remove('hide');
//     //         alert("hello")
//     //        }
//     //        else {
//     //         item.classList.add('hide');
//     //        }
//     // })

//     for (let i=0; i<emptyArr.length; i++) {
//       // console.log(emptyArr[0].innerText)
//       if(emptyArr[i].innerText == filterInput.value)
//       {
//         alert("mil gya");
//       break;
//       }
//       // console.log(emptyArr[i].innerText == filterInput.value)

//       // for(key in li[i].getElementsByTagName("div")s;[i]) {
//       //   if(emptyArr[i][key].indexOf(searchWord)!=-1) {
//       //     results.push(emptyArr[i]);
//       //   }

//     // console.log(emptyArr[i].getElementsByTagName("div"));
//     // console.log(filterInput.value);

//     }
//     // if (filterInput.innerText.includes(searchWord)) {
//     //   item.classList.remove("hide");
//     //   console.log(results);
//     // }

//   // });
// };

const userList = document.querySelector(".user-list");
const filter = document.querySelector(".filter");
const cards = document.querySelector(".result");
const emptyArr = [];

const apiCall = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  results.forEach((user) => {
    const listing = document.createElement("li");

    emptyArr.push(listing);
    listing.innerHTML = `
            <img src="${user.picture.large}">
            <div>
                <h5>${user.name.first} ${user.name.last}</h5>
            </div>
        `;
    cards.append(listing);
  });
};

apiCall();

const searchFunction = debounce((searchWord) => {
  // alert("1")
  emptyArr.forEach((item) => {
    console.log(item)
    item.innerText.includes(searchWord)
      ? item.classList.remove("hide")
      : item.classList.add("hide");
  });
});

filter.addEventListener("input", (e) => searchFunction(e.target.value));

function debounce(call) {
  // alert("2")
  return (...args) => {
    setTimeout(() => {
      call(...args);
    }, 2000);
  };
}