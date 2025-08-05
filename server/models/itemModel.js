class Item {
  constructor(id, title, description, category, location, type, imageUrl, postedBy) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location; // { lat: number, lng: number }
    this.type = type; // 'lost' or 'found'
    this.imageUrl = imageUrl;
    this.postedBy = postedBy; // userId
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Item;
