import { ApplicationCommand } from "./interfaces/ApplicationCommand";
/** */

import { getNowTime } from "./commands/getNowTime";
import { Hello } from "./commands/hello";

export const slashCommands: ApplicationCommand[] = [Hello, getNowTime];
