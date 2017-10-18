import test from "ava";
import orly from "../src";

test("subscription requires specified event", t => {
  const error = t.throws(() => {
    orly.on();
  },  TypeError);

  t.is(error.message, "Specifying event is required when subscribing");
});
