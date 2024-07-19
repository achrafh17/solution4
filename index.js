document.addEventListener("DOMContentLoaded", function() {
    // List of categories
    const categories = [
      'Chicken',
      'Beef',
      'Sushi'
      // Add other categories as needed
    ];
  
    // Function to select a random category
    function getRandomCategory() {
      const randomIndex = Math.floor(Math.random() * categories.length);
      return categories[randomIndex];
    }
  
    // Update the Specials link to use a random category
    const specialsLink = document.querySelector("#specials-link");
    const randomCategory = getRandomCategory();
    specialsLink.setAttribute("onclick", `$dc.loadMenuItems('${randomCategory}');`);
  });
  