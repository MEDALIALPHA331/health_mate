import { ReactNode } from "react";
import { Laugh } from "lucide-react";

interface Feelings {
  state: string;
  image: ReactNode;
  color: string;
  action?: () => {};
}

const feelingState: Feelings[] = [
  {
    state: "Happy",
    image: <Laugh />,
    color: "#ec4899",
  },
  //   {
  //     state: "Calm",
  //     image: "",
  //     color: "indigo",
  //   },

  //   {
  //     state: "Angry",
  //     image: "",
  //     color: "red",
  //   },
];

function Feelings() {
  return (
    <div className="flex scroll-m-4 items-center justify-center gap-4 p-4">
      {feelingState.map((feeling) => {
        return (
          <div
            key={feeling.state}
            className={`bg-[${feeling.color}] felx aspect-square w-24 flex-col items-center justify-center rounded-md`}
          >
            {feeling.image}
            <span>{feeling.state}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Feelings;
