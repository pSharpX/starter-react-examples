import React from "react";
import CreateItemForm from "./CreateItemForm";
import ItemList from "../detailItem/ItemList";

export default function CreateItemPage() {
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-8 col-sm-12 col-md-8">
          <CreateItemForm />
        </div>
        <div className="col-4 col-sm-12 col-md-4">
          <ItemList DefaultViewMode="list-view" ShowViewModeToolbar={false} />
        </div>
      </div>
    </div>
  );
}
