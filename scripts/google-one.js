/*
 * Google One AI page -- Quantumult X response body rewrite
 *
 * Converted from the two Shadowrocket "正文重写" rules in the provided screenshot:
 *   30tb\.ai\.pro\.m  -> 30tb.m
 *   20tb\.m\.v2       -> 20tb.m
 *
 * These are literal SKU/string replacements in page response text.
 * They do NOT grant any subscription, Colab credits or server-side rights.
 */

(function () {
  const body = $response.body;

  if (typeof body !== "string") {
    $done({});
    return;
  }

  const rules = [
    ["30tb.ai.pro.m", "30tb.m"],
    ["20tb.m.v2", "20tb.m"]
  ];

  let output = body;
  for (const [from, to] of rules) {
    output = output.split(from).join(to);
  }

  if (output !== body) {
    $done({ body: output });
  } else {
    $done({});
  }
})();
