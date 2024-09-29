import { FC } from "react";
import { usePerGameProfilesEnabled } from "../../hooks/controller";
import { ToggleField } from "@decky/ui";

export const PerGameProfilesToggle: FC = () => {
  const [perGameProfilesEnabled, setPerGameProfilesEnabled] =
    usePerGameProfilesEnabled();

  return (
    <ToggleField
      label="Enable Per Game Profiles"
      checked={perGameProfilesEnabled}
      onChange={setPerGameProfilesEnabled}
    />
  );
};
