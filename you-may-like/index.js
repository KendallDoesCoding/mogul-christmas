const list_items = [
  {
    title: "Must Be Santa by Bryan Adams",
    link: "https://www.youtube.com/watch?v=aAuKuyAZ7YM",
  },
  {
    title: "Love This Christmas by Rick Astley",
    link: "https://www.youtube.com/watch?v=uYCUNULp868",
  },
  {
    title: "Jingle Bell Rock by Bobby Helms",
    link: "https://www.youtube.com/watch?v=R_vmuL0gjU0",
  },
  {
    title: "Joy To The World (Cover/Remix) by Pentatonix",
    link: "https://www.youtube.com/watch?v=-Xo64Q2ucQ8",
  },
  {
    title: "Joy To The World (Original) by Isaac Watts",
    link: "https://www.youtube.com/watch?v=30OaM6b48k8",
  },

  {
    title: "We Wish You a Merry Christmas by Arthur Warrell",
    link: "https://www.youtube.com/watch?v=g-OF7KGyDis",
  },
  {
    title: "Have Yourself a Merry Little Christmas by Sam Smith",
    link: "https://www.youtube.com/watch?v=rnEqv8WcVq8",
  },
  {
    title: "Sleigh Ride by The Ronettes",
    link: "https://www.youtube.com/watch?v=JVer2lCjARU",
  },
  {
    title: "It's Christmas by Chris Tomlin",
    link: "https://www.youtube.com/watch?v=10YJjdzZSPo",
  },
  {
    title: "Frosty The Snowman (Original) by The Ronettes",
    link: "https://www.youtube.com/watch?v=PQ-ULzAAb20",
  },
  {
    title: "Frosty The Snowman (Cover/Remix) by Pentatonix",
    link: "https://www.youtube.com/watch?v=18qE6_-2dQs",
  },
  {
    title: "The Christmas Song (Cover/Remix) by Justin Bieber, ft: Usher",
    link: "https://www.youtube.com/watch?v=-5TO1hqh4KY",
  },
  {
    title: "Frosty The Snowman (Cover/Remix) by Micheal Bublé, ft: The Puppini Sisters",
    link: "https://www.youtube.com/watch?v=jIyVB1b2aBs",
  },
  {
    title: "Mary, Did You Know? (Cover/Remix) by Pentatonix",
    link: "https://www.youtube.com/watch?v=ifCWN5pJGIE",
  },
  {
    title: "Santa Claus is Coming To Town (Cover) by RoomieOfficial",
    link: "https://www.youtube.com/embed/gjjb5Guc8As?start=5&end=28&autoplay=1",
  },
  {
    title: "White Christmas (Cover) by RoomieOfficial",
    link: "https://www.youtube.com/embed/gjjb5Guc8As?start=28&end=48&autoplay=1",
  },
  {
    title: "Last Christmas (Cover) by RoomieOfficial",
    link: "https://www.youtube.com/embed/gjjb5Guc8As?start=49&end=67&autoplay=1",
  },
  {
    title: "All I Want For Christmas (Cover) by RoomieOfficial",
    link: "https://www.youtube.com/embed/gjjb5Guc8As?start=67&end=81&autoplay=1",
  },
  {
    title: "Feliz Navidad (Cover) by RoomieOfficial",
    link: "https://www.youtube.com/embed/gjjb5Guc8As?start=81&end=106&autoplay=1",
  },
  {
    title:
      "I Got The Biggest Streamers To Sing In A Christmas Concert (Video by QTCinderella)",
    link: "https://www.youtube.com/watch?v=efIL2pPWlO4",
  },
  {
    title:
      "Singing The TOP 10 Most Popular CHRISTMAS SONGS (Video by RoomieOfficial)",
    link: "https://www.youtube.com/watch?v=Vewr-Y2gGkM",
  },
  {
    title: "One Guy, 5 Christmas Songs (Video by RoomieOfficial)",
    link: "https://www.youtube.com/watch?v=gjjb5Guc8As",
  },
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
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];

    let item_element = document.createElement("div");
    item_element.classList.add("item");
    item_element.innerText = item.title;
    item_element.addEventListener("click", (e) => {
      window?.open(item?.link, "_blank");
    });

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
