const list_items = [
  "Must Be Santa by Bryan Adams",
  "Love This Christmas by Rick Astley",
  "Jingle Bell Rock by Bobby Helms",
  "Joy To The World (Cover/Remix) by Pentatonix",
  "Joy To The World (Original) by Isaac Watts",
  "We Wish You a Merry Christmas by Arthur Warrell",
  "Have Yourself a Merry Little Christmas by Sam Smith",
  "Sleigh Ride by The Ronettes",
  "Frosty The Snowman (Original) by The Ronettes",
  "Frosty The Snowman (Cover/Remix) by Pentatonix",
  "Frosty The Snowman (Cover/Remix) by Micheal Bublé, ft: The Puppini Sisters",
  "Mary, Did You Know? (Cover/Remix) by Pentatonix",
  "Santa Claus is Coming To Town (Cover) by RoomieOfficial",
  "White Christmas (Cover) by RoomieOfficial",
  "Last Christmas (Cover) by RoomieOfficial",
  "All I Want For Christmas (Cover) by RoomieOfficial",
  "Feliz Navidad (Cover) by RoomieOfficial",
  "I Got The Biggest Streamers To Sing In A Christmas Concert (Video by QTCinderella)",
  "Singing The TOP 10 Most Popular CHRISTMAS SONGS (Video by RoomieOfficial)",
  "One Guy, 5 Christmas Songs (Video by RoomieOfficial)",
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement("div");
    item_element.classList.add("item");
    item_element.innerText = item;

    wrapper.appendChild(item_element);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
