import { ReactNode } from "react";

type OscarProps = {
  children: React.ReactNode;
};

export default function Oscar(props: OscarProps) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}
