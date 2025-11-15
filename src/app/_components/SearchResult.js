"use client";

export const SearchResult = (props) => {
  return (
    <div className="flex justify-between p-2">
      <div>
        <img className="" src={props.image} />
        <div className="flex flex-col">
          {props.title}
          {props.rate}
          {props.date}
        </div>
      </div>
      <div></div>
    </div>
  );
};
