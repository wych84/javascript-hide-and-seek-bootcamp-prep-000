function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy (n) {
  var rank = document.querySelectorAll (`.ranked-list`);
  for (var i=0; i<rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  var node = document.getElementById(`#grand-node`);
  var nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node
}