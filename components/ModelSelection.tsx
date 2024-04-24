"use client";
import useSWR from "swr";
import Select from "react-select";

async function fetchModels() {
  const r = await fetch("/api/GetEngines");
  return await r.json();
}

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo-instruct",
  });

  return (
    <div className="mt-2">
      <Select
        className="h-10"
        defaultValue={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        onChange={(e) => setModel(e.value)}
        options={models?.modelOptions}
      />
    </div>
  );
}

export default ModelSelection;