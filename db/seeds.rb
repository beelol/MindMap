# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_user = User.create({
    username: "Guest",
    password: "the_best",
    email: "guest@best.com",
    picture_url: "http://wooooooooo.com/picture"
  })

listings = Listing.create([
    # User 1 Listings
    {name: "My Thoughts", author_id: 1},
    {name: "All The Colors", author_id: 1},
    {name: "Lorem Ipsum", author_id: 1},
    {name: "Great Listing", author_id: 1},
    {name: "Amazing Listing", author_id: 1},

    # User 2 Listings
    {name: "My Thoughts", author_id: 2},
    {name: "All The Colors", author_id: 2},
    {name: "Lorem Ipsum", author_id: 2},
    {name: "Great Listing", author_id: 2},
    {name: "Amazing Listing", author_id: 2},
  ])

boards = Board.create([
    # User 1 boards
    {name: "My Thoughts", author_id: 1, ord: 1, listing_id: 2},
    {name: "My Thoughts The Sequel", author_id: 1, ord: 1, listing_id: 1},
    {name: "My Thoughts The Threequel", author_id: 1, ord: 1, listing_id: 2},
    {name: "My Thoughts The Quadquel", author_id: 1, ord: 1, listing_id: 1},
    {name: "My Thoughts The Quintquel", author_id: 1, ord: 1, listing_id: 2},

    # User 2 boards
    {name: "All", author_id: 2, ord: 1, listing_id: 1},
    {name: "The Ducks", author_id: 2, ord: 1, listing_id: 2},
    {name: "Are Swimming", author_id: 2, ord: 1, listing_id: 1},
    {name: "In The", author_id: 2, ord: 1, listing_id: 2},
    {name: "Water", author_id: 2, ord: 1, listing_id: 1},

    # this one is a sub board pointing to the My Thoughts board
    {name: "Water", author_id: 2, master_board_id: 1, ord: 1, listing_id: 1},
  ])


text_boxes = TextBox.create([
  {
    name: "My favorite text box",
    text: "Some good text",
    ord: 1,
    author_id: 1,
    board_id: 1
  },
  {
    name: "My second favorite text box",
    text: "Some good text",
    ord: 1,
    author_id: 1,
    board_id: 2
  },
  {
    name: "omg text box",
    text: "Some good text",
    ord: 1,
    author_id: 1,
    board_id: 3
  }

])
