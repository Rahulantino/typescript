type StatusProps = {
  status: "loading" | "error" | "success";
};

export const Status = (props: StatusProps) => {
  return (
    <>
      <h2>Loading...</h2>
      <h2>Data fetched SuccessFully.</h2>
      <h2>Error Fetching Data</h2>
    </>
  );
};
