import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items) // chaining methods to create lodash wrapper to paginate on the client side
    .slice(startIndex)
    .take(pageSize)
    .value();
}
