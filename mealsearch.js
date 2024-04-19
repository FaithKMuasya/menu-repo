document.addEventListener('DOMContentLoaded', () => {
    const mealsContainer = document.getElementById("mealsContainer");
    const searchBtn = document.getElementById("searchButton");
    const form= document.getElementById("form");
    const searchInput= document.getElementById("search");
    const beverages= document.getElementsByClassName("viewbeverages");
    const meals= document.getElementsByClassName("viewmeals");

    // form.addEventListener("submit", (event) => {
    //     event.preventDefault();
    //     const searchTerm = searchInput.value;
    //     console.log(searchTerm);
    //});


    // Function to fetch meals data from the server
    function fetchMeals() {
        fetch("http://localhost:3000/meals")
            .then(response => {
                if (!response.ok) {
                    throw new Error('fetch failed');
                }
                return response.json();
            })

            .then(data => {
                displayMeals(data);
                //console.log(data);
            })

            .catch(error => {
                console.log(error);
            });
    }

    // function fetchBeverages() {
    //     fetch("http://localhost:3000/beverages")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('fetch failed');
    //             }
    //             return response.json();
    //         })

    //         .then(data => {
    //             displayBeverages(data);
    //             //console.log(data);
    //         })

    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

   // beverages.addEventListener('click',displayMeals);

    // Function to display meals data
    meals.addEventListener('click', async() =>  {
         mealsContainer.innerHTML = "";
         meals.forEach(meal => {
             const card = document.createElement("div");
             card.classList.add("card");
            const image = document.createElement("img");
             image.src = meals.image;
            const details = document.createElement("div");
             details.classList.add("details");
             details.innerHTML = `
                 <p>Name: ${meal.name}</p>
                 <p>Price: ${meal.price}</p>`;
            card.appendChild(image);
             card.appendChild(details);
             mealsContainer.appendChild(card);
         });
     });
   // am trying to Call fetchMeals 
   //function to fetch and 
   //display meals data
    fetchMeals();
    //displayMeals();
});

