import React from "react";

import EventCard from "./EventCard";
import EventDetail from "./EventDetail";
import List from "@/components/common/List";

const EventList = ({
  dataList,
  idList,
  onClick,
  sortFlag = false,
  type = "all",
}: {
  dataList?: EventList;
  idList?: string[];
  onClick?: (event: GameEvent) => void;
  sortFlag?: boolean;
  type?: "multi" | "all";
}) => {
  const sort = sortFlag
    ? {
        data: [
          {
            title: "切れ者",
            func: (data: GameEvent) => JSON.stringify(data)?.indexOf("切れ者") !== -1,
          },
          { title: "有选项", func: (data: GameEvent) => data?.choiceList.length > 1 },
          { title: "无选项", func: (data: GameEvent) => data?.choiceList.length <= 1 },
        ],
      }
    : undefined;
  const filterFunc =
    type === "multi"
      ? (data: GameEvent) => {
          return data?.choiceList.length > 1;
        }
      : undefined;
  return (
    <List
      listKey="events"
      dataList={dataList}
      idList={idList}
      sort={sort}
      filterFunc={filterFunc}
      className=""
      itemRender={(item, setCur) => (
        <EventCard
          className="mr-1 mb-1"
          data={item}
          onClick={() => (onClick ? onClick(item) : setCur(item))}
        />
      )}
      detailRender={(item) => item && <EventDetail data={item} />}
    />
  );
};

export default EventList;
