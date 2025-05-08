import path from "node:path";

import { Command } from "commander";

import { ensureFolderExists } from "@/utils/ensure-folder-exists";
import { luxeManifestFile } from "@/utils/luxe-manifest-file";
import { validadeLuxeManifest } from "@/utils/validate-luxe-manifest";

import { log } from "@/lib/log";

import { addComponent } from "./functions/add-component";
import { checkComponentBeforeAdd } from "./functions/check-component-before-add";
import { getRegistry } from "./functions/get-registry";
import { getSelectedComponents } from "./functions/get-selected-components";

export const add = new Command()
  .name("add")
  .summary("select and add the components you need.")
  .argument("[components...]", "enter the component name(s)")
  .action(async (components) => {
    try {
      const luxeManifestFileContent = await luxeManifestFile.read();

      if (!luxeManifestFileContent) {
        throw new Error(
          "The `luxe.json` file doesn't exist. Run the `luxe init` command",
        );
      }

      await validadeLuxeManifest({
        manifest: luxeManifestFileContent,
      });

      const { aliases } = luxeManifestFileContent;

      const componentsDirectory = path.resolve(
        aliases.components.replace("@/", "src/"),
      );
      await ensureFolderExists(componentsDirectory);

      const registryComponents = await getRegistry("components");

      const selectedComponents = await getSelectedComponents(
        registryComponents,
        components,
      );

      await checkComponentBeforeAdd(
        {
          componentsDirectory,
          selectedComponents,
        },
        (componentName) => {
          addComponent({
            componentName,
            componentsDirectory,
            registryComponents,
            aliases,
          });
        },
      );
    } catch (err) {
      log.error(
        err instanceof Error ? err.message : "An unknown error occurred.",
      );
      process.exit(0);
    }
  });
