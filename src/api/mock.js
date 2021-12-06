const data = [
    {
      "ProductID": 7631,
      "Name": "Pillow",
      "Price": 24.99,
      "Retail Price": 24.99,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
      "Category": "Home",
      "CategoryID": 3,
      "Brand": "FabDecor",
      "Color": "White",
      "Badges": "",
      "RatingAvg": 4.2,
      "RatingCount": 8,
      "Stock": 21,
      "DateCreated": "2018-03-03 17:41:13"
    },
    {
      "ProductID": 7615,
      "Name": "Watch",
      "Price": 142,
      "Retail Price": 159.95,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Vivamus non mollis nibh. Quisque et porttitor ante, at consequat lectus. Donec pulvinar ligula dignissim, laoreet eros nec, mollis libero. Mauris consectetur nibh vel euismod efficitur. Donec molestie egestas ipsum quis venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent justo turpis, ultrices eget odio sed, ultricies imperdiet augue. Integer sit amet varius magna.",
      "Category": "Wearables",
      "CategoryID": 5,
      "Brand": "Entity Apparel",
      "Color": "Rosewood|Thyme Green|Dark Charcoal",
      "Badges": "Exclusive|Clearance",
      "RatingAvg": 4.5,
      "RatingCount": 10,
      "Stock": 8,
      "DateCreated": "2018-03-20 22:24:21"
    },
    {
      "ProductID": 8100,
      "Name": "Cordless Phone",
      "Price": 66.61,
      "Retail Price": 79.95,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Sed in lectus ultrices lacus ultricies tempus nec eu turpis. Integer a risus tincidunt, rutrum nisi eu, pulvinar eros. Vestibulum neque nisi, tincidunt id finibus non, congue non ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis erat metus, porta nec rhoncus scelerisque, ornare vel dolor. Maecenas suscipit euismod dolor, condimentum faucibus ex sagittis nec. Morbi feugiat vitae turpis eu viverra.",
      "Category": "Home",
      "CategoryID": 3,
      "Brand": "AT&T",
      "Color": "White|Black",
      "Badges": "",
      "RatingAvg": 4.2,
      "RatingCount": 11,
      "Stock": 9,
      "DateCreated": "2018-03-16 21:55:28"
    },
    {
      "ProductID": 6489,
      "Name": "Unlocked Phone",
      "Price": 109,
      "Retail Price": 129.99,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Nam in facilisis turpis. Proin vel dui commodo purus accumsan ornare sit amet sit amet ex. Integer at aliquet diam. Pellentesque feugiat convallis justo, id ultrices dui interdum pharetra. Sed rutrum nec massa ornare posuere. Cras porttitor, magna accumsan dapibus varius, ipsum ligula viverra ante, id sollicitudin nunc odio vitae magna. Fusce et neque varius, iaculis lorem quis, bibendum est.",
      "Category": "Electronics",
      "CategoryID": 2,
      "Brand": "BLU",
      "Color": "Black|Blue",
      "Badges": "Featured",
      "RatingAvg": 4.1,
      "RatingCount": 4,
      "Stock": 19,
      "DateCreated": "2018-02-28 23:37:28"
    },
    {
      "ProductID": 7732,
      "Name": "Moto G Stylus Unlocked",
      "Price": 269.99,
      "Retail Price": 299.99,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "In ornare finibus purus, eu cursus dolor scelerisque at. Donec vel finibus mauris, et volutpat dolor. Morbi nec malesuada mauris. Etiam ullamcorper nibh felis, sit amet malesuada urna sollicitudin nec. Morbi quis justo eros. Quisque porttitor lobortis ornare. Mauris vitae rutrum quam. Integer imperdiet gravida justo, id mattis felis pellentesque at.",
      "Category": "Electronics",
      "CategoryID": 2,
      "Brand": "Motorola",
      "Color": "Black",
      "Badges": "",
      "RatingAvg": 4.4,
      "RatingCount": 22,
      "Stock": 3,
      "DateCreated": "2018-03-01 20:18:20"
    },
    {
      "ProductID": 7609,
      "Name": "iPad Pro 11 inch 2nd Generation",
      "Price": 949.99,
      "Retail Price": 949.99,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "In hac habitasse platea dictumst. Vivamus tempor vel lacus nec pretium. Nunc blandit ante porttitor libero malesuada, vel tincidunt sem porttitor. Phasellus pharetra, tortor at interdum scelerisque, neque arcu semper velit, in vulputate eros dui non sem. Curabitur pretium elit tempus sapien iaculis semper. Phasellus venenatis turpis non scelerisque maximus. Cras a arcu magna.",
      "Category": "Electronics",
      "CategoryID": 2,
      "Brand": "Apple",
      "Color": "Silver",
      "Badges": "",
      "RatingAvg": 3.9,
      "RatingCount": 5,
      "Stock": 2,
      "DateCreated": "2018-03-20 22:15:34"
    },
    {
      "ProductID": 7675,
      "Name": "Desk Lamp",
      "Price": 39.49,
      "Retail Price": 44.49,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Vivamus mattis, magna a cursus malesuada, orci sem placerat elit, vel interdum dolor quam id velit. Nam dapibus odio ut nulla tristique imperdiet. Mauris vulputate mollis arcu pharetra condimentum. Proin eget auctor odio, eu dapibus magna. Pellentesque eget libero et lectus commodo malesuada. Nunc leo magna, fringilla et sollicitudin nec, efficitur et erat.",
      "Category": "Home",
      "CategoryID": 3,
      "Brand": "TaoTronics",
      "Color": "White",
      "Badges": "Featured|Free Shipping",
      "Rating Avg": 4.8,
      "Rating Count": 2,
      "Stock": 20,
      "DateCreated": "2018-03-19 20:53:04"
    },
    {
      "ProductID": 7463,
      "Name": "Wireless Color Photo Printer",
      "Price": 79.99,
      "Retail Price": 79.99,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Donec sagittis velit quam, vel molestie nisi congue in. Aliquam eros sapien, vehicula in eros et, congue viverra nisi. Aliquam suscipit, dui ut eleifend suscipit, purus ligula fermentum dui, sit amet porttitor est sapien vel lorem. Quisque et sapien eleifend, viverra lectus sed, posuere enim. Quisque tincidunt tempus placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "Category": "Office Products",
      "CategoryID": 1,
      "Brand": "HP",
      "Color": "Black",
      "Badges": "",
      "Rating Avg": 3.8,
      "Rating Count": 9,
      "Stock": 0,
      "DateCreated": "2018-03-01 19:59:05"
    },
    {
      "ProductID": 7677,
      "Name": "LED Floor lamp",
      "Price": 39.99,
      "Retail Price": 39.99,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "Nam at semper nibh. Nulla sagittis congue urna. Aenean pellentesque risus et arcu sagittis, sit amet fringilla augue imperdiet. Praesent aliquam sapien in urna vulputate, quis pretium ligula gravida. Suspendisse posuere blandit dolor vitae consectetur. Quisque iaculis felis imperdiet ex mollis mattis. Mauris lobortis venenatis tellus, quis imperdiet felis scelerisque at.",
      "Category": "Home",
      "CategoryID": 2,
      "Brand": "Miroco",
      "Color": "Silver|Black|White",
      "Badges": "",
      "RatingAvg": 5,
      "RatingCount": 1,
      "Stock": 8,
      "DateCreated": "2019-01-31 16:24:09"
    },
    {
      "ProductID": 8099,
      "Name": " Polar Ignite Fitness watch",
      "Price": 207.47,
      "Retail Price": 229.95,
      "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
      "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
      "Description": "In consequat volutpat ex non sagittis. Maecenas porta, dui a auctor faucibus, erat dolor fringilla odio, vitae iaculis risus arcu id urna. Vestibulum commodo, erat in iaculis rhoncus, tellus justo mollis sapien, sit amet ultrices justo neque non neque. Nam pretium enim ut rutrum convallis. Integer dictum ante eros, in commodo velit pharetra non. Curabitur a faucibus leo, eu cursus nibh.",
      "Category": "Wearables",
      "CategoryID": 5,
      "Brand": "Polar",
      "Color": "Black|White",
      "Badges": "",
      "Rating Avg": 4,
      "Rating Count": 1,
      "Stock": 18,
      "DateCreated": "2018-02-28 19:03:26"
    }
  ]

  export default data