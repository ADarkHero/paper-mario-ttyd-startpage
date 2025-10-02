const title = localStorage.getItem("title");
const subtitle = localStorage.getItem("subtitle");

const el = document.getElementById(`title`);
if (el) el.innerHTML  = title;

const el1 = document.getElementById(`subtitle`);
if (el1) el1.innerHTML  = localStorage.getItem("subtitle");

document.title = `${title} - ${subtitle}`;