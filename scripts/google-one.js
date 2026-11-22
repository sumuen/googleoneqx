/*
 * Quantumult X: Google One AI page response-body rewrite.
 *
 * Source SKU regex:  g1\.ios\.30tb\.ai\.pro\.m
 * Replacement value: g1.ai.ultra.3months_ip_90p.acq
 *
 * This only rewrites local response text; it cannot grant promotional
 * eligibility or change the actual App Store billing price.
 */
(function () {
  const body = $response.body;
  if (typeof body !== "string") {
    $done({});
    return;
  }

  let matches = 0;
  const rewritten = body.replace(/g1\.ios\.30tb\.ai\.pro\.m/g, () => {
    matches += 1;
    return "g1.ai.ultra.3months_ip_90p.acq";
  });

  console.log("[GoogleOneQX] SKU replacements: " + matches);

  if (matches > 0) {
    $done({ body: rewritten });
  } else {
    $done({});
  }
})();
