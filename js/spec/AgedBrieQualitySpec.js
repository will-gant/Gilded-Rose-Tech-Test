describe("agedBrieQuality", function() {

  function DummyItem(name, quality) {
    this.name = name;
    this.quality = quality
  }

  it("increments quality by 1 if below 50", function() {
    shop = new Shop()
    item = new DummyItem("Aged Brie", 0)
    shop.agedBrieQuality(item);
    expect(item.quality).toEqual(1);
  });

  it("doesn't increment quality if 50 or above", function() {
    shop = new Shop()
    item = new DummyItem("Aged Brie", 50)
    shop.agedBrieQuality(item);
    expect(item.quality).toEqual(50);
  })
});
