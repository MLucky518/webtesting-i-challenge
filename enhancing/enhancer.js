const itemList = [
  {
    name: "axe",
    durability: 70,
    enhancement: 19,
  },
  {
    name: "sword",
    durability: 50,
    enhancement: 12,
  },
  {
    name: "bow",
    durability: 80,
    enhancement: 15,
  },
];

function succeed(item) {
  if (item.enhancement > 20 || typeof item.enhancement !== "number") {
    throw new Error("error");
  }

  item.enhancement = item.enhancement < 0 ? 0 : item.enhancement;

  item.enhancement += item.enhancement < 20 ? 1 : 0;
  return { ...item };
}

function fail(item) {
  if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      item.enhancement--;
    }
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, durability: item.durability - 5 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
if(item.enhancement > 0){
  
 return {...item,name:`[+${item.enhancement}] ${item.name}`}
}else{
  return { ...item };
}

  
}

module.exports = {
  succeed,
  fail,
  repair,
  get,
  itemList,
};
