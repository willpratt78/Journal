// Busines Logic

export function journal () {

function BlogPosts() {
  this.titles = [];
  this.bodies = [];
}

BlogPosts.prototype.addEntry = function(entry) {
  this.titles.push(entry);

};

