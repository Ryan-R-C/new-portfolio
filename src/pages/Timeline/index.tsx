import React, { useState } from "react";
//@ts-ignore
import HorizontalTimeline from "react-horizontal-timeline";
import { Container } from "./styles";


export default function Timeline({ title, dates, description }: any) {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  // Values should be only date
  /* Ex.:
  const dates = ["2021-01-01", "2021-01-15", "2021-03-22", "2022-03-22", "2022-05-22", "2022-10-22"];
  */

  // Description array corresponding to values
  /* Ex.:
  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
    "The event of 22 March 2021 : Board Exam2",
    "The event of 22 March 2021 : Board Exam3",
    "The event of 22 March 2021 : Board Exam4",
  ];
  */



  return (
    <>{
    (title && dates && description) &&
      <Container>

        <h2>
          {title}
        </h2>

        <div style={{
          width: "80%",
          height: "100px",
          margin: "0 auto"
        }}>
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#1A79AD",
              outline: "#dfdfdf"
            }}
            index={value}
            indexClick={(index: any) => {
              setValue(index);
              setPrevious(value);
            }}
            values={dates}
          />
        </div>
        <div className="text-center">{description[value]}</div>
      </Container>
      }
    </>
  );
}

