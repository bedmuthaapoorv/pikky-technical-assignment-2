"use client";
import Filter from "../utilities/Filter";
export default function Filters(props: any) {
  return Object.keys(props.filters).map((filterName) => {
    return (
      <Filter
        name={filterName}
        options={props.filters[filterName].options}
        setter={props.filters[filterName].setter}
      ></Filter>
    );
  });
}
