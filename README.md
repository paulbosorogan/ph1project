#Phase 1 Project
Welcome to Paul's Cooking Blog - a simple website designed to inspire you with some delicious recipes

#Small Introduction 
Cooking! This has become a hobby and a great passion of mine ever since I joined university. If I can remember well, I was always attracted to the kitchen, but never really leaned into it as growing up in the countryside the boys were not expected to spend time cooking. That for sure changed once I left home and mommy's boy had to learn how to cook in order to survive. It became such a relaxing activity that I enjoy doing daily. Picture this: I sometimes bake cookies in order to snap from monotony! The proof is right here. The pictures used to present each recipe are provided by myself and you can find more on my cooking instagram account: www.instagram.com/paulxcooks.

#Inspiration 
This website was constructed inspired from the curriculum lab: Toy Tale 
source: https://learning.flatironschool.com/courses/5649/assignments/207816?module_item_id=479146

#Layout and Functionality
The recipes along with the pictures are stored inside the `db.json` file. To access this data using the JSON server please run `json-server -- watch db.json`.
In an additional terminal tab open `index.html` in the browser and take a look at the page. 

When the page has loaded, you will first see a container with a photo of me and a small introduction story about my passio for cooking. Beside this, you'll encouter 3 buttons, each designed for a type of meal: breakfast, lunch and dinner. 

Once you press on a `button`, an `event listener` will create a new `div container` for each option I have selected. The recipe will be presented as a card containing a photo as a presentation, the title, the ingredients displayed in an `ul` list and a brief description for the cooking instructions.

Each card will have an `event listener` for `hover`/`mouse over` to change from an opaque color to a solid color. In this way, the focus will be directed to the selected card. 


#Resources
*Background image source: https://img.freepik.com/premium-photo/ingredients-homemade-pizza-white-wooden-background_35641-2959.jpg?w=1380

*Styling and layout: www.w3schools.com