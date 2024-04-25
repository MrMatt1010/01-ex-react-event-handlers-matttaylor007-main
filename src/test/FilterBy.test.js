import { render, cleanup, fireEvent } from "@testing-library/react";
import FilterBy from "../components/FilterBy";

afterEach(cleanup);

test("calls the setFilterBy callback function on change", () => {
  const handleChange = jest.fn();

  const { container, getByLabelText } = render(
    <FilterBy setFilterBy={handleChange} />
  );

  const select = getByLabelText(/filter by/i);
  const option1 = container.getElementsByTagName("option").item(0);
  const option2 = container.getElementsByTagName("option").item(1);
  const option3 = container.getElementsByTagName("option").item(2);

  fireEvent.change(select, { target: { value: "accessories" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(option1.selected).toBe(false);
  expect(option2.selected).toBe(true);
  expect(option3.selected).toBe(false);
});
