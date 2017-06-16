describe("conjuredQuality", function() {

  function DummyItem(name, quality) {
    this.name = name;
    this.quality = quality
  }

  it("degrades in quality twice as fast as a 'normal' item", function(){
    const shop = new Shop()
    const item = new DummyItem("Conjured", 5)
    shop.conjuredQuality(item);
    expect(item.quality).toEqual(5 - (shop.degradeRate * 2));
  });
});