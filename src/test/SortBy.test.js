import { render, cleanup, fireEvent } from "@testing-library/react";
import SortBy from "../components/SortBy";

afterEach(cleanup);

test("calls the setSortBy callback function on change", () => {
  const handleChange = jest.fn();

  const { container, getByLabelText } = render(
    <SortBy setSortBy={handleChange} />
  );

  const select = getByLabelText(/sort by/i);
  const option1 = container.getElementsByTagName("option").item(0);
  const option2 = container.getElementsByTagName("option").item(1);
  const option3 = container.getElementsByTagName("option").item(2);

  fireEvent.change(select, { target: { value: "low" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(option1.selected).toBe(false);
  expect(option2.selected).toBe(true);
  expect(option3.selected).toBe(false);
});
