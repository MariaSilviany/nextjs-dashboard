import { Suspense } from "react";
import EditProduk from "./EditProduk";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProduk />
    </Suspense>
  );
}
