import type {Version} from "../types.ts";

type UseGetUrlProps = {
    env?: string
    version: keyof Version,
    endpoint: string,
}

export const useGetUrl = ({env, version = "LATEST", endpoint}: UseGetUrlProps) => {
    const vEnv = env || import.meta.env.VITE_API_DEV_URL
    const vVersion = version
    return `${vEnv}/${vVersion}/${endpoint}`;
}