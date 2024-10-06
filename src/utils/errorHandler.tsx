import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const errorHandler = (
  fetchData: FetchBaseQueryError | SerializedError | undefined
) => {
  if (!fetchData) {
    return "error";
  }

  if ("message" in fetchData) {
    return <>{fetchData.message ?? "error"}</>;
  }
  if ("status" in fetchData) {
    return <>{fetchData.status}</>;
  }
};
