const assert = require("assert");

describe("Sample App - Local Testing", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:7225/#!/view1");
    const title = browser.getTitle();
    assert.strictEqual(title, "My AngularJS App");
  });

  it("should have the right text content in view1", () => {
    browser.url("http://localhost:7225/#!/view1");
    const view1 = $("//body/div[1]/p");
    console.log(view1.getText());
    assert.strictEqual(view1.getText(), "This is the 2 partial for view 1.");
  });

  it("should have the right text content in view2", () => {
    browser.url("http://localhost:7225/#!/view2");
    const view2 = $("//body/div[1]/p[1]");
    assert.strictEqual(view2.getText(), "This is the partial for view 2.");
  });

  it("should have the right text content in viewDemo", () => {
    browser.url("http://localhost:7225/#!/viewDemo");
    const viewDemo = $("//body/div[1]/p[2]");
    assert.strictEqual(viewDemo.getText(), "This demo is going to pass!");
  });
});
