import { useParams } from "react-router";
import { modifySheetData } from "../cheatSheetData";

function Components() {
  const { url } = useParams();
  const page = modifySheetData.find((item) => item.path === url);

  return (
    <div>
      {page.content.map((item) => {
        if (item.p) return <p key={item.id}>{item.p}</p>;
        if (item.h2) return <h2 key={item.id}>{item.h2}</h2>;
        if (item.h3) return <h3 key={item.id}>{item.h3}</h3>;
        if (item.c)
          return (
            <pre key={item.id}>
              <code>{item.c}</code>
            </pre>
          );
        return null;
      })}
    </div>
  );
}

export default Components;
