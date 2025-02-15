const Queue = require("../queue");

describe("Tests for the class Queue", () => {
  let myQueue;

  beforeEach(() => {
    myQueue = new Queue(5);
  });

  describe("Tests for the properties of class Queue", () => {
    test("An instance of Queue should have the propery maxSize which should be initialised with the argument passed in when a new instance of Queue is created", () => {
      expect(myQueue.maxSize).toBe(5);
    });
    test("An instance of Queue should have the property collection and be initialised as an empty object", () => {
      expect(myQueue).toHaveProperty("collection");
      expect(myQueue.collection).toEqual({});
    });
    test("An instance of Queue should have the property front", () => {
      expect(myQueue).toHaveProperty("front");
    });
    test("An instance of Queue should have the property back", () => {
      expect(myQueue).toHaveProperty("back");
    });
  });

  describe("Tests for the methods of Queue", () => {
    describe("Tests for the method enQueue", () => {
      test("When the method enQueue is invoked on an instance of Queue, it should add the argument passed in into the end of the queue", () => {
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        expect(myQueue.collection).toEqual({ 0: "item1", 1: "item2" });
      });
      test("When the method enQueue is invoked, it should only add to the queue if the collection has not reach the max size", () => {
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        myQueue.enQueue("item3");
        myQueue.enQueue("item4");
        myQueue.enQueue("item5");
        myQueue.enQueue("item6");
        expect(myQueue.collection).toEqual({
          0: "item1",
          1: "item2",
          2: "item3",
          3: "item4",
          4: "item5",
        });
      });
    });

    describe("Tests for the method deQueue", () => {
      test("When the method deQueue is invoked on an instance of Queue, the first item in the queue will be removed from the queue", () => {
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        myQueue.enQueue("item3");
        myQueue.enQueue("item4");
        myQueue.enQueue("item5");
        myQueue.deQueue();
        expect(myQueue.collection).toEqual({
          1: "item2",
          2: "item3",
          3: "item4",
          4: "item5",
        });
        myQueue.deQueue();
        expect(myQueue.collection).toEqual({
          2: "item3",
          3: "item4",
          4: "item5",
        });
      });
      test("When the method deQueue is invoked on an instance of Queue that is empty, it will return console log a message 'Queue is empty.", () => {
        const consoleSpy = jest.spyOn(console, "log");
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        myQueue.enQueue("item3");
        myQueue.deQueue();
        myQueue.deQueue();
        myQueue.deQueue();
        myQueue.deQueue();
        expect(consoleSpy.mock.calls[0][0]).toBe("Queue is empty.");
        consoleSpy.mockReset();
      });
    });

    describe("Tests for the method getQuantity", () => {
      test("When invoked on an instance of Queue it should the correct number of items in the queue", () => {
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        const result = myQueue.getQuantity();
        expect(result).toBe(2);
      });
      test("When invoked on an instance of Queue it should the correct number of items in the queue, even after some items have been de-queued", () => {
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        myQueue.enQueue("item3");
        myQueue.deQueue();
        const result = myQueue.getQuantity();
        expect(result).toBe(2);
      });
    });

    describe("Tests for the method isEmpty", () => {
      test("When the method is invoked on an instance of Queue that is empty, it will return true", () => {
        const result = myQueue.isEmpty();
        expect(result).toBe(true);
      });
      test("When the method is invoked on an instance of Queue that is not empty, it will return false", () => {
        myQueue.enQueue("item1");
        const result = myQueue.isEmpty();
        expect(result).toBe(false);
      });
    });

    describe("Tests for the method isFull", () => {
      test("When the method is invoked on an instance of Queue that is not full, it will return false", () => {
        const result = myQueue.isFull();
        expect(result).toBe(false);
      });
      test("When the method is invoked on an instance of Queue that is full, it will return true", () => {
        myQueue.enQueue("item1");
        myQueue.enQueue("item2");
        myQueue.enQueue("item3");
        myQueue.enQueue("item4");
        myQueue.enQueue("item5");
        const result = myQueue.isFull();
        expect(result).toBe(true);
      });
    });
  });
});
