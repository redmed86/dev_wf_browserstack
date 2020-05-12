const assert = require("assert");

describe("Sample App - View 1 Local Testing", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:7225/#!/view1");
    const title = browser.getTitle();
    assert.strictEqual(title, "My AngularJS App");
  });

  it("should have the right text content in view1", () => {
    browser.url("http://localhost:7225/#!/view1");
    const view1 = $("//body/div[1]/p");
    console.log(view1.getText());
    assert.strictEqual(view1.getText(), "This is the partial for view 1.");
  });
});
