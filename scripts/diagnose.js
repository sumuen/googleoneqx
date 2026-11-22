/*
 * GoogleOneQX read-only hit test.
 * Temporarily select this script in your Quantumult X rewrite rule.
 * It never modifies the response body or purchase parameters.
 */
(function () {
  try {
    const url = typeof $request === "object" && $request.url
      ? String($request.url).split("?")[0] : "(unknown)";
    const body = typeof $response === "object" && typeof $response.body === "string"
      ? $response.body : "";
    const matches = (body.match(/g1\.ios\.30tb\.ai\.pro\.m/g) || []).length;
    const msg = "Triggered: " + url + " | body=" + body.length
      + " chars | source SKU matches=" + matches;
    console.log("[GoogleOneQX] " + msg);
    if (typeof $notify === "function") {
      $notify("GoogleOneQX diagnostic", "Response triggered", msg);
    }
  } catch (error) {
    console.log("[GoogleOneQX] Diagnostic error: " + String(error));
  }
  $done({});
})();
