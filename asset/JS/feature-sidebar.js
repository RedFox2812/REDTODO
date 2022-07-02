const tabListItem = document.querySelectorAll(".tabList-item");
[...tabListItem].forEach(item => item.addEventListener("click", handleClickTab));
function handleClickTab(e) {
    [...tabListItem].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
}