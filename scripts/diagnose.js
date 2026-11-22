/*
 * Quantumult X diagnostic (NO response modification).
 * Temporarily point the existing script-response-body rewrite to this file.
 * It reports whether the rewrite was triggered and whether the two expected
 * strings were present in the HTTP response body.
 *
 * Do not publish response bodies, cookies or full request URLs when debugging.
 */
(function () {
  try {
    const url = typeof $request !== "undefined" && $request.url ? String($request.url) : "(unknown URL)";
    const path = url.split("?")[0];
    const body = typeof $response !== "undefined" && typeof $response.body === "string"
      ? $response.body : "";

    const count = (text, needle) => text ? text.split(needle).length - 1 : 0;
    const first = count(body, "30tb.ai.pro.m");
    const second = count(body, "20tb.m.v2");

    const message = "Triggered: " + path + " | body=" + body.length
      + " chars | SKU1=" + first + ", SKU2=" + second;
    console.log("[GoogleOneQX] " + message);
    if (typeof $notify === "function") {
      $notify("GoogleOneQX diagnostic", "Response rewrite triggered", message);
    }
  } catch (e) {
    console.log("[GoogleOneQX] Diagnostic error: " + String(e));
  }
  $done({});
})();
