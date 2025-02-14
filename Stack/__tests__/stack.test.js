const Stack = require("../stack");

describe("Tests for the Stack", () => {
  let myStack;
  let myLimitedStack;
  beforeEach(() => {
    myStack = new Stack();
    myLimitedStack = new Stack(3);
  });
  describe("Tests for the properties of the Stack", () => {
    test("An instance of Stack should have the property collection, initialised as an empty object", () => {
      expect(myStack).toHaveProperty("collection");
      expect(myStack.collection).toEqual({});
    });
    test("An instance of Stack should have the property quantity, initialised at 0", () => {
      expect(myStack).toHaveProperty("quantity");
      expect(myStack.quantity).toBe(0);
    });
    test("An instance of Stack should have the property maxSize, defaulted to 5 if no argument passed in", () => {
      expect(myStack).toHaveProperty("maxSize");
      expect(myStack.maxSize).toBe(5);
    });
    test("If Stack is instantiated with an argument, then the maxSize should be assigned to this value", () => {
      expect(myLimitedStack.maxSize).toBe(3);
    });
  });

  describe("Tests for the method push of the Stack", () => {
    test("When the method push is invoked on an instance of Stack it should push this item into the Stack collection", () => {
      myStack.push("item1");
      expect(myStack.collection).toEqual({ 0: "item1" });
    });
    test("When the method push is invoked multiple times on an instance of Stack it should push items in order into the Stack collection", () => {
      myStack.push("item1");
      myStack.push("item2");
      expect(myStack.collection).toEqual({ 0: "item1", 1: "item2" });
    });
    test("When the method push is invoked and the Stack collection is already full, no additional items should be added", () => {
      myLimitedStack.push("item1");
      myLimitedStack.push("item2");
      myLimitedStack.push("item3");
      myLimitedStack.push("item4");
      expect(myLimitedStack.collection).toEqual({
        0: "item1",
        1: "item2",
        2: "item3",
      });
    });
  });

  describe("Tests for the method pop of the Stack", () => {
    test("When pop is invoked on a Stack with a single item, it should pop the item off the collection", () => {
      myStack.push("item1");
      myStack.pop();
      expect(myStack.collection).toEqual({});
    });
    test("When pop is invoked on a Stack with items multiple times, it should pop the item off the collection following the LIFO principle", () => {
      myStack.push("item1");
      myStack.push("item2");
      myStack.push("item3");
      myStack.push("item4");
      myStack.pop();
      expect(myStack.collection).toEqual({
        0: "item1",
        1: "item2",
        2: "item3",
      });
      myStack.pop();
      expect(myStack.collection).toEqual({ 0: "item1", 1: "item2" });
    });
    test("If the Stack collection is not empty and the method is invoked then return the value popped", () => {
      myStack.push("item1");
      const result = myStack.pop();
      expect(result).toBe("item1");
    });
    test("If the Stack collection is empty and the method pop is invoked then return a message", () => {
      const result = myStack.pop();
      expect(result).toBe("The stack is empty.");
    });
  });

  describe("Tests for the method peek", () => {
    test("The last item pushed to the Stack collection will be returned when the method peek is invoked", () => {
      myStack.push("item1");
      myStack.push("item2");
      myStack.push("item3");
      const result = myStack.peek();
      expect(result).toBe("item3");
    });
    test("The method peek should not mutate the collection in anyway", () => {
      myStack.push("item1");
      myStack.push("item2");
      myStack.push("item3");
      myStack.peek();
      expect(myStack.collection).toEqual({
        0: "item1",
        1: "item2",
        2: "item3",
      });
    });
  });

  describe("Tests for the method isEmpty", () => {
    test("When the method is invoked on an instance of Stack that is not empty it return false", () => {
      myStack.push("item1");
      const result = myStack.isEmpty();
      expect(result).toBe(false);
    });
    test("When the method is invoked on an instance of Stack that is empty it returns false", () => {
      myStack.push("item1");
      myStack.pop();
      const result = myStack.isEmpty();
      expect(result).toBe(true);
    });
  });

  describe("Tests for the method isFull", () => {
    test("When the method is invoked on an instance of Stack that is not full it returns false", () => {
      const result = myLimitedStack.isFull();
      expect(result).toBe(false);
    });
    test("When the method is invoked on an instance of Stack that is full it returns true", () => {
      myLimitedStack.push("item1");
      myLimitedStack.push("item2");
      myLimitedStack.push("item3");
      const result = myLimitedStack.isFull();
      expect(result).toBe(true);
    });
  });
});
