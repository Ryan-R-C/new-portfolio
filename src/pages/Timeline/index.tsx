import { useState } from "react";
//@ts-ignore
import HorizontalTimeline from "react-horizontal-timeline";
import { Container } from "./styles";


export default function Timeline({ title, dates, description }: any) {
  const [value, setValue] = useState(0);


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

