import type { CSSProperties } from "vue";
import { resolveAssetUrl } from "@slidev/theme-default/layoutHelper";

export function handleBackground(
    background?: string,
    dim = false
): CSSProperties {
    const isColor = background?.[0] === "#" || background?.startsWith("rgb");

    const style = {
        background: isColor ? background : undefined,
        backgroundImage: isColor
            ? undefined
            : background
            ? dim
                ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(
                      background
                  )})`
                : `url("${resolveAssetUrl(background)}")`
            : undefined,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    if (!style.background) delete style.background;

    return style;
}
